import contract from "../models/contract.js";

const addRoom=async(roomId,price)=>{
    await contract.addRoom(roomId,price);
}
export { addRoom }
