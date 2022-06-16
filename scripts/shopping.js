function openCartFunction(){
  document.getElementById("shoppingCart").style.display = "block";
  // document.body.style.backgroundColor = "#e7e7e7"; 
}

function calculateTotal(){
  const allPrices = document.querySelectorAll(".productNamePrice"); 
  let totalSum = 0;
  for (let i = 0; i < allPrices.length; i++){
    let current = allPrices[i].innerHTML;
    current = current.split(" ")[3];
    current = parseFloat(current);
    totalSum += current
  } 
  document.getElementById("totalPrice").innerHTML =totalSum + " ₪ ";
}

function addToCartFunction(x){
  document.getElementById("shoppingCart").style.display = "block";
  const products = document.getElementById("products");
  addone = false;

  // for (var i = 0; i< products.children.length; i++){
  //   console.log(products.children[i])
  //   for (var j = 0 ; j < products.children[i].children[1].children.length; j++){
  //     if (products.children[i].children[1].children[j].className === "productName") {
        
  //       for (var z=0; z < x.parentElement.children.length; z++) {
  //         if (x.parentElement.children[z].className === "name") {
  //           if (products.children[i].children[1].children[j].innerHTML = x.parentElement.children[z].innerHTML) {
  //             var addone = true;
  //           }
  //         }

  //       }
  //     }
  //     if (addone) {
  //       for (var j = 0 ; j < products.children[i].length; j++){ 
  //         if (products.children[i].children[1].children[j].id === "quantity") {
  //           products.children[i].children[1].children[j].value = products.children[i].children[j].value + 1
  //         }
  //       }
  //     }
      
  //   }
  // }
  // console.log(addone)
  if (!addone) {
    const product = document.createElement("div");
    const image = document.createElement("img")
    const details = document.createElement("div");
    const producticonHref = document.createElement("a");
    const producticon = document.createElement("img");
    const productname = document.createElement("p");
    const productprice = document.createElement("p");
    // const productinput = document.createElement("input");

    product.className = "product";
    product.dir = "rtl";
    image.className = "productImg";
    image.src = "picture/25cake.jpeg";
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
    } 

    // productinput.type = "number";
    // productinput.id = "quantity";
    // productinput.name = "quantity";
    // productinput.min = "1";
    // productinput.max = "5";

   
    details.appendChild(productname);
    producticonHref.appendChild(producticon) ;
    details.appendChild(producticonHref) ;
    details.appendChild(productprice);
    // details.appendChild(productinput);
    product.appendChild(image);
    product.appendChild(details);
    products.appendChild(product);

    calculateTotal()
  }
}

function closeCartFunction() {
  const x = document.getElementById("shoppingCart");
  x.style.display = "none";
  document.body.style.backgroundColor = "white"; 
}

function removeFromCartFunction(event) {
  event.target.parentElement.parentElement.parentElement.remove();
  calculateTotal()
}





