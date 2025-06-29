//let nombre = 'Oscar';


let persona = {
    name: 'Oscar',
    age: 33,
    heigh: 180,
    weight: 87
}

//Functions
//No podemos tipar como (nombre: string, age: number) porque entra en conflito con la sintáxis JS
//Cuando renombramos variables en la function 

//tipando argumentos y valores de retorno
function saludar(persona: {nombre: string, age: number}): number {

    const {nombre, age} = persona;

    console.log(`Hola ${nombre}, tienes ${age} años`);

    return age; 
}



//Optional properties

type Hero = {
    readonly id?: number //Opcional y solo lectura 
    name: string
    age: number
    isActive?: boolean
}

let hero: Hero = {
    name: 'Thor',
    age: 1500
};

function createHero(hero: Hero): Hero{
    const { name, age } = hero; 
    return { name, age, isActive: true}
}

const thor = createHero({ name: 'Thor', age: 1500});
