let initialState = {
    users : [
        {name: "Senyo Torglo", emal: "senyo@email.com"},
        {name: "Eyram Frimpong", emal: "frims@email.com"},
        {name: "Mansa Selasi", emal: "mansi@email.com"},
    ]
}

let allusersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            let newUser = {
                name: action.payload.name,
                email: action.payload.email,
            };
            return{...state, users:[...state.users, newUser]};
            
            
            break;
    
        default:
            return state;
    }
};


export default allusersReducer;