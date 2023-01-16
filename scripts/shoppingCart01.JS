function openCartFunction(){
    document.getElementById("shoppingCart").style.display = "block";
    // document.body.style.backgroundColor = "#e7e7e7"; 
  }
  
  function creatProduct(x){
    const products = document.getElementById("products");
    addone = false;
  
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
  }
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
    const allPrices = document.querySelectorAll(".productNamePrice"); 
    const allNames = document.querySelectorAll(".productName");
    const allImg = document.querySelectorAll(".productImg");
  
    for (let i=0 ; i < allPrices.length; i++){
      let current = Number(localStorage.getItem('price'));
      current = allPrices[i].innerHTML.split(" ")[3];
      // console.log(current);
      // let array = [];
      // array.push(allPrices[i].innerHTML.split(" ")[3]);
      // console.log(allPrices);
      // // localStorage.setItem('price', current); 
      allPrices[i]= current.innerHTML.split(" ")[3];
      // console.log(allPrices);
      console.log(allPrices);
      // // localStorage.setItem('price', allPrices[i].innerHTML.split(" ")[3]); 
  
      let currentName = (localStorage.getItem('name'));
      currentName = allNames[i].innerHTML;
      // localStorage.setItem('name', currentName);
      // console.log(allNames[i].innerHTML);
      // localStorage.setItem('name', allNames[i].innerHTML);
  
  
      let currentImg = (localStorage.getItem('img'));
      currentImg = allImg[i].src;
      // localStorage.setItem('img', currentImg); 
      // console.log(allImg[i].src);
      // localStorage.setItem('img', allImg[i].src); 
  
    }
    // localStorage.setItem('price', JSON.stringify(allPrices.innerHTML.split(" ")[3]));
  
  
    let cartcount = Number(localStorage.getItem('counter'));
  
    cartcount = document.querySelectorAll(".Cartcounter")
    for (let j=0 ; j< cartcount.length; j++){
        let counter = document.querySelectorAll(".Cartcounter")[j].innerHTML = allPrices.length;
        localStorage.setItem('cartcount', counter); 
    }
  
  }
  
  function addToCartFunction(x){
    document.getElementById("shoppingCart").style.display = "block";
    
    creatProduct(x)
    calculateTotal()
    saveToLocalStorage()
  
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
  
  
  
  
  
  