(function() {
    "use strict";
    var size = document.getElementById("size");
    var thick = document.getElementById("thick");
    var amount = document.getElementById("amount");
    var toppings = document.getElementById("toppings");
    var extra = document.getElementById("extra");
    var drink = document.getElementsByClassName("drink");
    var shippYes = document.getElementById("yes");
    var dest = document.getElementById("dest");
    var hungry = document.getElementById("hungry");
    var result = document.getElementById("result");

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
        var sizeVal = size.options[size.selectedIndex].value;
        var doughWrap = document.getElementById("dough-wrapper");
        var doughElem = doughWrap.getElementsByTagName("input");
        var shipWrap = document.getElementById("shipping-wrapper");
        var shipElem = shipWrap.getElementsByTagName("input");
        var pizzaprice = document.getElementById("pizzaprice");
        var pizza = document.getElementById("pizza");
        var doughprice = document.getElementById("doughprice");
        var dough = document.getElementById("dough");
        var toppingsprice = document.getElementById("toppingsprice");
        var toppingsWrapper = document.getElementById("toppings-wrapper");
        var extraprice = document.getElementById("extraprice");
        var extraWrapper = document.getElementById("extra-wrapper");
        var drinksprice = document.getElementById("drinksprice");
        var drinks2 = document.getElementById("drinks");
        var shippingprice = document.getElementById("shippingprice");
        var shippingCont = document.getElementById("shipping-container");
        var destprice = document.getElementById("destprice");
        var destination = document.getElementById("destination");
        var expressprice = document.getElementById("expressprice");
        var express = document.getElementById("express");

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