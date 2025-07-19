const womenCollection = [
  {
    id: 1,
    title: "Anarkali Suit Set",
    price: 2499,
    image: "../women/anarkali.png",
  },
  {
    id: 2,
    title: "Banarasi Silk Saree",
    price: 6499,
    image: "../women/banarasi.png",
  },
  {
    id: 3,
    title: "Printed Churidar Kurta",
    price: 2199,
    image: "../women/churidar.png",
  },
  {
    id: 4,
    title: "Bandhani Lehenga Set",
    price: 2899,
    image: "../women/bandhani.png",
  },
  {
    id: 5,
    title: "Phulkari Dupatta Kurta Set",
    price: 1799,
    image: "../women/phulkari.png",
  },
  {
    id: 6,
    title: "Indo-Western Gown",
    price: 3299,
    image: "../women/indo-gown.png",
  },
  {
    id: 7,
    title: "Designer Lehenga",
    price: 7999,
    image: "../women/designer-lehenga.png",
  },
  {
    id: 8,
    title: "Cotton Printed Suit",
    price: 1499,
    image: "../women/cotton-suit.png",
  },
  {
    id: 9,
    title: "Sharara Suit Set",
    price: 2599,
    image: "../women/sharara.png",
  },
  {
    id: 10,
    title: "Kasavu Kerala Saree",
    price: 1999,
    image: "../women/kasavu.png",
  },
  {
    id: 11,
    title: "Festive Kurti and Skirt",
    price: 1699,
    image: "../women/festive-kurti.png",
  },
  {
    id: 12,
    title: "Bridal Lehenga Set",
    price: 3999,
    image: "../women/bridal-lehenga.png",
  },
  {
    id: 13,
    title: "Ikkat Saree",
    price: 2299,
    image: "../women/ikkat-saree.png",
  },
  {
    id: 14,
    title: "Velvet Pre-stitched Saree",
    price: 3499,
    image: "../women/velvet-saree.png",  
  },
  {
    id: 15,
    title: "Pastel Georgette Suit",
    price: 1899,
    image: "../women/pastel-suit.png",
  },
];

const b = document.getElementById("womens-collection");

womenCollection.forEach((collection) => {
  const card1 = document.createElement("div");
  card1.classList.add("card"); 

  card1.innerHTML = `
    <div class="sticky1">&#x2661;</div>
    <img class="product-image" src="${collection.image}" alt="${collection.title}" />
    <h1 class="product-title">${collection.title}</h1>
    <h5 class="product-price">₹${collection.price}</h5>
    <div class="buttons">
      <button class="newbutton">buy now</button>
      <button class="newbutton">add to cart</button>
    </div>
  `;
  
  b.appendChild(card1);
});
