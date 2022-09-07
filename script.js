// Random message components object.
const components = {
    greetings: ['Hello', 'Heyy', 'Eyup', 'Hiya', 'Hi', 'Sup', 'Wazzup'],
    compliments: ['beautiful', 'gorgeous', 'babe', 'babey', 'pretty thang', 'you absolute specimen', 'fitty'],
    activitys: ['watch a movie', 'watch some TV', 'to the cinema', 'for a walk', 'for a quick drink', 'play some pool', 'play the playstation', 'out for a meal'],
    get greeting() {
        return random(this.greetings);
    },
    get compliment() {
        return random(this.compliments);
    },
    get activity() {
        return random(this.activitys);
    },
    randomMessage() {
        console.log(`${this.greeting} ${this.compliment}. Let's go ${this.activity}.`);
    }
}

// Return random element from array passed in. 
const random = arr => {
    const item = arr[Math.floor(Math.random()*arr.length)];
    return item;
}

// Node command line interface.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = () =>
  rl.question("Generate a date night plan message (Y/N)", answer => {
    if (answer.toUpperCase() === "Y") {
        components.randomMessage()
        question();
    } else if (answer.toUpperCase() === "N") {
        console.log('Goodbye!');
        rl.close();
    } else {
        console.log('Invalid input!');
        question();
    }
  });

question();