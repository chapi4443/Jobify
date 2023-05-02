import 'express-async-errors'
import express from 'express'

const app = express()
import dotenv from 'dotenv'
dotenv.config()
//db and authenticateUser
import connectDB from './db/connect.js'


//routers

// import cors from 'cors'

import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRouter.js'

/// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

// app.use(cors())
app.use(express.json())
console.log('hello');


app.get('/', (req,res)=>{

    res.json({msg:'welcome'})
})
app.get('/api/v1', (req,res)=>{

    res.json({msg:'API'})
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)





const port = process.env.PORT || 5000


const start = async() =>{
    try{
        await connectDB(process.env.Mongo_URL)
        app.listen(port, ()=>{
            console.log('Server is listening on port ${PORT}')
        })
    }
    catch(error){
        console.log(error)

    }
}

start()