//function that generate a random number
function randomNumber(num){
    return Math.floor(Math.random()*num);
}
const diffArrays ={
    food: ['bacon','cheese','steak','carrots','garlic'],
    activities: ['walking','sleeping','playing','barking'],
    friends: ['squirells','cats','other dogs','horses']
}
let myDog=[];
for (let word in diffArrays){
    let optionIdx=randomNumber(diffArrays[word].length);
    
    switch (word){
        case 'food':
            myDog.push(`My dog usually loves to eat ${diffArrays[word][optionIdx]}. `);
            break;
        case 'activities':
            myDog.push(`Everytime I come home from work, my dog is ${diffArrays[word][optionIdx]
            }.`)
            break;
        case 'friends':
            myDog.push(`My dog would always make friends with ${diffArrays[word][optionIdx]}.`);
            break;
        default:
            myDog.push('Give me more information');
    }
}
console.log(myDog);
