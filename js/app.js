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

    // function isActiveValue(item, container, contValue) {
    //     if (item.checked) {
    //         container.classList.add("is-active");
    //         contValue.innerHTML = item.value;
    //     } else {
    //         container.classList.remove("is-active");
    //     }
    // }

    //function isChecked() {

    //}


    document.body.addEventListener("change", function() {
        var sizeVal = size.options[size.selectedIndex].value,
            doughWrap = document.getElementById("dough-wrapper"),
            doughElem = doughWrap.getElementsByTagName("input"),
            shipWrap = document.getElementById("shipping-wrapper"),
            shipElem = shipWrap.getElementsByTagName("input");

        //size
        if (sizeVal > 0) {
            if (amount.value) {
                document.getElementById("pizzaprice").innerHTML = sizeVal * amount.value;
            } else {
                document.getElementById("pizzaprice").innerHTML = sizeVal;
            }
            document.getElementById("pizza").classList.add("is-active");
        } else {
            document.getElementById("pizza").classList.remove("is-active");
        }

        //dough
        for (var i = 0; i < doughElem.length; i++) {
            if (doughElem[i].checked) {
                document.getElementById("doughprice").innerHTML = doughElem[i].value;
                document.getElementById("dough").classList.add("is-active");
            } else {
                document.getElementById("dough").classList.remove("is-active");
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
            document.getElementById("toppingsprice").innerHTML = count;
            document.getElementById("toppings-wrapper").classList.add("is-active");
        } else {
            document.getElementById("toppings-wrapper").classList.remove("is-active");
        }

        //extra
        if (extra.value) {
            document.getElementById("extraprice").innerHTML = 5;
            document.getElementById("extra-wrapper").classList.add("is-active");

        } else {
            document.getElementById("extra-wrapper").classList.remove("is-active");
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
            //console.log(drinks[0].checked)
            document.getElementById("drinksprice").innerHTML = count2;
            document.getElementById("drinks").classList.add("is-active");
        } else {
            document.getElementById("drinks").classList.remove("is-active");
        }

        //shipping
        if (shippYes.checked) {
            //console.log(document.getElementById("shipping-wrapper"))
            document.getElementById("shippingprice").innerHTML = 1;
            document.getElementById("shipping-container").classList.add("is-active");
        } else {
            document.getElementById("shipping-container").classList.remove("is-active");
        }

        //destination
        var destVal = dest.options[dest.selectedIndex].value;

        if (destVal) {
            document.getElementById("destprice").innerHTML = destVal;
            document.getElementById("destination").classList.add("is-active");
        } else {
            document.getElementById("destination").classList.remove("is-active");
        }

        //fast shipping - hungry
        if (hungry.checked) {
            document.getElementById("expressprice").innerHTML = 5;
            document.getElementById("express").classList.add("is-active");
        } else {
            document.getElementById("express").classList.remove("is-active");
        }


        result.innerHTML = +(sizeVal * amount.value) + +count + +count2 + (extra.value ? 5 : 0) + +(shippYes.checked ? 5 : 0) + +destVal + +(hungry.checked ? 5 : 0);


        // isChecked();
    });

    //window.onload = load;

    // function load() {

    // }
}());