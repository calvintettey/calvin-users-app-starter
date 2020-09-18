export let addUser = (user) => {
    console.log("action", user);
    return {
        type: "ADD_USER",
        payload: user
    }
}


export let deleteUser = (user_id) => {
    return {
        type: "DELETE_USER",
        payload: user_id
    }
}

export let editUser = (user_id, updated_info) => {
    return {
        type: "EDIT_USER",
        user_id, 
        updated_info
    }
}