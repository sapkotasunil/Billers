import { createSlice } from "@reduxjs/toolkit";
import username from "../global/logedUser";

const storesSlice = createSlice({
  name: "stores",
  initialState: {
    storeInformation: null,
    status: null,
    informationFetch: null,
  },
  reducers: {
    setStoreInformation(state, action) {
      state.storeInformation = action.payload;
    },
    setInformationFetch(state, action) {
      state.informationFetch = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setInformationFetch, setStoreInformation, setStatus } =
  storesSlice.actions;
export default storesSlice.reducer;

export function information(data) {
  return function informationThunk(dispatch) {
    dispatch(setStoreInformation(data));
    localStorage.setItem(`${username}storeInformation`, JSON.stringify(data));
    dispatch(setStatus("success"));
  };
}
export function informationf() {
  return function informationfThunk(dispatch) {
    dispatch(
      setInformationFetch(
        JSON.parse(localStorage.getItem(`${username}storeInformation`))
      )
    );
  };
}
