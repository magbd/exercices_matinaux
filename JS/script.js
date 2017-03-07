//---------------------------------
//Exercice 1
//---------------------------------
// Créer un tableau nommé « tabImg » contenant à chaque cases une string.
// Cette string sera le l’url vers l’image.
// Parcourir le tableau et afficher chaque images dans un fichier HTML.
// Rajouter un bouton suppression qui supprimera la dernière case du tableau.

var affichage = document.getElementById('affichage');
var bouton = document.getElementById('supprimer');

var tabImg = [
  "https://www.dreamhost.com/blog/wp-content/uploads/2015/10/DHC_blog-image-01-300x300.jpg",
  "http://economictimes.indiatimes.com/thumb/msid-49212668,width-640,resizemode-4/slideshows/events/spectacular-images-albuquerque-international-balloon-fiesta.jpg",
  "http://www.vulgaris-medical.com/sites/default/files/styles/big-lightbox/public/field/image/actualites/2016/02/12/le-chat-source-de-bienfaits-pour-votre-sante.jpg",
  "http://www.imagespourtoi.com/lesimages/bob-eponge/image-bob-eponge-2.jpg"
];

function aff(){
  var element = ""; //réinitialiser le tableau à zéro pour mettre à jour l'affichage
  var i;
  for(i = 0; i < tabImg.length; i++){
    element  += "<img src="+ tabImg[i] +">";
  }
  affichage.innerHTML = element;
}
aff();

function supprimerElem(){
  tabImg.pop();
  aff();
}

bouton.onclick = supprimerElem;


//---------------------------------
//Exercice 2
//---------------------------------
// Créer un Input prenant en entrée du texte.
// - Si le chiffre est compris entre – 2 et – l’infini, afficher l’image bleu
// - Si le chiffre est compris entre – 1 et 2, afficher l’image jaune
// - Si le chiffre est compris entre 3 et + l’infini afficher l’image verte
// - Si le texte en entrée est autre chose que des chiffres afficher l’image rouge

var affResultat = document.getElementById('affResultat');

function submitInput(){
  var resultat ="";
  var input = parseInt(document.getElementById('input').value);
  alert(input);
  if (input >= 2 && input < 3) {
    resultat = tabImg[0];
  }
  else if (input >= 1 && input < 2){
    resultat = tabImg[1];
  }
  else if (input >= 3 && input < 4) {
    resultat = tabImg[2];
  }
  else {
    alert('else');
    resultat = tabImg[3];
  }
  affResultat.innerHTML = '<img src='+resultat+'>';
}
submit.onclick = submitInput;


//---------------------------------
//Exercice 3
//---------------------------------
// Sauvegarder les températures par ordre croissant dans un tableau.
// - Afficher le premier et dernier élément du tableau
// - Afficher la taille du tableau
// - Transformer le tableau en string avec Array.join()- Rajouter à la string une tabulation au début (‘\t’) et un saut
// de ligne au milieu (‘\n’)
// - Afficher du 3 au 7 caractère avec String.substring()
var boutonAjout = document.getElementById('boutonAjout');
var affTemp = document.getElementById('affTemp');
var nbElem = document.getElementById('nbElem')
var croissant = document.getElementById('croissant');
var li = "";
var tabTemp = [];

function affTab(){
  for (var i = 0; i < tabTemp.length; i++) {
    li += "<li>"+tabTemp[i]+"</li>"
  }
  affTemp.innerHTML = li
}

function ajoutTab(){
  li = "";

  var temp = parseInt(document.getElementById('inputTemp').value);
  // alert(temp);
  tabTemp.push(temp);

  affTab();
  nb();
}
boutonAjout.onclick = ajoutTab;

function nb(){
  nbElem.innerHTML = tabTemp.length;
}
nb();
