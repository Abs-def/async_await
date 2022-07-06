console.log('person1: shows the ticket');
console.log('person2: shows the ticket');

const promiseWifeBringingTkts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn = promiseWifeBringingTkts.then((t) => {
    console.log('wife: i have the tickets');
    console.log('husband: we should get in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`popcorn ${t}`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should get in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`butter ${t}`));
});

const getColdDrink = getButter.then((t) => {
    console.log('husband: got your butter. Anything else darling?');
    console.log('wife: where is the drink?');
    console.log('husband: my bad just a sec');
    console.log('husband: here is your cold drink, shall we go now?');
    console.log('wife: ofcourse we are gettnig late');
    return new Promise((resolve, reject) => resolve(`coke ${t}`));
});

getColdDrink.then((t) => console.log(t));

// const preMovie = async () => {

//     const promiseWifeBringingTkts = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ticket');
//         }, 3000);
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

//     const getButter = new Promise((resolve, reject) => resolve('butter'));

//     const getColdDrink = new Promise((resolve, reject) => resolve('coke'));

//     let ticket = await promiseWifeBringingTkts;

//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should get in');
//     console.log('wife: no i am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we should get in');
//     console.log('wife: i need butter on my popcorn');

//     let butter = await getButter;

//     console.log(`husband: i got some ${butter}`);
//     console.log('husband: anything else darling?');
//     console.log('wife: what about my coke?');
//     console.log('husband: oh my bad just a sec');

//     let coldDrink = await getColdDrink;

//     console.log(`husband: here's your ${coldDrink}`);
//     console.log('husband: shall we go now?');
//     console.log('wife: ofcourse we are getting late');
//     console.log('husband: thanks for the reminder');

//     return ticket;
// }

// preMovie().then((m) => console.log(`person3: finally shows ${m}`));

console.log('person4: shows the ticket');
console.log('person5: shows the ticket');