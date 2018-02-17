
// pobieranie zawartości drugiego akapitu w dokumencie i wyświetlanie jej w konsoli (3 techniki)


// var getSecond = document.getElementById('second-p').innerHTML;
// console.log(getSecond);

// var getSecond = document.getElementsByTagName('p')[1].innerHTML;
// console.log(getSecond);

// var getSecond = document.querySelector('#second-p').innerHTML;
// console.log(getSecond);

function showSecondParagraph() {
    var getSecond = document.querySelector('#second-p').innerHTML;
    console.log(getSecond);
};

window.onload = showSecondParagraph();

function changeParagraph() {
    document.querySelector('#first-p').innerHTML = 'Zmiana tekstu akapitu 1 :)';
    var newP = document.createElement('p');
    var newText = document.createTextNode('Nowy akapit :)');
    newP.appendChild(newText);
    var secondP = document.getElementById('second-p');
    document.getElementById('my-article').insertBefore(newP, secondP);
};

document.getElementById('title').style.color = '#0f3f76';
document.getElementById('title').style.background = '#f6f6f6';

function changeFontColor() {
    var changeColor = document.getElementById('second-p');
    changeColor.classList.add('textColor');
};







