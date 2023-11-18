import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/Db.js'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'


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

app.use(notFound)
app.use(errorHandler)


app.get('/')

app.listen(PORT,console.log(`Server has started at PORT ${PORT}`))