(function() {
    "use strict";
    var size = document.getElementById("size"),
        thick = document.getElementById("thick"),
        amount = document.getElementById("amount"),
        toppings = document.getElementById("toppings"),
        extra = document.getElementById("extra"),
        drink = document.getElementsByClassName("drink"),
        shippYes = document.getElementById("yes"),
        dest = document.getElementById("dest"),
        hungry = document.getElementById("hungry"),
        result = document.getElementById("result");

    // function isNumeric(n) {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
    // }

    function isActiveChecked(item, val, container, contValue) {
        if (document.getElementById(item).checked) {
            document.getElementById(contValue).classList.add("is-active");
            document.getElementById(container).innerHTML = val;
        } else {
            document.getElementById(contValue).classList.remove("is-active");
        }
    }

    function calculateResult() {
        var sizeVal = size.options[size.selectedIndex].value,
            doughWrap = document.getElementById("dough-wrapper"),
            doughElem = doughWrap.getElementsByTagName("input"),
            shipWrap = document.getElementById("shipping-wrapper"),
            shipElem = shipWrap.getElementsByTagName("input"),
            pizzaprice = document.getElementById("pizzaprice"),
            pizza = document.getElementById("pizza"),
            doughprice = document.getElementById("doughprice"),
            dough = document.getElementById("dough"),
            toppingsprice = document.getElementById("toppingsprice"),
            toppingsWrapper = document.getElementById("toppings-wrapper"),
            extraprice = document.getElementById("extraprice"),
            extraWrapper = document.getElementById("extra-wrapper"),
            drinksprice = document.getElementById("drinksprice"),
            drinks2 = document.getElementById("drinks"),
            shippingprice = document.getElementById("shippingprice"),
            shippingCont = document.getElementById("shipping-container"),
            destprice = document.getElementById("destprice"),
            destination = document.getElementById("destination"),
            expressprice = document.getElementById("expressprice"),
            express = document.getElementById("express");

        //size
        if (sizeVal > 0) {
            if (amount.value) {
                pizzaprice.innerHTML = sizeVal * amount.value;
            } else {
                pizzaprice.innerHTML = sizeVal;
            }
            pizza.classList.add("is-active");
        } else {
            pizza.classList.remove("is-active");
        }

        //dough
        for (var i = 0; i < doughElem.length; i++) {
            if (doughElem[i].checked) {
                doughprice.innerHTML = doughElem[i].value;
                dough.classList.add("is-active");
            } else {
                dough.classList.remove("is-active");
            }
        }

        //toppings
        var options = toppings.options,
            count = 0;
        for (var i = 0; i < options.length; i++) {
            if (options[i].selected) {
                count += parseInt(options[i].value);
            }
        }
        if (options[0].selected || options[1].selected || options[2].selected || options[3].selected || options[4].selected) {
            toppingsprice.innerHTML = count;
            toppingsWrapper.classList.add("is-active");
        } else {
            toppingsWrapper.classList.remove("is-active");
        }

        //extra
        if (extra.value) {
            extraprice.innerHTML = 5;
            extraWrapper.classList.add("is-active");

        } else {
            extraWrapper.classList.remove("is-active");
        }

        //drinks does not work
        var count2 = 0;
        var drinks = document.getElementsByClassName("drink");

        for (var i = 0; i < drinks.length; i++) {
            if (drinks[i].checked) {
                count2 += parseInt(drinks[i].value);
            }
        }
        if (drinks[0].checked || drinks[1].checked || drinks[2].checked || drinks[3].checked || drinks[4].checked) {
            drinksprice.innerHTML = count2;
            drinks2.classList.add("is-active");
        } else {
            drinks2.classList.remove("is-active");
        }

        //shipping
        isActiveChecked('yes', 1, "shippingprice", "shipping-container");

        //destination
        var destVal = dest.options[dest.selectedIndex].value;

        if (destVal) {
            destprice.innerHTML = destVal;
            destination.classList.add("is-active");
        } else {
            destination.classList.remove("is-active");
        }

        //fast shipping - hungry
        isActiveChecked('hungry', 5, "expressprice", "express");

        result.innerHTML = +(sizeVal * amount.value) + +count + +count2 + (extra.value ? 5 : 0) + +(shippYes.checked ? 5 : 0) + +destVal + +(hungry.checked ? 5 : 0);
    }

    document.body.addEventListener("change", function() {
        calculateResult();
    });

    //window.onload = calculateResult;

}());