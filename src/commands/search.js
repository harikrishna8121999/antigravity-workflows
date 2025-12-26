import chalk from 'chalk';
import ora from 'ora';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/harikrishna8121999/antigravity-workflows/main';
const REGISTRY_URL = `${GITHUB_RAW_URL}/workflows/registry.json`;

export async function searchWorkflows(query, options) {
    const spinner = ora('Searching...').start();

    try {
        const res = await fetch(REGISTRY_URL);
        if (!res.ok) throw new Error('Failed to fetch registry');
        const registry = await res.json();

        spinner.stop();

        const results = Object.entries(registry.workflows).filter(([name, data]) => {
            const q = query.toLowerCase();
            return (
                name.toLowerCase().includes(q) ||
                data.description.toLowerCase().includes(q) ||
                (data.tags && data.tags.some(t => t.toLowerCase().includes(q)))
            );
        });

        if (results.length === 0) {
            console.log(chalk.yellow(`No workflows found matching "${query}"`));
            return;
        }

        console.log(chalk.bold(`\nFound ${results.length} result(s) for "${query}":\n`));

        results.forEach(([name, data]) => {
            console.log(`${chalk.green.bold(name)}  ${chalk.dim(`(${data.category})`)}`);
            console.log(`${data.description}`);
            console.log(chalk.dim(`Tags: ${data.tags.join(', ')}`));
            console.log('');
        });

    } catch (error) {
        spinner.fail('Search failed');
        console.error(chalk.red(error.message));
    }
}
