import { getFirestore } from "redux-firestore";

export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("All Users")
      .add(user)
      .then((doc) => {
        dispatch({
        })
      });
  };
  
};

export const deleteUser = (user_id) => {
  return {
    type: "DELETE_USER",
    payload: user_id
  };
};

export const editUser = (user_id, updated_info) => {
  return {
    type: "EDIT_USER",
    user_id: user_id,
    updated_info: updated_info
  };
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
    .collection('All Users')
    .onSnapshot(
      (snapshot)=>{
      let allusers = [];
      snapshot.forEach((doc) => {
         
        allusers.push({...doc.data(), id: doc.id});
      });
      console.log(allusers);
      dispatch({
        type:"SET_ALL_USERS",
        payload: allusers,
      });
    },
    (err) => {

    }
    )
  }
}
