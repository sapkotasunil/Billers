import { createSlice } from "@reduxjs/toolkit";

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
    let detas = JSON.parse(localStorage.getItem("historyBillDatas")) || [];
    if (!Array.isArray(detas)) {
      detas = [];
    }
    detas.unshift(billData);
    localStorage.setItem("historyBillDatas", JSON.stringify(detas));
    dispatch(setHistoryDatas(detas));
  };
}
