let initialState = {
  users: [
    { name: "Senyo Torglo", email: "senyo@email.com" },
    { name: "Eyram Frimpong", email: "frims@email.com" },
    { name: "Mansa Selasi", email: "mansi@email.com" },
  ],
};

let allusersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("reducer", action.payload);
      let newUser = {
        id: "jihfdskjh8327832",
        name: action.payload.name,
        email: action.payload.email,
      };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
};

export default allusersReducer;
