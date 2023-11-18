//leave the user which is logged in , return the user which is not logged in
export const getSender = (loggedUser,users)=>{
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
}