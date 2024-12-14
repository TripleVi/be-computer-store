import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import initRoutes from './routes/index.js'

const app = express()

app.use(cors({
    origin: ['http://localhost:5000'],
    optionsSuccessStatus: 200,
    credentials: true,
}))

app.use(bodyParser.json())

initRoutes(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at port ${port}.`)
})
