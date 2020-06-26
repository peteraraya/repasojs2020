
// import heroes, { owners } from '../data/heroes';
import heroes  from '../data/heroes';

// console.log(heroes);

// console.log(owners)

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// console.log( getHeroeById(1) );


// Otra función , utilizando filter

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner('DC'));