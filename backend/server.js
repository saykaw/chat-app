import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello Express')
})

app.get('/')

app.listen(PORT,console.log(`Server has started at PORT ${PORT}`))