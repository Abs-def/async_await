console.log('person1: shows the ticket');
console.log('person2: shows the ticket');

// const promiseWifeBringingTkts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000);
// });

// const getPopcorn = promiseWifeBringingTkts.then((t) => {
//     console.log('wife: i have the tickets');
//     console.log('husband: we should get in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`popcorn ${t}`));
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should get in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`butter ${t}`));
// });

// getButter.then((t) => console.log(t));

const preMovie = async () => {

    const promiseWifeBringingTkts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const getButter = new Promise((resolve, reject) => resolve('butter'));

    let ticket = await promiseWifeBringingTkts;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should get in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should get in');
    console.log('wife: i need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter}`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are gettting late');
    console.log('husband: thankyou for the reminder');

    return ticket;
}

preMovie().then((m) => console.log(`person3: finally shows ${m}`));

console.log('person4: shows the ticket');
console.log('person5: shows the ticket');