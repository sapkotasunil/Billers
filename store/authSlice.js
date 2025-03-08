import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;

export function register(data) {
  return function registerThunk(dispatch) {
    dispatch(setUser(data));

    // Get the existing users array from localStorage
    let users = JSON.parse(localStorage.getItem("register")) || [];

    // Ensure users is an array (in case of any data corruption)
    if (!Array.isArray(users)) {
      users = [];
    }

    // Add the new user object to the array
    users.push(data);

    // Store the updated array back in localStorage
    localStorage.setItem("register", JSON.stringify(users));
    dispatch(setStatus("sucess"));
  };
}

export function login(data) {
  return function loginThunk(dispatch) {
    const users = JSON.parse(localStorage.getItem("register")) || [];

    // Ensure users is an array
    if (!Array.isArray(users)) {
      alert("Error: Invalid user data in local storage.");
      return;
    }

    // Find a user with matching email and password
    const foundUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (foundUser) {
      dispatch(setUser(foundUser)); // Update Redux state
      localStorage.setItem("logged", JSON.stringify(foundUser)); // Store logged-in user
      dispatch(setStatus("sucess"));
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };
}
