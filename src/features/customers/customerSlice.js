import { createSlice } from "@reduxjs/toolkit";
import accountSlice from "../account/accountSlice";
import { payLoan } from "../account/accountSlice-v1";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
