var a = 5;
// TODO: jeśli a jest mniejsza od 10, zwiększ ją o 10
// if (warunek) { return wartość}
if (a < 10) {
    a += 10;
}
function zwiekszODwa(p) {
  // TODO: dla braku parametru zwróć 2
  // TODO: dla parametru niebędącego liczbą, zwróć 2
  // TODO: zwróć p zwiększone o 2
  
  // if (warunek) { return wartość}
  // if (warunek) { return wartość}
if ( p === undefined ){
    return 2;
} else if ( isNaN(p) === true) {
    return 2;
} else {
    return p += 2;
}
}
