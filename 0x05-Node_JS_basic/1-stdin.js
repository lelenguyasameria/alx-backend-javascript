const readline = require('readline');

// Create an interface for readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);

    // Prepare to close the application
    console.log('This important software is now closing\n');

    // Close the readline interface
    rl.close();
});
