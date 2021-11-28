import { renderItemsList } from "./dom-util.js"
import { getAllAnimals } from "./api.js";

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("clear_search_button");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");

let animals = [];

export const refetchAllAnimals = () => {
    const AllAnimals = getAllAnimals();

    animals = AllAnimals.sort((a,b) =>b.title.localeCompare(a.title));

    renderItemsList(animals);
};

searchButton.addEventListener("click", () => {
    const foundAnimals = animals.filter(
        (animal) => animal.title.search(searchInput.value) !== -1);

    renderItemsList(foundAnimals);
});

clearSearchButton.addEventListener("click", () => {
    renderItemsList(animals);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedAnimals = animals.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price));

        renderItemsList(sortedAnimals);
    }
    else {
        refetchAllAnimals();
    }
});

countButton.addEventListener("click", () => {
    let sum = animals.map(o => o.weight_in_grams).reduce((a, c) => { return a + c });
    document.getElementById("total_weight").innerText = sum;
    console.log(sum);
})

// main code
refetchAllAnimals();