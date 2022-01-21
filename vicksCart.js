function clickme(changeImg){
    let bigImage = document.getElementById("d")
    bigImage.src = changeImg.src
}

function vickscartPage(){
    console.log("fdfdf")
    window.location.href = "cart.html"
}


let arr = JSON.parse(localStorage.getItem("cartItems")) || [];
let cartPage = document.getElementById("cartPage");
cartPage.addEventListener("click",function(){
    arr.push({
        img: "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1642572656.jpg?dim=60x0&dpr=1&q=100",
        about: `Vicks Vaporub 50ml `,
        price:`₹116.00`,
        by: `By VICKS`,
        quantity:`50Ml Balm in Bottle`
    })
    // console.log("hello")
    localStorage.setItem("cartItems", JSON.stringify(arr));
     alert("Item Added Successfully")
})