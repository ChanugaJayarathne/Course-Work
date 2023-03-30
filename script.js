let products = {
  data: [
    {
      productName: "Medium Type Home with Garden",
      category: "Sell",
      price: "Rs.40 Milion",
      image: "Images/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg",
    },
    {
      productName: "Paradise Apartment(Medium House Scheme)",
      category: "Apartment",
      price: "Rs.25 Milion",
      image: "Images/SRG-PaloAlto-TanPlaza-FULL25-1002_edit-HR.jpg",
    },
    {
      productName: "Small Type Cabin House",
      category: "Sell",
      price: "Rs. 13 Million",
      image: "Images/download-7.jpg",
    },
    {
      productName: "Small House For Rent In Moratuwa",
      category: "Rent",
      price: "Rs.35,000 per Month",
      image: "Images/56937-b580.jpg",
    },
    {
      productName: "Large Type House Rent in Colombo 07",
      category: "Rent",
      price: "Rs. 150,000 per month",
      image: "Images/Glen-Waverley-House-e1621903923212.jpg",
    },
    {
      productName: "Small Type room for a couple",
      category: "Room",
      price: "Rs. 10,000 per month",
      image: "Images/17-fabulous-bedroom-decor-ideas-FB-1200x700-compressed-1200x700.jpg",
    },
    {
      productName: "Family Room",
      category: "Room",
      price: "Rs.20,000 per month",
      image: "Images/Bedroom.jpg",
    },
    {
      productName: "Luxery Apartments",
      category: "Apartment",
      price: "Rs.50Milion",
      image: "Images/apartment.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};// JavaScript Document