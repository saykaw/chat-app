import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify:false
        })
        console.log(`MongoDb has connected as ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit()  
    }
}