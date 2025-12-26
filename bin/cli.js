#!/usr/bin/env node
import { program } from 'commander';
import { installWorkflow } from '../src/commands/install.js';
import { listWorkflows } from '../src/commands/list.js';
import { searchWorkflows } from '../src/commands/search.js';
import { infoWorkflow } from '../src/commands/info.js';
import fs from 'fs/promises';

const packageJson = JSON.parse(
    await fs.readFile(new URL('../package.json', import.meta.url))
);

program
    .name('antigravity-workflows')
    .description('Install workflows for Antigravity AI assistant')
    .version(packageJson.version);

program
    .command('install <workflows...>')
    .description('Install one or more workflows')
    .option('-c, --category <category>', 'Install all workflows from a category')
    .option('-a, --all', 'Install all workflows')
    .action(installWorkflow);

program
    .command('list')
    .description('List available workflows')
    .option('-c, --category <category>', 'Filter by category')
    .action(listWorkflows);

program
    .command('search <query>')
    .description('Search for workflows')
    .action(searchWorkflows);

program
    .command('info <workflow>')
    .description('Get details about a workflow')
    .action(infoWorkflow);

program.parse();
