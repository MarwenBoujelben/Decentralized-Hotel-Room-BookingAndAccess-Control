import contract from "../models/contract.js";

const getAllRooms=async()=>{
    const rooms = await contract.getAllRooms();
    return rooms;
}
export { getAllRooms }
