const mensCollection = [
  {
    id: 1,
    title: "Kurta Pajama Set",

    price: 1499,
    image:
      "Images/male/kurta.png",
  },
  {
    id: 2,
    title: "Sherwani Set",

    price: 5499,
    image: "Images/male/sherwani.png",
  },
  {
    id: 3,
    title: "Black Pathani Kurta",

    price: 1899,
    image: "Images/male/black.png",
  },
  {
    id: 4,
    title: "Nehru Jacket Kurta Set",

    price: 2399,
    image: "Images/male/nehru.png",
  },
  {
    id: 5,
    title: "Dhoti Kurta Set",

    price: 1699,
    image: "images/male/dhoti.png",
  },
  {
    id: 6,
    title: "Indo-Western Outfit",

    price: 2799,
    image: "images/male/indo.png",
  },
  {
    id: 7,
    title: "Designer Sherwani",

    price: 6999,
    image: "images/male/designer.png",
  },
  {
    id: 8,
    title: "Printed Cotton Kurta",

    price: 1199,
    image: "images/male/printed.png",
  },
  {
    id: 9,
    title: "Bandhgala Suit",

    price: 3599,
    image: "images/male/suit.png",
  },
  {
    id: 10,
    title: "Angrakha Kurta",

    price: 2299,
    image: "images/male/a.png",
  },
  {
    id: 11,
    title: "Festive Kurta",

    price: 1399,
    image: "images/male/festive.png",
  },
  {
    id: 12,
    title: "Wedding Kurta Set",

    price: 3199,
    image: "images/male/wedding.png",
  },
  {
    id: 13,
    title: "Floral Printed Kurta",

    price: 1299,
    image: "images/male/floral.png",
  },
  {
    id: 14,
    title: "Velvet Indo-Western",

    price: 3999,
    image: "images/male/velvet.png",
  },
  {
    id: 15,
    title: "Pastel Kurta Churidar",

    price: 1599,
    image: "images/male/pastel.png",
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


const womenCollecton=[
  
  {
    "id": 1,
    "title": "Anarkali Suit Set",
    "price": 2499,
    "image": "women/anarkali.png"
  },
  {
    "id": 2,
    "title": "Banarasi Silk Saree",
    "price": 6499,
    "image": "women/banarasi.png"
  },
  {
    "id": 3,
    "title": "Printed Churidar Kurta",
    "price": 2199,
    "image": "women/churidar.png"
  },
  {
    "id": 4,
    "title": "Bandhani Lehenga Set",
    "price": 2899,
    "image": "women/bandhani.png"
  },
  {
    "id": 5,
    "title": "Phulkari Dupatta Kurta Set",
    "price": 1799,
    "image": "women/phulkari.png"
  },
  {
    "id": 6,
    "title": "Indo-Western Gown",
    "price": 3299,
    "image": "women/indo-gown.png"
  },
  {
    "id": 7,
    "title": "Designer Lehenga",
    "price": 7999,
    "image": "women/designer-lehenga.png"
  },
  {
    "id": 8,
    "title": "Cotton Printed Suit",
    "price": 1499,
    "image": "women/cotton-suit.png"
  },
  {
    "id": 9,
    "title": "Sharara Suit Set",
    "price": 2599,
    "image": "women/sharara.png"
  },
  {
    "id": 10,
    "title": "Kasavu Kerala Saree",
    "price": 1999,
    "image": "women/kasavu.png"
  },
  {
    "id": 11,
    "title": "Festive Kurti and Skirt",
    "price": 1699,
    "image": "women/festive-kurti.png"
  },
  {
    "id": 12,
    "title": "Bridal Lehenga Set",
    "price": 3999,
    "image": "women/bridal-lehenga.png"
  },
  {
    "id": 13,
    "title": "Ikkat Saree",
    "price": 2299,
    "image": "women/ikkat-saree.png"
  },
  {
    "id": 14,
    "title": "Velvet Pre-stitched Saree",
    "price": 3499,
    "image": "women/velvet-saree.png"
  },
  {
    "id": 15,
    "title": "Pastel Georgette Suit",
    "price": 1899,
    "image": "women/pastel-suit.png"
  }
]

