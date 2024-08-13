// lib/tracker.js

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { promptRoutineDetails } from './prompts.js';

const routinesFilePath = path.resolve('./data/routines.json');

export const addRoutine = async () => {
    const routineDetails = await promptRoutineDetails();
    let routines = [];

    if (fs.existsSync(routinesFilePath)) {
        routines = JSON.parse(fs.readFileSync(routinesFilePath, 'utf8'));
    }

    routines.push(routineDetails);
    fs.writeFileSync(routinesFilePath, JSON.stringify(routines, null, 2));

    console.log(chalk.blue('Routine added successfully!\n'));
};

export const viewRoutines = () => {
    if (!fs.existsSync(routinesFilePath)) {
        console.log(chalk.red('No routines found.\n'));
        return;
    }

    const routines = JSON.parse(fs.readFileSync(routinesFilePath, 'utf8'));

    routines.forEach((routine, index) => {
        console.log(chalk.yellow(`Routine ${index + 1}:`));
        console.log(`  Step: ${routine.step}`);
        console.log(`  Product: ${routine.product}`);
        console.log(`  Time: ${routine.time}\n`);
    });
};
