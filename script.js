const restaurants = [
  {
    restaurantName: "Les Epicuriens",
    city: "Montpellier",
    restaurantType: "Français",
    restaurantRating: "4 étoiles",
    restaurantSite: "https://www.les-epicuriens-restaurant-juvignac.fr/",
    restaurantDesc: "Les Épicuriens à Juvignac est plus qu'un restaurant : c'est une destination gourmande. Brasserie, restaurant, et caviste, vous découvrirez une cuisine fusion unique.",
    restaurantPic: "images/epicuriens/Group 1_20231002110116.png",
    dishPic1: "/images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic2: "/images/epicuriens/Frame 23_20230912170427.png.webp",
    dishPic3: "/images/epicuriens/Frame 24_20230912172505.png.webp",
  },
  {
    restaurantName: "MIMA",
    city: "Lyon",
    restaurantType: "Italien",
    restaurantRating: "x étoiles",
    restaurantSite: "https://www.mima-lyon.fr/",
    restaurantDesc: "MI.MA, à l'origine [MI]lano [MA]rittima, est une ville italienne en Emilia Romagna, où la famille se retrouve. Cuisine italienne, ambiance festive, et sel de Cervia. Une histoire de famille et d'amour pour une cuisine généreuse, conviviale et authentique.",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "Le McQueen",
    city: "Paris",
    restaurantType: "Japonais",
    restaurantRating: "x étoiles",
    restaurantSite: "https://lemcqueen.fr/",
    restaurantDesc: "Au McQueen, café & bar à cocktails japonais à l’Opéra, dégustez ramen, donburi, gyozas, desserts, thés, vins naturels italiens, sakés, et cocktails maison. Ambiance musicale rock par Kaoru, qui se trouve être le barman !",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "Le chalet Savoyard",
    city: "Paris",
    restaurantType: "Français",
    restaurantRating: "x étoiles",
    restaurantSite: "https://www.chalet-savoyard.fr/",
    restaurantDesc: "En plein cœur de Paris, dans le 11ème, ce restaurant chaleureux attire les amoureux de gastronomie savoyarde authentique avec des produits du terroir. Spécialités copieuses, créations maison, accueil convivial.",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "Pidè Paris",
    city: "Paris",
    restaurantType: "Turc",
    restaurantRating: "x étoiles",
    restaurantSite: "https://pide.paris/",
    restaurantDesc: "Pidè Paris propose une version turque de la pizza, le pide, avec des ingrédients frais et authentiques. Le menu inclut pides, mezzés et desserts traditionnels, le tout dans une ambiance conviviale et chaleureuse.",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "BIBIBAP",
    city: "Bordeaux",
    restaurantType: "Coréen",
    restaurantRating: "5 étoiles",
    restaurantSite: "https://www.bibibap.fr/",
    restaurantDesc: "Découvrez le meilleur de la streetfood coréenne autour de plats traditionnels comme le bibimbap et de tapas originales à partager sans modération !",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "Mochicas Café",
    city: "Lyon",
    restaurantType: "Péruvien",
    restaurantRating: "x étoiles",
    restaurantSite: "https://mochicascafe.com/",
    restaurantDesc: "Le restaurant Mochicas propose une cuisine péruvienne traditionnelle et fusionnée. Le menu comprend le ceviche classique, le lomo saltado, les choritos a la chalaca, les empanadas et la causa limeña.",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "Royal Orchid",
    city: "Montpellier",
    restaurantType: "Thaïlandais",
    restaurantRating: "x étoiles",
    restaurantSite: "https://www.facebook.com/p/Royal-Orchid-100027943136673/",
    restaurantDesc: "Le Royal Orchid à Montpellier propose une cuisine thaïlandaise authentique et raffinée. La carte variée comprend des plats populaires tels que le pad thaï, les currys thaï, les brochettes satay, ainsi que des spécialités moins connues comme le poisson à la sauce aigre-douce ou le bœuf loc lac.",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
  {
    restaurantName: "Le Quatrième Mur",
    city: "Bordeaux",
    restaurantType: "Français",
    restaurantRating: "5 étoiles",
    restaurantSite: "https://quatrieme-mur.com/",
    restaurantDesc: "Au théâtre, le quatrième mur est celui, invisible, qui sépare le public de la scène. Un nom tout choisi pour cette table installée dans les ors du Grand théâtre ! Un produit de qualité, une cuisson précise, une garniture et un jus : Philippe Etchebest va à l'essentiel et nous régale en toute simplicité. Installée sur une galerie latérale du grand théâtre, la terrasse est très agréable",
    restaurantPic: "",
    dishPic1: "images/epicuriens/Frame 18_20230912170422.png.webp",
    dishPic2: "images/epicuriens/Frame 19_20230912170424.png.webp",
    dishPic3: "images/epicuriens/Frame 23_20230912170427.png.webp",
  },
]

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// Slideshow et boutons associés
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n){
  showDivs(slideIndex += n);
}
function currentDiv(n){
  showDivs(slideIndex = n);
}
function showDivs(n){
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("select-button");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}
// Fin du slideshow



// On affiche les restaurants dans le container fait pour
function afficherRestaurants(restaurants) {
  const container = document.getElementById('restaurant-container');
  // reset du container, bug si non présent
  container.innerHTML = '';
  // boucle for qui :
  // créé une div nommé card en html, y ajoute la class vignette-restaurant, et écrit le code avec innerHTML dans le HTML.
  // le code HTML est ici copié du HTML d'origine, en remplaçant les éléments exemples par les variables associées et issues
  // de restaurant : restaurant.xxx
  for (const restaurant of restaurants) {
    const card = document.createElement('div');
    card.classList.add('vignette-restaurant');
    card.innerHTML = `<div class="information-restaurant">
                              <h2 class="restaurant-name">${restaurant.restaurantName}</h2>
                              <p class="restaurant-description">${restaurant.restaurantDesc}</p>
                              <input type="checkbox" class="expand-button">
                              <div class="restaurant-note">Note: ${restaurant.restaurantRating}</div>
                              <div class="restaurant-link"><a href="${restaurant.restaurantSite}" target="_blank">Site web</a></div>
                          </div>
                          <div class="image-restaurant">
                              <img src="${restaurant.restaurantPic}" class="mySlides" alt="photo restaurant">
                              <img src="${restaurant.dishPic1}" class="mySlides" alt="photo plat 1">
                              <img src="${restaurant.dishPic2}" class="mySlides" alt="photo plat 2">
                              <img src="${restaurant.dishPic3}" class="mySlides" alt="photo plat 3">
                              <div class="slide-buttons">
                                <div class="left-arrow"></div>
                                <span class="select-button" onclick="currentDiv(1)"></span>
                                <span class="select-button" onclick="currentDiv(2)"></span>
                                <span class="select-button" onclick="currentDiv(3)"></span>
                                <div class="right-arrow"></div>
                              </div>
                          </div>`;
    container.appendChild(card);
  }
}
// Fonction pour filtrer les restaurants
function filterRestaurants(restaurants, filtres) {
  return restaurants.filter(restaurant => {
    // On fait une const pour chaque type de filtre
    // On regarde si un filtre est coché ou pas (!filtre.XXX permet de vérifier si c'est vide/faux ou pas)
    // et si c'est bien vide alors on regarde ce qui est dans le restaurant.xxx après
    const matchVille = !filtres.ville || filtres.ville.includes(restaurant.city);
    const matchTypeCuisine = !filtres.typeCuisine || filtres.typeCuisine.includes(restaurant.restaurantType);
    const matchNote = !filtres.note || (filtres.note.includes("x étoiles")) || filtres.note.includes(restaurant.restaurantRating);
    return matchVille && matchTypeCuisine && matchNote;
  });
}
// On sélectionne toutes les checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Mise à jour des résultats
function updateFilteredRestaurants() {
  // Création de l'objet filtre
  const filtre = {};
    // On cherche les valeurs des cases cochées, nom et état coché/décoché
  checkboxes.forEach(checkbox => {
    // Si une des checkbox est cochée alors 
      if (checkbox.checked) {
        // on récupére le name associé
        const name = checkbox.name;
        // si le filtre contient déjà des noms de ville/type etc..., alors les nouvelles sont ajoutées à la suite (d'où le push)
        // cela permet d'éviter de supprimer le contenu du tableau à chaque fois
        if (filtre[name]) {
          filtre[name].push(checkbox.value);
        // sinon, on créé une nouvelle donnée avec la value lue sur la checkbox associée, c'est dans le cas où le tableau filtre est vide
        } else {
          filtre[name] = [checkbox.value];
        }}});
    // Filtre et maj de la liste
    const restaurantsFiltres = filterRestaurants(restaurants, filtre);
    afficherRestaurants(restaurantsFiltres);
  }

  // Update sur case cochée
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateFilteredRestaurants);
});
  
afficherRestaurants(restaurants);
  