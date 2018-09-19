// ---------------------AJAX------------------

// var lien ;
// var liste_cont = document.getElementById("show");
var result = document.getElementById("et_place");

var links = document.querySelectorAll(".list-group-item");
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener("click", function(e) {
    e.preventDefault();
    result.innerHTML = "Chargement...";
    load(this.getAttribute("href"), result);
    // alert('this.getAttribute')
  });
}
//MAGIQUE
function load(lien, place) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      place.innerHTML = httpRequest.responseText;
    }
  };
  httpRequest.open("GET", lien, true);
  httpRequest.send();
}

// document.getElementById('idDuBoutton').onclick = function () {
//     load('path/fichier.php', idDelemplacement);
// }

// load('/Projet_space/Analyse_space/inc/cont_db.php',liste_cont);
// load('/Projet_space/Analyse_space/account.php?id=15', result);

// document.getElementById("et_info").onclick = function() {
//   load("../../et.html", liste_cont);
// };

// =================================================
