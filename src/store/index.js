import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme"
import pageToShowReducer from "./pageToShow";
import localTaskReducer from "./locatTasks"

const store = configureStore({
    reducer:{
        theme:themeReducer,
        pageToShow:pageToShowReducer,
        localTasks:localTaskReducer
    },
})

export default store