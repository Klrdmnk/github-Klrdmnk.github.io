let nevem = "Dominik";
let korom = "18";
console.log('A Javascript is betoltott');

// ez egy egysoros komment
/*
tobb soros
kommentet irni
*/

// >, <, >=, <=, ==, ===

if (korom >= 21) {
    console.log('Amerikaban is eleg idos vagyok az alkoholhoz.')
} else if (korom >=18) {
    console.log('Mar eleg idos vagyok hogy igyak (europaban)')
} else {
    console.log('Meg nem mehetsz dohanyboltba')
}

let masikkor = "18";

if (masikkor > 18) {
    console.log('A masik is eleg idos ahhoz, hogy igyon sort')
}

console.log('Itt a vege fuss el vele')

// jQuerys resz

console.log($("h1").text())
$("h1").text('Ezt a javascriptbol valtoztattak meg')

if (korom  >= 21) {
    $("h1").text('Amerikaban is eleg idos vagyok az alkoholhoz.')
} else if (korom >= 18) {
    $("h1").text('Mar eleg idos vagyok hogy igyak (europaban)')
} else {
    $("h1").text('Meg nem mehetsz dohanyboltba')
}

console.log($(".sarga").css('background-color'))
// $("li").css('background-color', 'lime')
// $(".sarga").css('background-color', 'magenta')
$("p").html('alma, ami <strong>nagyons</strong> fontos')
$("li:last-of-type").remove()
$("li").toggleClass('sarga')


$('#hozzaado').click(function () {
    $("ul").append('<li>ujabb elem</li>')
})

$('#torlo').click(() => {
   $("li:last-of-type").remove()  
})

for (let i= 0; i < 100; i = i+1) {
    $("ul").append('<li>${i}. Nem csalok tobbet a vizsgan.</li>')
}

let szinek = ['orange', 'magenta', 'red', 'brown', 'green', 'blue', 'teal']

function egySzinDoboz(szin) {
    $('.kontener').append('<div class="doboz"></div>')
    $('.kontener div:last-of-type').css('background-color', szin)
}

egySzinDoboz('lime')
egySzinDoboz('pink')

szinek.forEach(egySzinDoboz)