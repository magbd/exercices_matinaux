//---------------------------------
//Exercice 1
//---------------------------------

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
