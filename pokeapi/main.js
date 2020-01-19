const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_PATH = 'pokemon/:name/'
const opts = { crossDomain: true }

const POKEINFO__INFO_name = document.getElementsByClassName('pokeinfo__info--name')[0]
const POKEINFO__INFO_type = document.getElementsByClassName('pokeinfo__info--type')[0]
const pokeImg = document.getElementById('pokeImg')

function getPokeApi(name) {
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
    POKEINFO__INFO_name.innerHTML = name
    POKEINFO__INFO_type.innerHTML = types.reduce((previus, current, i) => {
        let str = previus
        if (i != 0) {
            str += ' | '
        }
        str += current.type.name
        return str
    },'')
}

function pokeSearch() {
    let pokeName = document.getElementsByClassName('search__input')[0].value
    getPokeApi(pokeName)
        .then(data => {
            changePokeImg(data.sprites.front_default)
            changePokeInfo(data)
        })
        .catch(() => alert('No encontrado'))
}