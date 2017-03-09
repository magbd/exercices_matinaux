var affResultat = document.getElementById('affResultat');


class Calculatrice {

  constructor() {
    this.resultat = 0;
    // this.chiffre1 = 0;
    // this.chiffre2 = 0;
    this.tableau = [];
  }

  // fais les opérations et rajoute à l’historique
  somme(chiffre1, chiffre2) {
    this.resultat = chiffre1 + chiffre2;
    this.tableau.push(this.resultat);
  }

  multiplication(chiffre1, chiffre2){
    this.resultat = chiffre1 * chiffre2;
    this.tableau.push(this.resultat);
  }

  division(chiffre1, chiffre2){
    this.resultat = chiffre1 / chiffre2;
    this.tableau.push(this.resultat);
  }

  // met le résultat à 0
  reset(){
    this.resultat = 0;
  }

  // affiche la variable resultat
  afficheResultat(){
     alert(this.resultat);
     console.log(this.tableau);
  }
}

var test = new Calculatrice();
test.somme(1, 1);
test.afficheResultat();
