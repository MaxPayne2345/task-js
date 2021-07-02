function viewDiv_catalog() {
    document.getElementById("show_catalog").style.display = "block"
    document.getElementById("show_favorites").style.display = "none"
};
function viewDiv_favorites() {
    document.getElementById("show_catalog").style.display = "none"
    document.getElementById("show_favorites").style.display = "block"
};
function viewDiv_album() {
    document.getElementById("albumPersone").style.display = "block"
};
function viewDiv_image() {
    document.getElementById("imageAlbum").style.display = "block"
};