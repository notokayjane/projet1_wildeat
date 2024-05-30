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
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "Le McQueen",
    city: "Paris",
    restaurantType: "Japonais",
    restaurantRating: "x étoiles",
    restaurantSite: "https://lemcqueen.fr/",
    restaurantDesc: "Au McQueen, café & bar à cocktails japonais à l’Opéra, dégustez ramen, donburi, gyozas, desserts, thés, vins naturels italiens, sakés, et cocktails maison. Ambiance musicale rock par Kaoru, qui se trouve être le barman !",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "Le chalet Savoyard",
    city: "Paris",
    restaurantType: "Français",
    restaurantRating: "x étoiles",
    restaurantSite: "https://www.chalet-savoyard.fr/",
    restaurantDesc: "En plein cœur de Paris, dans le 11ème, ce restaurant chaleureux attire les amoureux de gastronomie savoyarde authentique avec des produits du terroir. Spécialités copieuses, créations maison, accueil convivial.",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "Pidè Paris",
    city: "Paris",
    restaurantType: "Turc",
    restaurantRating: "x étoiles",
    restaurantSite: "https://pide.paris/",
    restaurantDesc: "Pidè Paris propose une version turque de la pizza, le pide, avec des ingrédients frais et authentiques. Le menu inclut pides, mezzés et desserts traditionnels, le tout dans une ambiance conviviale et chaleureuse.",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "BIBIBAP",
    city: "Bordeaux",
    restaurantType: "Coréen",
    restaurantRating: "5 étoiles",
    restaurantSite: "https://www.bibibap.fr/",
    restaurantDesc: "Découvrez le meilleur de la streetfood coréenne autour de plats traditionnels comme le bibimbap et de tapas originales à partager sans modération !",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "Mochicas Café",
    city: "Lyon",
    restaurantType: "Péruvien",
    restaurantRating: "x étoiles",
    restaurantSite: "https://mochicascafe.com/",
    restaurantDesc: "Le restaurant Mochicas propose une cuisine péruvienne traditionnelle et fusionnée. Le menu comprend le ceviche classique, le lomo saltado, les choritos a la chalaca, les empanadas et la causa limeña.",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "Royal Orchid",
    city: "Montpellier",
    restaurantType: "Thaïlandais",
    restaurantRating: "x étoiles",
    restaurantSite: "https://www.facebook.com/p/Royal-Orchid-100027943136673/",
    restaurantDesc: "Le Royal Orchid à Montpellier propose une cuisine thaïlandaise authentique et raffinée. La carte variée comprend des plats populaires tels que le pad thaï, les currys thaï, les brochettes satay, ainsi que des spécialités moins connues comme le poisson à la sauce aigre-douce ou le bœuf loc lac.",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
  },
  {
    restaurantName: "Le Quatrième Mur",
    city: "Bordeaux",
    restaurantType: "Français",
    restaurantRating: "5 étoiles",
    restaurantSite: "https://quatrieme-mur.com/",
    restaurantDesc: "Au théâtre, le quatrième mur est celui, invisible, qui sépare le public de la scène. Un nom tout choisi pour cette table installée dans les ors du Grand théâtre ! Un produit de qualité, une cuisson précise, une garniture et un jus : Philippe Etchebest va à l'essentiel et nous régale en toute simplicité. Installée sur une galerie latérale du grand théâtre, la terrasse est très agréable",
    restaurantPic: "",
    dishPic1: "",
    dishPic2: "",
    dishPic3: "",
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

