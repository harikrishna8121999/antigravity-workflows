import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { existsSync } from 'fs';

// In a real scenario, this would point to the remote raw GitHub URL.
// For testing purposes, we might want to allow a local override or point to the repo we are building.
// const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/harikrishna8121999/antigravity-workflows/main';
// BUT, since we are building the repo right now and it's not pushed, we can't test fetching from GitHub.
// So for this implementation, we will simulate fetching or assume it will work once pushed.
// Let's use a placeholder URL that the user needs to update before publishing.
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/harikrishna8121999/antigravity-workflows/main';
const REGISTRY_URL = `${GITHUB_RAW_URL}/workflows/registry.json`;

export async function installWorkflow(workflows, options) {
    const spinner = ora('Fetching workflow registry...').start();

    try {
        // Fetch registry
        // In production: const registry = await fetch(REGISTRY_URL).then(r => r.json());

        // FOR LOCAL DEV/TESTING ONLY: 
        // We will read the local registry.json if we can't reach the network or to verify logic.
        // However, the final code should fetch from network.
        // Let's implement the network fetch but fallback or mock for our verification if needed.

        let registry;
        try {
            const res = await fetch(REGISTRY_URL);
            if (!res.ok) throw new Error(`Failed to fetch registry: ${res.statusText}`);
            registry = await res.json();
        } catch (e) {
            // If fetch fails (likely because repo doesn't exist yet), let's try to read local registry for testing
            // This is strictly for the "Verification" phase of this agent task
            const localRegistryPath = path.resolve(new URL(import.meta.url).pathname, '../../../workflows/registry.json');
            // Fix path for Windows if slightly malformed by URL object
            const fixedPath = localRegistryPath.replace(/^\\C:/, 'C:').replace(/%20/g, ' ');

            try {
                // We can't easily rely on local file in the published package, 
                // but for now let's just error out if network fails, unless we are debugging.
                // Actually, let's just fail gracefully so the user knows.
                throw e;
            } catch (localErr) {
                throw new Error('Could not fetch registry from GitHub. (Repo might not be public yet)');
            }
        }

        // Create .agent/workflows directory if needed
        const agentDir = path.join(process.cwd(), '.agent');
        const workflowDir = path.join(agentDir, 'workflows');

        // Check if .agent/workflows exists
        if (!existsSync(workflowDir)) {
            await fs.mkdir(workflowDir, { recursive: true });
        }

        // Handle --all flag
        if (options.all) {
            workflows = Object.keys(registry.workflows);
        }

        // Handle --category flag
        if (options.category) {
            workflows = Object.entries(registry.workflows)
                .filter(([_, w]) => w.category === options.category)
                .map(([name]) => name);
        }

        // Deduplicate
        workflows = [...new Set(workflows)];

        if (workflows.length === 0) {
            spinner.warn('No workflows specified.');
            return;
        }

        spinner.text = `Installing ${workflows.length} workflow(s)...`;

        for (const name of workflows) {
            const workflow = registry.workflows[name];
            if (!workflow) {
                console.log(chalk.yellow(`\n⚠ Workflow "${name}" not found in registry, skipping`));
                continue;
            }

            const targetPath = path.join(workflowDir, `${name}.md`);

            // Overwrite check
            if (existsSync(targetPath)) {
                // SIMPLE OVERWRITE CHECK: In a real CLI we might prompt using 'inquirer',
                // but for this MVP let's just skip or warn. 
                // Or we can assume 'force' flag (TODO: add force flag).
                // For now, let's log a warning and overwrite to keep it simple as per plan.
                console.log(chalk.yellow(`\n⚠ Overwriting existing workflow: ${name}`));
            }

            // Download workflow file
            const url = `${GITHUB_RAW_URL}/workflows/${workflow.category}/${name}.md`;
            const res = await fetch(url);

            if (!res.ok) {
                console.log(chalk.red(`\n✖ Failed to download ${name}: ${res.statusText}`));
                continue;
            }

            const content = await res.text();

            // Save to .agent/workflows/
            await fs.writeFile(targetPath, content);

            console.log(chalk.green(`\n✓ Installed ${name} (${workflow.description})`));
        }

        spinner.succeed('Done!');
        console.log(chalk.dim(`\nTry it now: Type /${workflows[0] || 'workflow-name'} in Antigravity`));

    } catch (error) {
        spinner.fail('Installation failed');
        console.error(chalk.red(error.message));
    }
}
