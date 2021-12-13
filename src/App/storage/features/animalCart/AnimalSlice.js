import {createSlice} from "@reduxjs/toolkit";

export const animalSlice = createSlice({
    name: "animal",
    initialState: {
        value: []
    },
    reducers: {
        addAnimal: (state, animal) => {
            state.value.push(animal.payload)
        },
        removeAnimal: (state, id) => {
            state.value = state.value.filter((animal) => animal.id !== id.payload)
        },
        clearCart: state => {
            state.value = []
        }
    }
})

export const {addAnimal, removeAnimal, clearCart} = animalSlice.actions;

export default animalSlice.reducer;