import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        productList: JSON.parse(localStorage.getItem('productList')) || [],
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload;
            localStorage.setItem('productList', JSON.stringify(state.productList.slice(0, 4)));
        },
        // addToProductList: (state, action) => {
        //     state.productList.push(action.payload);
        // },
        // initWishlist: (state) => {
        //     state.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        // },
        setWishlist: (state, action) => {
            state.wishlist = action.payload;
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
        removeFromWishlist: (state, action) => {
            const id = action.payload;
            state.wishlist = state.wishlist.filter(e => e !== id);
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        },
    },
});

export const { setProductList, setWishlist, addToWishlist, removeFromWishlist } = ProductSlice.actions;

export default ProductSlice.reducer;
