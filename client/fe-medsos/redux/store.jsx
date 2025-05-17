import { configureStore } from "@reduxjs/toolkit"
import persistedReducer from "./rootReducer"

export const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.MODE === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})