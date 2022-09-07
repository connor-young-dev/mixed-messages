const components = {
    greeting: ['Hello', 'Heyy', 'Eyup', 'Hiya', 'Hi', 'Sup', 'Wazzup'],
    compliment: ['beautiful', 'gorgeous', 'babe', 'babey', 'pretty thang', 'you absolute specimen', 'fitty'],
    activity: ['watch a movie', 'watch some TV', 'to the cinema', 'for a walk', 'for a quick drink', 'play some pool', 'play the playstation', 'out for a meal']
}

const random = arr => {
    const item = arr[Math.floor(Math.random()*arr.length)];
    return item;
}