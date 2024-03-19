import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/Db.js'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import messageRoutes from './routes/messageRoutes.js'


dotenv.config()
connectDb()
const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello Express')
})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
app.use('/api/message',messageRoutes)

app.use(notFound)
app.use(errorHandler)


app.get('/')

const server = app.listen(PORT,console.log(`Server has started at PORT ${PORT}`))

import { Server } from "socket.io";

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
})

io.on("connection",(socket)=>{
    console.log("connected to socket.io")

    socket.on("setup",(userData)=>{
        socket.join(userData._id)
        console.log(userData._id)
        socket.emit("connected")
    })

    socket.on("join chat", (room) => {
        socket.join(room)
        console.log("User Joined Room: " + room)
    });
      
    socket.on("typing", (room) => socket.in(room).emit("typing"))
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"))
    
    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat
        if (!chat.users) return console.log("chat.users not defined")
        chat.users.forEach((user) => {
          if (user._id == newMessageRecieved.sender._id) return
          socket.in(user._id).emit("message recieved", newMessageRecieved)
        })
    })

    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
      })
})
