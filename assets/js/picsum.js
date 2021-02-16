const container = document.querySelector('.container');
const width = 300;
const cantidadTotalRandom = 1000;
const arraySize = 50;
for (let i = 0; i < arraySize; i++) {
    let heightRamdom = width * (Math.floor(Math.random() * 3) + 1);
    let idPhoto = (Math.floor(Math.random() * cantidadTotalRandom) + 1);
    // console.log(idPhoto);
    // console.log(width + ' X ' + heightRamdom);
    fetch(`https://picsum.photos/id/` + idPhoto + `/` + width + `/` + heightRamdom)
        .then(function(data) {
            if (data.status == 200) {
                // return data.text();
                // return JSON.parse(data);
                console.log(data);
                container.innerHTML += "<div class='card card-size-" + heightRamdom + "'>" +
                    "<div class='card-wrap'>" +
                    "<img src='" + data.url + "' alt='" + width + 'x' + heightRamdom + "'>" +
                    "<span class='card-image-overlay'><div class='card-hover'>" +
                    "<div class='button-save'><span class='button-save-left'>Pinterest<span class='material-icons'>expand_more</span></span>" +
                    "<span class='button-save-right'>Guardar</span></div><div class='button-more'>" +
                    "<div class='button-more-icon'><span class='material-icons'>call_made</span>pinterest.com</div>" +
                    "<div class='button-more-icon'><span class='material-icons'>file_upload</span></div>" +
                    "<div class='button-more-icon'><span class='material-icons'>more_horiz</span></div>" +
                    "</div></div>" +
                    "</span ></div ></div >";
                console.log('Url ' + i + ' : ' + data.url);
            } else {
                throw "Respuesta incorrecta del servidor";
            }
        })
        .catch(err => {
            console.log(err);
        });
}

function myFunction() {
    document.getElementById('search-icon-one').classList.add('input-search-display');
    document.getElementById('search-icon-three').classList.add('input-search-display');
    document.getElementById('search-icon-two').classList.add('search');
}

var iconOne = document.getElementById("search-icon-one");
var iconTwo = document.getElementById("search-icon-two");
var iconThree = document.getElementById("search-icon-three");
// Detect all clicks on the document
document.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".input-search")) return;

    // If user clicks outside the element, hide it!
    iconOne.classList.remove("input-search-display");
    iconTwo.classList.remove("search");
    iconThree.classList.remove("input-search-display");
});