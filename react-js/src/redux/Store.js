import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import ProductReducer from './ProductSlice'


export default configureStore({
    reducer: {
        "authentication": AuthReducer,
        "product": ProductReducer,
    },
})