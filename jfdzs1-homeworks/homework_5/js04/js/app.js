function jestWPrzedziale(wartosc, min, max) {

  // TODO: zwróć 'zla wartosc' jeśli nie podano wartości
  if ( wartosc === undefined ) {
      return 'zla wartosc';
  }
  /*
    TODO: zwróć 'zla wartosc' jeśli wartość nie jest liczbą
    lub nie jest ciągien znaków reprezentującym liczbę
  */
  else if ( isNaN(wartosc) || parseInt(wartosc) === NaN ) {
      return "zla wartosc";
  }
  // TODO: zwróć 'zly min' jeśli min nie jest liczbą
  else if ( isNaN(min) ){
        return 'zly min';
  }

  // TODO: zwróć 'zla max' jeśli max nie jest liczbą
  else if ( isNaN(max) ) {
        return 'zla max';
  }

  // TODO: zwróć 'zly przedzial' jeśli przedzial nie jest poprawny
  else if ( min >= max || isNaN(min) || isNaN(max)|| min === undefined || max === undefined ) {
      return 'zly przedzial';
  }
  // TODO: zwróć true jeśli wartość jest w przedziale min .. max
  else if ( min <= wartosc && max >= wartosc ) {
      return true;
  }
  else {
      return false;
  }


}

function jestPozaPrzedzialem(wartosc, min, max) {
  // TODO: zwroc true jesli wartosc jest poza przedzialem min .. max
    if ( wartosc < min || wartosc > max || isNaN(wartosc) || wartosc === undefined ) {
        return true;
    }
    else {
        return false;
    }

}

function jestPozaPrzedzialemAND(wartosc, min, max) {
  /*
    TODO: zwroc true jesli wartosc jest poza przedzialem min .. max
    użyj '&&'
  */
  if ( wartosc >= min && wartosc <= max ) {
      return false;
  }
  else {
      return true;
  }


}
