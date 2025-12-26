import chalk from 'chalk';
import ora from 'ora';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/harikrishna8121999/antigravity-workflows/main';
const REGISTRY_URL = `${GITHUB_RAW_URL}/workflows/registry.json`;

export async function listWorkflows(options) {
    const spinner = ora('Fetching available workflows...').start();

    try {
        const res = await fetch(REGISTRY_URL);
        if (!res.ok) throw new Error(`Failed to fetch registry: ${res.statusText}`);
        const registry = await res.json();

        spinner.stop();

        console.log(chalk.bold('\n📦 Available Workflows\n'));

        const workflows = Object.entries(registry.workflows);
        const categories = registry.categories || {};

        // Group by category
        const byCategory = {};
        workflows.forEach(([name, data]) => {
            if (options.category && data.category !== options.category) return;

            if (!byCategory[data.category]) byCategory[data.category] = [];
            byCategory[data.category].push({ name, ...data });
        });

        if (Object.keys(byCategory).length === 0) {
            console.log('No workflows found.');
            return;
        }

        for (const [category, items] of Object.entries(byCategory)) {
            const catMeta = categories[category] || {};
            const emoji = catMeta.emoji || '📁';
            const displayName = catMeta.name || category.toUpperCase();

            console.log(chalk.blue.bold(`${emoji} ${displayName}`));
            items.forEach(item => {
                console.log(`  ${chalk.green(item.name).padEnd(22)} ${chalk.dim(item.description)}`);
            });
            console.log('');
        }

        console.log(chalk.dim(`Total: ${workflows.length} workflows in ${Object.keys(byCategory).length} categories`));

    } catch (error) {
        spinner.fail('Failed to list workflows');
        console.error(chalk.red(error.message));
        console.log(chalk.dim('(If this is a new repo, did you push registry.json to GitHub yet?)'));
    }
}
