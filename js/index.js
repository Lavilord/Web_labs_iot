import {
    getInputValues,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    clearInputs
} from "./dom-util.js"
import { deleteAnimal,getAllAnimals, postAnimal, updateAnimal } from "./api.js";

const submitButton = document.getElementById("submit_button");
const formFields = document.getElementsByClassName("form-control");
const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("clear_search_button");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");

let animals = [];

const onEditItem = async(e) => {
    if (!validateInput()) {
        return;
    };
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateAnimal(itemId, getInputValues());
    clearInputs();

    await refetchAllAnimals();
};
const onDeleteItem = async (e) => {
    const itemId = e.target.id.replace(DELETE_BUTTON_PREFIX, "");

    await deleteAnimal(itemId);

    await refetchAllAnimals();
}
const validateInput = () => {
    if (Array.from(formFields).filter(x => x.value.trim() === "").length !== 0) {
        alert("Please fill out required fields");
        return false;
    }
    return true;
}


export const refetchAllAnimals = async () => {
    const AllAnimals = await getAllAnimals();

    animals = AllAnimals.animals.sort((a,b) =>b.title.localeCompare(a.title));
    renderItemsList(animals, onEditItem, onDeleteItem);
};
submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!validateInput()) {
        return;
    }

    const { title, price, weight_in_grams } = getInputValues();

    clearInputs();

    await postAnimal({
        title,
        price,
        weight_in_grams
    });

    await refetchAllAnimals();
});

searchButton.addEventListener("click", () => {
    const foundAnimals = animals.filter(
        (animal) => animal.title.search(searchInput.value) !== -1);

    renderItemsList(foundAnimals, onEditItem, onDeleteItem);
});

clearSearchButton.addEventListener("click", () => {
    renderItemsList(animals, onEditItem, onDeleteItem);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedAnimals = animals.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price));

        renderItemsList(sortedAnimals, onEditItem, onDeleteItem);
    }
    else {
        refetchAllAnimals()
    }
});

countButton.addEventListener("click", () => {
    let sum = animals.map(o => o.weight_in_grams).reduce((a, c) => { return a + c });
    document.getElementById("total_weight").innerText = sum;
    console.log(sum);
})

// main code
refetchAllAnimals();