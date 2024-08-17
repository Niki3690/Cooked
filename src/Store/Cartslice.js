import {createSlice} from "@reduxjs/toolkit"

let Cartslice = createSlice({

    name: "cart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            let rmv = state.filter((item) => item.id != action.payload)
            return rmv
        },
        increment(state, action) {
            let item = state.find((items) => items.id === action.payload)
            if (item) {
                item.quantity += 1;
            }
        },
        decrement(state, action) {
            let item = state.find((items) => items.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
})

export let { add, remove, increment, decrement } = Cartslice.actions
export default Cartslice.reducer