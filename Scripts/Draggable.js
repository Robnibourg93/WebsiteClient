var totalKc = 0, totalSugar = 0, totalFat = 0, totalProtein = 0, totalFibers = 0, totalSalt = 0;
var firstItemAdded = false;
StorageArray = [];
window.onload = loadFromLocalStorage();


function addToLocalStorage(Item) {


    StorageArray.push(Item.id);

    localStorage.setItem("foods",JSON.stringify(StorageArray))
}

function loadFromLocalStorage() {
    //parse json data in localstorage
    var storedFoods = JSON.parse(localStorage.getItem("foods"));
    //only excuted code if there are storedFoods else do null.
    if (storedFoods) {
        var arrayLength = Object.keys(storedFoods).length;


        var plate = document.getElementById("plate");

        //for each item in the array get element by id and copy them to plate div and calculate Nutrition.
        for (var i = 0; i < arrayLength; i++) {
            var fooditem = document.getElementById(storedFoods[i]);
            StorageArray.push(storedFoods[i]);
            calcNutrition(fooditem);
            plate.appendChild(fooditem.cloneNode(true));
        }
    }
}
function reset() {

    //emtpy array and clear local storage.
    StorageArray.length = 0;
    localStorage.clear();


    //reset values
    document.getElementById("plate").innerHTML = "";
    document.getElementById("kc").innerHTML = "Calorieën:    ****kc";
    document.getElementById("sugar").innerHTML = "Suiker  **g   *%";
    document.getElementById("fibers").innerHTML = "Vezels  **g   *%";
    document.getElementById("fat").innerHTML = "Vet  **g   *%";
    document.getElementById("salt").innerHTML = "Zout  **g   *%";
    document.getElementById("protein").innerHTML = "Eiwit  **g   *%";

    totalKc = 0;
    totalSugar = 0;
    totalFat = 0;
    totalProtein = 0;
    totalFibers = 0;
    totalSalt = 0;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id",ev.target.id);
}

function calcNutrition(addedfood) {
    console.log(addedfood);
    var kc = addedfood.getAttribute("kc");
    var sugar = addedfood.getAttribute("sugar");
    var fat = addedfood.getAttribute("fat");
    var protein = addedfood.getAttribute("protein");
    var fibers = addedfood.getAttribute("fibers");
    var salt = addedfood.getAttribute("salt");

    totalKc += parseInt(kc);
    totalSugar += parseInt(sugar);
    totalFat += parseInt(fat);
    totalProtein += parseInt(protein);
    totalFibers += parseInt(fibers);
    totalSalt += parseInt(salt);

    document.getElementById("kc").innerHTML = "Calorieën:    " + totalKc.toString() + "kc";
    document.getElementById("sugar").innerHTML = "Suiker  " + totalSugar.toString() + "g   " + Math.round((totalSugar / 50) * 100) + "%";
    document.getElementById("fibers").innerHTML = "Vezels  " + totalFibers.toString() + "g   " + Math.round((totalFibers / 70) * 100) + "%";
    document.getElementById("fat").innerHTML = "Vet  " + totalFat.toString() + "g   " + Math.round((totalFat / 100) * 100) + "%";
    document.getElementById("salt").innerHTML = "Zout  " + totalSalt.toString() + "g   " + Math.round((totalSalt / 10) * 100) + "%";
    document.getElementById("protein").innerHTML = "Eiwit  " + totalProtein.toString() + "g   " + Math.round((totalProtein / 60) * 100) + "%";

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    var addedfood = document.getElementById(data);


    addToLocalStorage(addedfood);
    calcNutrition(addedfood);

    ev.target.appendChild(addedfood.cloneNode(true));
}