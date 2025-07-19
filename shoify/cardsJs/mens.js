const mensCollection = [
  {
    id: 1,
    title: "Kurta Pajama Set",

    price: 1499,
    image: "../Images/male/kurta.png",
  },
  {
    id: 2,
    title: "Sherwani Set",

    price: 5499,
    image: "../Images/male/sherwani.png",
  },
  {
    id: 3,
    title: "Black Pathani Kurta",

    price: 1899,
    image: "../Images/male/black.png",
  },
  {
    id: 4,
    title: "Nehru Jacket Kurta Set",

    price: 2399,
    image: "../Images/male/nehru.png",
  },
  {
    id: 5,
    title: "Dhoti Kurta Set",

    price: 1699,
    image: "../images/male/dhoti.png",
  },
  {
    id: 6,
    title: "Indo-Western Outfit",

    price: 2799,
    image: "../images/male/indo.png",
  },
  {
    id: 7,
    title: "Designer Sherwani",

    price: 6999,
    image: "../images/male/designer.png",
  },
  {
    id: 8,
    title: "Printed Cotton Kurta",

    price: 1199,
    image: "../images/male/printed.png",
  },
  {
    id: 9,
    title: "Bandhgala Suit",

    price: 3599,
    image: "../images/male/suit.png",
  },
  {
    id: 10,
    title: "Angrakha Kurta",

    price: 2299,
    image: "../images/male/a.png",
  },
  {
    id: 11,
    title: "Festive Kurta",

    price: 1399,
    image: "../images/male/festive.png",
  },
  {
    id: 12,
    title: "Wedding Kurta Set",

    price: 3199,
    image: "../images/male/wedding.png",
  },
  {
    id: 13,
    title: "Floral Printed Kurta",

    price: 1299,
    image: "../images/male/floral.png",
  },
  {
    id: 14,
    title: "Velvet Indo-Western",

    price: 3999,
    image: "../images/male/velvet.png",
  },
  {
    id: 15,
    title: "Pastel Kurta Churidar",

    price: 1599,
    image: "../images/male/pastel.png",
  },
];

const a = document.getElementById("mens-collection");

mensCollection.forEach((collection) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  
 
  <div class="sticky1">&#x2661; </div>
 
  <img class="product-image" src="${collection.image}" alt="${collection.title}" />
  
   <h1 class="product-title">${collection.title}</h1>
  
  <h5 class="product-price">₹${collection.price}</h5>
  <div class="buttons">
        <button class="newbutton">buy now</button>
     <button class="newbutton">add to cart</button>
    </div>

`;

  a.appendChild(card);
});

