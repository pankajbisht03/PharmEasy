let fetchedItems = JSON.parse(localStorage.getItem("cartItems"))

    let body = document.querySelector("body");

    let main = document.getElementById("main");

    let cartBox = document.getElementById("cartBox");

    let rightBox = document.getElementById("rightBox")
    main.append(cartBox,rightBox)

    body.append(main)
    displayCartItems(fetchedItems)
    // console.log(fetchedItems)

    function displayCartItems(fetchedItems) {

        cartBox.innerHTML = ""
        fetchedItems.map(function (item) {
            let container = document.createElement('div');
            container.setAttribute("class","container")
            let imgDiv = document.createElement('div');
            imgDiv.setAttribute("class","mainImg")
            let imgVicks = document.createElement("img");
            imgVicks.setAttribute("class","imgVicks")

            

            imgVicks.src = item.img
            let rmvBtn = document.createElement("button");
            rmvBtn.setAttribute("class","removeBtn")
            rmvBtn.textContent = "Remove"

            let textNicon = document.createElement("div");
            // let flex = document.createElement("div")
            textNicon.setAttribute('class',"flex")
            let text = document.createElement("p");
            text.setAttribute("id","textHead")
            text.setAttribute("class","headingTxt");
            text.textContent = item.about

            // let icon = document.createElement("icon");
            // icon.innerHTML = <i class="fas fa-trash-alt"></i>

            // let byVicks = document.createElement("div");
            
            // byVicks.setAttribute('class',"byVicks");
            // let byVicksTxt = document.createElement("p")
            // byVicksTxt.textContent = item.by;

            let price = document.createElement("p");
            price.setAttribute("class","amount")
            price.textContent = item.price

            let about = document.createElement("p");
            about.setAttribute("class","amount")
            about.textContent = item.quantity


            let delivery = document.createElement("p");
            delivery.setAttribute("class","amount, deliveryTime")
            delivery.textContent = `Delivery Today, before 10 pm`

            

            imgDiv.append(imgVicks,rmvBtn)
            textNicon.append(text,price,about,delivery);
            // byVicks.append()

            container.append(imgDiv,textNicon)
            cartBox.append(container)

            // Right div

            let rightDiv = document.createElement("div");
            let deliveryDiv = document.createElement("div")


            let addressBtn = document.createElement("button");
            addressBtn.setAttribute('class',"addressBtn");
            addressBtn.textContent = `Add Card Details`
            addressBtn.addEventListener("click",function(){
                window.location.href = "payment.html"
            })

            let span  = document.createElement("span");
            span.setAttribute("class","safeUpto")

            let truckImg = document.createElement("img");
            
            truckImg.src = ("https://cdn.pharmeasy.in/cms/delivery_image.png")
            truckImg.setAttribute("class","truckImge")

            let truckTxt = document.createElement("p");
            truckTxt.setAttribute("class","truckTxt")
            truckTxt.textContent = `Free delivery with cart value above ₹500`

            // let orderSummary = document.createElement("div");
             let headingOrderSummary = document.createElement("p")
             headingOrderSummary.setAttribute("class","ordersummaryHead")
             headingOrderSummary.textContent  = `Order Summary`

            //  let cartValue = document.createElement("p")

            let pricing = document.createElement("div");
            pricing.setAttribute("class","pricingBox")


            let cart = document.createElement("div")
            cart.setAttribute("class","cartBox")
            let cartValue = document.createElement("span");
            cartValue.textContent = `Cart Value`
            let cartPrice  = document.createElement("span");
            cartPrice.textContent = `₹116.00`

            let finalAmount = document.createElement("div");
            finalAmount.setAttribute("class","finalBox")
            let finalCharge = document.createElement("span");
            finalCharge.textContent = `Amount To be Paid`
            let finalPrice = document.createElement("span");
            finalPrice.textContent = `₹116.00`
            


            span.append(truckImg,truckTxt);
            
         

            cart.append(cartValue,cartPrice);
            finalAmount.append(finalCharge,finalPrice)
            pricing.append(cart,finalAmount)
            // delivery.append(deliveryCharge,deliveryPrice)
            // pricing.append(cart,delivery)

            deliveryDiv.append(addressBtn,span,headingOrderSummary,pricing)

            rightDiv.append(deliveryDiv)
            rightBox.append(rightDiv)







        })

    }