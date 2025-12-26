import chalk from 'chalk';
import ora from 'ora';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/harikrishna8121999/antigravity-workflows/main';
const REGISTRY_URL = `${GITHUB_RAW_URL}/workflows/registry.json`;

export async function infoWorkflow(workflowName) {
    const spinner = ora('Fetching workflow details...').start();

    try {
        const res = await fetch(REGISTRY_URL);
        if (!res.ok) throw new Error('Failed to fetch registry');
        const registry = await res.json();

        const workflow = registry.workflows[workflowName];

        spinner.stop();

        if (!workflow) {
            console.log(chalk.red(`Workflow "${workflowName}" not found.`));
            return;
        }

        console.log(chalk.bold.green(`\n${workflowName}`));
        console.log('='.repeat(workflowName.length));
        console.log(`\n${chalk.bold('Description:')} ${workflow.description}`);
        console.log(`${chalk.bold('Category:')}    ${workflow.category}`);
        console.log(`${chalk.bold('Tags:')}        ${workflow.tags.join(', ')}`);
        console.log(`\n${chalk.bold('Install command:')}`);
        console.log(chalk.cyan(`  npx antigravity-workflows install ${workflowName}`));
        console.log('');

    } catch (error) {
        spinner.fail('Failed to get info');
        console.error(chalk.red(error.message));
    }
}
