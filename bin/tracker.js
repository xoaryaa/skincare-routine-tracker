#!/usr/bin/env node

import { promptUser } from '../lib/prompts.js';
import { addRoutine, viewRoutines } from '../lib/tracker.js';
import chalk from 'chalk';

console.log(chalk.green.bold("\nWelcome to the Skincare Routine Tracker!\n"));

const main = async () => {
    const { action } = await promptUser();

    if (action === 'Add new routine') {
        await addRoutine();
    } else if (action === 'View routines') {
        viewRoutines();
    }
};

main();
