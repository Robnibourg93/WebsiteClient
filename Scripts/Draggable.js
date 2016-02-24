var totalKc = 0,totalSugar = 0,totalFat = 0,totalProtein = 0,totalFibers = 0,totalSalt = 0;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var addedfood = document.getElementById(data);
    var kc = addedfood.getAttribute("kc");
    var sugar = addedfood.getAttribute("sugar");
    var fat = addedfood.getAttribute("fat");
    var protein = addedfood.getAttribute("protein");
    var fibers = addedfood.getAttribute("fibers");
    var salt = addedfood.getAttribute("salt");

    console.log(addedfood);
    console.log(salt);

    totalKc += parseInt(kc);
    totalSugar += parseInt(sugar);
    totalFat += parseInt(fat);
    totalProtein += parseInt(protein);
    totalFibers += parseInt(fibers);
    totalSalt += parseInt(salt);

    console.log(totalFat);


    document.getElementById("kc").innerHTML = "Calorieën:    "+totalKc.toString()+"kc";
    document.getElementById("sugar").innerHTML = "Suiker  " + totalSugar.toString() + "g   " + Math.round((totalSugar / 50) * 100 )+ "%";
    document.getElementById("fibers").innerHTML = "Vezels  " + totalFibers.toString() + "g   " + Math.round((totalFibers / 70) * 100) + "%";
    document.getElementById("fat").innerHTML = "Vet  " + totalFat.toString() + "g   " + Math.round((totalFat / 100) * 100 )+ "%";
    document.getElementById("salt").innerHTML = "Zout  " + totalSalt.toString() + "g   " + Math.round((totalSalt / 10) * 100 )+ "%";
    document.getElementById("protein").innerHTML = "Eiwit  " + totalProtein.toString() + "g   " + Math.round((totalProtein / 60) * 100 )+ "%";

    ev.target.appendChild(addedfood.cloneNode(true));
}