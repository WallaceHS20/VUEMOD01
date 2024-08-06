const axios = require('axios');

let num = 2;
/*
if (num % 2 == 0){
    console.log('====================================');
    console.log("ele é par");
    console.log('====================================');
}else{
    console.log('====================================');
    console.log("ele é ímpar");
    console.log('====================================');
}*/

async function dados() {

    const response = await axios.get('https://randomuser.me/api/?results=50')

    const people = response.data.results

    //console.log(people);

    const DE = people.filter((person) => person.name.first && person.name.last)

    people.forEach((people)=>{
        console.log(people.name.first);
    })

    //console.log(DE);

}

function teste() {
    const numbers = [5, 10, 15, 20];

    // 1. Usando map para dobrar os números
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled); // [10, 20, 30, 40]

    // 2. Usando forEach para imprimir cada número
    numbers.forEach((number) => {
        console.log(number);
    });
    // 5
    // 10
    // 15
    // 20

    // 3. Usando filter para obter apenas os números maiores que 10
    const greaterThan10 = numbers.filter((number) => number > 10);
    console.log(greaterThan10); // [15, 20]

}

dados()


