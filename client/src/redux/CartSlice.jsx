import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                state.push({ ...product, id: nanoid() })
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
