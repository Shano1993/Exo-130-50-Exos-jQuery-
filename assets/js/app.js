// 1
$('#submit').hide();

$('#check').on('click', function () {
    $('#submit').show();
})

// 2
$(".test[src='']").hide();

// 3

setInterval(function () {
    $('#clignote').toggleClass('red');
}, 100);

// 4

$('tr:even').css( {
    "background-color" : "red"
})

// 5

$('#imprim').click(function () {
    window.print();
});

// 6

$('textarea').attr('maxlength', '20');

// 7

$('#bold').each(function (index, elem) {
    let word = elem.innerText.split(" ");
    let first = word[0];
    word.shift();
    elem.innerHTML = '<b>' + first + '</b>' + " " + word.join(" ");
});

// 8

$('body').append('<div style = "width: 100px; height: 100px; background-color: red">Mon nouveau div</div>');

// 9

$('#one').appendTo(('#two'));

// 10

const statique = {
    valueOne: "Valeur 1",
    valueTwo: "Valeur 2"
}

let value = $('#myValue')
value.html(statique.valueOne + " " +  statique.valueTwo);

// 11

$('#newLi').on('click', function () {
    $('#list').append('<li>Mon li est ajouté</li>');
})

// 12

let mySelect = $('#listSelect');
function removeOption() {
    mySelect.children().remove();
    mySelect.append('<option>Ajouter un element</option>')
}
removeOption();

// 13

let underLine = $('#underline');
for (let i = 0; i < underLine.length; i++) {
    underLine.css({
        "text-decoration-line" : "underline"
    })
}

// 14

const val = $('#value');
$('#val').on('click', function () {
    val.val();
})

// 15

function remove() {
    $('.remove').removeClass();
}
remove();

// 16

let span = $('#16');
span.css({
    "color" : "red"
})
span.removeAttr('style');

// 17

$('#click').on('click', function (event) {
    if (event.button === 0) {
        alert('Click gauche utilisé');
    }
    else {
        alert('Click droit utilisé');
    }
})

// 18

function checkNumber(number) {
    if (Number.isInteger(number)) {
        console.log('Le nombre est bien un entier');
    }
}
checkNumber();

// 19

$('#input1').on('keyup', function (event) {
    if (event.keyCode === 13) {
        alert('Touche enter pressée')
    }
});

// 20

let array =["Une entrée", "Deux entrée"];
function length() {
    array.length;
    console.log(array.length);
}
length();

// 21

function valArea() {
    $('textarea').val();
}
valArea();

// 22

$('#formulaire').append('<input type="radio" value="Mon type radio">');


// 23

console.log($('p').first().offset());

// 24

$('span').each(function (index, elem) {
    elem.style.textTransform = "uppercase";
});

// 25

$('#text').change(function () {
    alert('Le champe de texte est modifié')
});

// 26

$('tr').last().remove();

// 27

$('#val').text('Modifié le texte Partie 27');

// 28

$('#listSelect').append('<option>Un</option>, <option>Deux</option>, <option>Trois</option>, <option>Quatre</option>');

// 29

$('span').css({
    "background-color" : "orange"
});

// 30

$('tr').siblings().remove();

// 31

$("#listSelect").change(function () {
    console.log($(this).val());
});

// 32

$('#imprim').removeAttr('href');

// 33

$('.changeClass')[0].className = "change";

// 34

$('#addClass').addClass('classe');

// 35

console.log($('#selected p').length);

// 36



// 37

console.log(jQuery.fn.jquery);

// 38

$('tr').eq(0).remove();

// 39

$('#input1').val('Input changé');

// 40

$('#clignote').html('Mon texte changé mais qui clignote toujours');

// 41

$('p').click(function () {
    console.log($(this).attr("class"))
});

// 42

window.addEventListener('load', function () {
    $('a').attr("href", "newLink")
});

// 43

function disable(elem) {
    elem.removeAttr("disable");
}
disable($('#submit'));

// 44

console.log($('div').outerWidth());

// 45

$('#animation').mouseenter(function () {
    $('#animation').css({
        "color" : "red",
        "font-size" : "20px",
        "transform" : "rotate(50deg)"
    });
});

// 46

// 47

$('p').attr('data-ajout', 'ajouté');





