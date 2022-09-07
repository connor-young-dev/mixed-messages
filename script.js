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
    }
}

const random = arr => {
    const item = arr[Math.floor(Math.random()*arr.length)];
    return item;
}