import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        video: videoReducer,
        config: configReducer
    }
});

export default appStore;