// Code your solutions in this file
for(let age = 30; age < 40; age++){

    console.log(`I\'m ${age} years old. Happy birthday to me!`);


}

const gifts = ['teddy bear', 'drone', 'doll']

function wrapGifts(gifts){

    for (i = 0; i < gifts.length; i++){
        
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

        //debugger;
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]


function writeCards(names, event){

    let thankYou = []

    for (let i = 0; i <= 2; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return thankYou

}

writeCards(names, 'birthday')

function countDown(){

    let count = 10
    while (count >= 0){

        console.log(count--)
    }
}