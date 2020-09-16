export let addUser = (user) => {
    console.log("action", user);
    return {
        type: "ADD_USER",
        payload: user
    }
}
