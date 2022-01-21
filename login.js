let sliderArray = ["https://cms-contents.pharmeasy.in/banner/ff62f53c2ba-GRAND25DWEB.jpg?dim=1440x0&dpr=1&q=100", "https://cms-contents.pharmeasy.in/banner/dc96747a149-dwb_covid_a.jpg?dim=1440x0&dpr=1&q=100", "https://cms-contents.pharmeasy.in/banner/05854d6fa0d-Surgicare_Dweb.jpg?dim=1440x0&dpr=1&q=100", "https://cms-contents.pharmeasy.in/banner/21b9b14da8f-Dweb.jpg?dim=1440x0&dpr=1&q=100", "https://cms-contents.pharmeasy.in/banner/513bf041143-Dweb_covid_1.jpg?dim=1440x0&dpr=1&q=100", "https://cms-contents.pharmeasy.in/banner/618eab50fe7-dweb_hybrid_jan.jpg?dim=1440x0&dpr=1&q=100", "https://cms-contents.pharmeasy.in/banner/80bea445ee2-Ease_Dweb.jpg?dim=1440x0&dpr=1&q=100"]

let slider = document.getElementById("caraousal")


let img = document.createElement("img");
img.setAttribute("class", "banner")
// img.setAttribute("src", sliderArray[0]);
// slider.append(img);

let i = 1
setInterval(function () {
    // let i = 0
    if( i === sliderArray.length ){
        i = 0
    }
    
    img.src = sliderArray[i]
    slider.append(img);
    i++

}, 3000)

var seacrhResult = document.getElementById("seacrh-input")

function product(){
console.log(seacrhResult.value)
    // console.log(`df`)
}

// VicksPage
function vicksPage(){
    window.location.href = "vicks.html"
}


var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalCl = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
});

modalCl.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
});

// OTP part
var modalBtn1 = document.querySelector(".modal-btn1");
var modalBg1 = document.querySelector(".modal-bg1");
var modalCl1 = document.querySelector(".modal-close1");

modalBtn1.addEventListener("click", function () {
    modalBg1.classList.add("bg-active1");
});

modalCl1.addEventListener("click", function () {
    modalBg1.classList.remove("bg-active1");
});

// login 

function Login() {
    var otpMob = document.getElementById("mob-otp").value;
    console.log(otpMob)
    if (otpMob == document.getElementById("mob-otp").value) {
        alert("Login Successfully!");
        let toggle = document.getElementById("toggle");
        toggle.textContent = `User`
        
        window.location.href = "login.html";
    }else{
        alert("Please check your otp")
    }
    // document.getElementById('toggle').style.visibility = 'hidden';
}