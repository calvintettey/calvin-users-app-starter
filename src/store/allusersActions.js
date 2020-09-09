export let addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}
