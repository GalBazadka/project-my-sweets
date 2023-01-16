
const productsArr = [
  {
    name: "עוגת נוטלה",
    productId: 01,
    url: "picture/momCake2.jpeg",
    price: 300
  },
  {
    name: "עוגת דונאטס",
    productId: 02,
    url: "picture/dounateCake3.jpeg",
    price: 200
  },
]

generateItemsUl();

const cartArr = []

// under all variables add functionality to get items from localStorage

function generateItemsUl(){

  const cake = document.getElementsByClassName("cake");
  const item = document.createElement("div");
  const productId = document.createElement("p");
  const image = document.createElement("img");
  const name = document.createElement("h3");
  const productprice = document.createElement("p");
  const productAddToCart = document.createElement("a");

  item.className = "item";
  productId.className = "productId";
  image.className = "cakes";
  name.className = "name";
  productprice.className = "price";
  productAddToCart.idName = "addCrt";
  productAddToCart.href = "#";
  productAddToCart.addEventListener("click", addToCartFunction); 
  productAddToCart.innerHTML = "הוסף לסל";

  
  item.appendChild(productId);
  item.appendChild(image);
  item.appendChild(name);
  item.appendChild(productprice);
  item.appendChild(productAddToCart);
  console.log(item);
  cake.appendChild(item);

  

  for (let i=0; i < productsArr.length; i++){
    productId.innerHTML = productsArr[i].productId;
    console.log(productId.innerHTML);

    image.src= productsArr[i].url;
    console.log(image.src);

    name.innerHTML = productsArr[i].name;
    productprice.innerHTML = productsArr[i].price;
    console.log(productprice.innerHTML);
  }
}

function openCartFunction(){
  document.getElementById("shoppingCart").style.display = "block";
}

function closeCartFunction() {
  const x = document.getElementById("shoppingCart");
  x.style.display = "none";
  document.body.style.backgroundColor = "white"; 
}

function creatProduct(x){
 
  const products = document.getElementById("products");
  const ID = document.createElement("p");
  const product = document.createElement("div");
  const image = document.createElement("img")
  const details = document.createElement("div");
  const producticonHref = document.createElement("a");
  const producticon = document.createElement("img");
  const productname = document.createElement("p");
  const productprice = document.createElement("p");

  product.className = "product";
  ID.className = "Id";
  product.dir = "rtl";
  image.className = "productImg";
  image.src = " ";
  details.className = "productDetails";
  producticon.src = "picture/closeBlueBig.png";
  producticon.className = "xmarkDelete";
  producticonHref.href = "#";
  producticonHref.addEventListener("click", removeFromCartFunction); 
  productprice.className = "productNamePrice";
  productname.className = "productName";

  for (let i=0; i < x.parentElement.children.length; i++) {
    if (x.parentElement.children[i].className === "name") {
      productname.innerHTML = x.parentElement.children[i].innerHTML;
    }
    else if (x.parentElement.children[i].className === "price") {
      productprice.innerHTML = x.parentElement.children[i].innerHTML;
    }
    else if (x.parentElement.children[i].className === "cakes") {
      image.src = x.parentElement.children[i].src;
    }
    else if (x.parentElement.children[i].className === "productId") {
      ID.innerHTML = x.parentElement.children[i].innerHTML;
    }
  } 

  details.appendChild(ID);
  details.appendChild(productname);
  producticonHref.appendChild(producticon) ;
  details.appendChild(producticonHref) ;
  details.appendChild(productprice);
  product.appendChild(image);
  product.appendChild(details);
  products.appendChild(product);
}

function calculateTotal(){
  const allPrices = document.querySelectorAll(".productNamePrice"); 
  let totalSum = 0;
  for (let i=0 ; i < allPrices.length; i++){
      let current = allPrices[i].innerHTML;
      current = current.split(" ")[3];
      current = parseFloat(current);
      totalSum += current;
    } 
  document.getElementById("totalPrice").innerHTML = totalSum + " ₪ ";
}

function saveToLocalStorage(){
  // localStorage.clear(); 
  const allProductId = document.querySelectorAll(".Id");
  console.log(allProductId);
  const allNames = document.querySelectorAll(".productName");
  const allImg = document.querySelectorAll(".productImg");

  for (let i=0 ; i < allProductId.length; i++){
    let current = Number(localStorage.getItem('price'));
    current = allPrices[i].innerHTML.split(" ")[3];
    console.log(current);
    let array = [];
    array.push(allPrices[i].innerHTML.split(" ")[3]);
    console.log(allPrices);
    localStorage.setItem('price', current); 
    allPrices[i]= current.innerHTML.split(" ")[3];
    // console.log(allPrices);
    console.log(allPrices);
    localStorage.setItem('price', allPrices[i].innerHTML.split(" ")[3]); 

    let currentName = (localStorage.getItem('name'));
    currentName = allNames[i].innerHTML;
    localStorage.setItem('name', currentName);
    console.log(allNames[i].innerHTML);
    localStorage.setItem('name', allNames[i].innerHTML);


    let currentImg = (localStorage.getItem('img'));
    currentImg = allImg[i].src;
    ocalStorage.setItem('img', currentImg); 
    console.log(allImg[i].src);
    localStorage.setItem('img', allImg[i].src); 

  
  localStorage.setItem('price', JSON.stringify(allPrices.innerHTML.split(" ")[3]));
 }
}

function CartCounter(){
  const allProductId = document.querySelectorAll(".Id");
  let counter = document.querySelectorAll(".CartCounter");
  counter.innerHTML = Number(localStorage.getItem('cartCount')) || 0;
  console.log(counter.innerHTML);
  for (let j = 0 ; j < counter.length; j++){
      counter[j].innerHTML =  allProductId.length;
      localStorage.setItem('cartCount', allProductId.length); 
  }
  console.log(counter);
  return allProductId.length;
}


function addToCartFunction(x){
  document.getElementById("shoppingCart").style.display = "block";
  creatProduct(x)
  calculateTotal()
  CartCounter()
  // saveToLocalStorage()
}

function removeFromCartFunction(event) {
  event.target.parentElement.parentElement.parentElement.remove();
  calculateTotal()
  CartCounter()
}





