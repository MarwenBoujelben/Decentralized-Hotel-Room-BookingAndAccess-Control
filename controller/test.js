import express from 'express'

import { addRoom} from '../services/addRoom.js'
import { rentRoom} from '../services/rentRoom.js'
import { getAllRooms} from '../services/allRooms.js'
import { getClientRooms } from '../services/getClientRooms.js'

const router=express.Router()

router.post('/addRoom',(req,res)=>{
    addRoom(req.body.roomId,req.body.price).then(()=>res.send(true))
})
router.post('/rentRoom', async (req, res) => {
    const { roomId, duration, amount } = req.body; // Correct typo in variable name
      await rentRoom(roomId, duration, amount);
  
      // Send a success response
      res.send(true);
    
  });
  router.get('/getRooms',async (req,res)=>{
    const rooms=await getAllRooms()
    const keys=Object.keys(rooms['0'])  
    console.log(rooms['0']['0'])
    res.send(true)
  }
)
router.get('/getClientRooms',async (req,res)=>{
  const rooms=await getClientRooms(req.body.clientAdr)
  //const keys=Object.keys(rooms['0'])  
  console.log("room id:",rooms['0']['0'])
  console.log("Time Left:",rooms['0']['1'])
  console.log("Room Price:",rooms['0']['2'])


  res.send(true)
}
)


export default router