const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, data => {
                resolve(data)
            })
            .fail(() => reject(id))

    })
}

function onError(id) {
    console.log(`Error: no se pudo recuperar el personaje ${id}`)
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

//      Multiples promises
// obtenerPersonaje(1)
//     .then(persona => {
//         console.log(`El personaje 1 es ${persona.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(persona => {
//         console.log(`El personaje 2 es ${persona.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(persona => {
//         console.log(`El personaje 3 es ${persona.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(persona => {
//         console.log(`El personaje 4 es ${persona.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(persona => {
//         console.log(`El personaje 5 es ${persona.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(persona => {
//         console.log(`El personaje 6 es ${persona.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(persona => {
//         console.log(`El personaje 7 es ${persona.name}`)
//     })
//     .catch(onError)