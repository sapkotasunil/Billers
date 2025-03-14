import { createSlice } from "@reduxjs/toolkit";
import username from "../global/logedUser";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    historyDatas: [],
  },
  reducers: {
    setHistoryDatas(state, action) {
      state.historyDatas = action.payload;
    },
  },
});
export const { setHistoryDatas, setAllHistoryDatas } = historySlice.actions;
export default historySlice.reducer;

export function allBillData(billData) {
  return function allBillDataThunk(dispatch) {
    let detas =
      JSON.parse(localStorage.getItem(`${username}historyBillDatas`)) || [];
    if (!Array.isArray(detas)) {
      detas = [];
    }
    detas.unshift(billData);
    localStorage.setItem(`${username}historyBillDatas`, JSON.stringify(detas));
    dispatch(setHistoryDatas(detas));
  };
}
