(function attachListeners() {
    var wpisanyOwoc = document.getElementById("wpiszOwoc"),  
        sprawdzButton = document.getElementById("sprawdzButton");

    sprawdzButton.addEventListener('click', function(event) {
        onButtonClicked(wpisanyOwoc.value);
    });
})();
function showLoader() {
    var loader= document.getElementById('loader');
    loader.classList.remove('hidden');
}
var loader;
function onButtonClicked (nazwaOwocu) {
    console.log(czyMamWKoszyku(nazwaOwocu));
    showLoader();
    setTimeout(function (){
        loader.classList.add('hidden');
        alert(czyMamWKoszyku(nazwaOwocu));
    }, 2000);
};


function czyMamWKoszyku(owoc, ilosc) {
    var ilosc = Math.floor(Math.random() * 10)+1;
    if(!owoc) return "Musisz podać owoc";
    switch(owoc) {
        case "Banana":
            if (ilosc == 1) {
                return "Tak, masz w koszyku " + ilosc + " Banana"
            }
            else if (ilosc >=2 && ilosc <=4){
               return "Tak, masz w koszyku " + ilosc + " Banany"
            }
            else { return "Tak, masz w koszyku " + ilosc + " Bananów"};
            break;
        case "Jabłko":
            if (ilosc == 1) {
                return "Tak, masz w koszyku " + ilosc + " Jabłko"
            }
            else if (ilosc >=2 && ilosc <=4){
                return "Tak, masz w koszyku " + ilosc + " Jabłka"
            }
            else { return "Tak, masz w koszyku " + ilosc + " Jabłek"};
            break;
        case "Mandarynkę":
            if (ilosc == 1) {
                return "Tak, masz w koszyku " + ilosc + " Mandarynkę"
            }
            else if (ilosc >=2 && ilosc <=4){
                return "Tak, masz w koszyku " + ilosc + " Mandarynki"
            }
            else { return "Tak, masz w koszyku " + ilosc + " Mandarynek"};
            break;
        case "Melona":
            if (ilosc == 1) {
                return "Tak, masz w koszyku " + ilosc + " Melona, ale starego"
            }
            else if (ilosc >=2 && ilosc <=4){
                return "Tak, masz w koszyku " + ilosc + " Melony, ale stare"
            }
            else { return "Tak, masz w koszyku " + ilosc + " Melonów, ale starych"};
            break;
        case "Ziemniaka":
        case "Marchewkę":
        case "Kartofle":
        case "Szpinak":
            return "Podałeś warzywo a w koszyku masz tylko owoce!"
            break;
        default:
            return "Nie masz tego w koszyku"
    }
};

function czyJestWarzywem(warzywo) {
    var listaWarzyw = ["Ziemniaka", "Marchewkę","Kalafiora", "Szpinak", "Buraka", "Kapustę", "Cukinię", "Ogórka", "Grzyby ahiitake"];

    for (var i=0; i<listaWarzyw.length; i++) {
        if (warzywo == listaWarzyw[i]) {
            return true;
        }
    }
    return false;
}

