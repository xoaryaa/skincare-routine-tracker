// lib/prompts.js

import inquirer from 'inquirer';

export const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add new routine', 'View routines']
        }
    ]);
};

export const promptRoutineDetails = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'step',
            message: 'Enter the skincare step (e.g., Cleanser, Moisturizer):'
        },
        {
            type: 'input',
            name: 'product',
            message: 'Enter the product name:'
        },
        {
            type: 'input',
            name: 'time',
            message: 'Enter the time of day (e.g., Morning, Night):'
        }
    ]);
};
