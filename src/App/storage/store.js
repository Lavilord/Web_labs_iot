import {configureStore} from "@reduxjs/toolkit";
import animalReducer from "./features/animalCart/AnimalSlice";

export default configureStore({
    reducer: {
        animalInCart: animalReducer
    },
})