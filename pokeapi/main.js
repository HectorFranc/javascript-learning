const pokeNameDefault = 'bulbasaur'

const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_PATH = 'pokemon/:name/'
const opts = { crossDomain: true }

const POKEINFO__INFO_name = document.getElementsByClassName('pokeinfo__info--name')[0]
const POKEINFO__INFO_type = document.getElementsByClassName('pokeinfo__info--type')[0]
const pokeImg = document.getElementById('pokeImg')

function getPokeApiPromise(name) {
    return new Promise((resolve, reject) => {
        let url = `${API_URL}${POKE_PATH.replace(':name', name)}`
        $
        .get(url, opts, data => {
            resolve(data)
        })
        .fail(() => reject(name))
    })
}

function changePokeImg(newUrl) {
    pokeImg.src = newUrl
}

function changePokeInfo({ name, types }) {
    POKEINFO__INFO_name.innerHTML = name.substr(0, 1).toUpperCase() + name.substr(1)
    POKEINFO__INFO_type.innerHTML = types.reduce((previus, current, i) => {
        let str = previus
        if (i != 0) {
            str += ' | '
        }
        str += current.type.name.substr(0, 1).toUpperCase() + current.type.name.substr(1)
        return str
    },'')
}

function populatePokeApiValues(pokeName) {
    getPokeApiPromise(pokeName)
        .then(data => {
            changePokeImg(data.sprites.front_default)
            changePokeInfo(data)
        })
        .catch(() => alert('No encontrado'))
}

function pokeSearch() {
    let search__input = document.getElementsByClassName('search__input')[0]
    populatePokeApiValues(search__input.value.toLowerCase())
    search__input.value = ''
    return false;
}

// Populate
$(document).ready(() => populatePokeApiValues(pokeNameDefault))