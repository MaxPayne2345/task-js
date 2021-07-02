// Подключение к API пользователей
var namePer = document.querySelector('#namePersone')
var requestURL = 'https://json.medrating.org/users/'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.onload = () => {
    if (request.status >= 400) {
        console.error(request.response)
    } else {
        console.log(request.response)
    }
}
request.oneerror = () => {
    console.log(request.response)
}
request.onload = function() {
    var persone = request.response
    namePersone(persone)
}
request.send()
// Подключение к API альбомов
var albumsPer = document.querySelector('#albumPersone')
var requestURLalbums = 'https://json.medrating.org/albums?userId=3'
var requestAlbum = new XMLHttpRequest()
requestAlbum.open('GET', requestURLalbums)
requestAlbum.responseType = 'json'
requestAlbum.onload = () => {
    if (requestAlbum.status >= 400) {
        console.error(requestAlbum.response)
    } else {
        console.log(requestAlbum.response)
    }
}
requestAlbum.oneerror = () => {
    console.log(requestAlbum.response)
}
requestAlbum.onload = function() {
    var alboms = requestAlbum.response
    albumPersone(alboms)
}
requestAlbum.send()
//Подключение к API картинкам
var imagePer = document.querySelector('#imageAlbum')
var requestURLimages = 'https://json.medrating.org/photos?albumId=2'
var requestImage = new XMLHttpRequest()
requestImage.open('GET', requestURLimages)
requestImage.responseType = 'json'
requestImage.onload = () => {
    if (requestImage.status >= 400) {
        console.error(requestImage.response)
    } else {
        console.log(requestImage.response)
    }
}
requestImage.oneerror = () => {
    console.log(requestImage.response)
}
requestImage.onload = function() {
    var images = requestImage.response
    imagesPersone(images)
}
requestImage.send()