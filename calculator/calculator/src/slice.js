import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rows: 0,
    cols: 0,
    sumMatrix: [],
    mulMatrix: [],
    addedMatrix: null,
};

const matrixSlice = createSlice({
    name: "matrix",
    initialState,
    reducers: {
        generateMatrix: (state, action) => {
            const { rows, cols } = action.payload;
            state.rows = rows;
            state.cols = cols;

            state.sumMatrix = Array.from({ length: rows }, (_, i) =>
                Array.from({ length: cols }, (_, j) => i + j)
            );

            state.mulMatrix = Array.from({ length: rows }, (_, i) =>
                Array.from({ length: cols }, (_, j) => i * j)
            );

            state.addedMatrix = null;
        },
        addMatrices: (state) => {
            if (state.sumMatrix.length && state.mulMatrix.length) {
                state.addedMatrix = state.sumMatrix.map((row, i) =>
                    row.map((val, j) => val + state.mulMatrix[i][j])
                );
            }
        },
    },
});

export const { generateMatrix, addMatrices } = matrixSlice.actions;
export default matrixSlice.reducer;


