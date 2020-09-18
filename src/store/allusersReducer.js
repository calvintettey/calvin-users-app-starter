import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { id:"1", name: "Senyo Torglo", email: "senyo@email.com" },
    { id:"2", name: "Eyram Frimpong", email: "frims@email.com" },
    { id:"3", name: "Mansa Selasi", email: "mansi@email.com" },
  ],
};

const allusersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("reducer", action.payload);
      const newUser = {
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
      };
      return { ...state, users: [...state.users, newUser] };

      case "DELETE_USER":
        const filteredUsers = state.users.filter(user => user.id !== action.payload);
        return {...state, users: filteredUsers}
      
      case "EDIT_USER":
        const updatedUsers = state.users.map(user => {
          if (user.id === action.user_id) {
            return{...user, ...action.updated_info}
          } else {
            return user;
          }
        });
        return{...state, users: updatedUsers}

    default:
      return state;
  }
};

export default allusersReducer;
