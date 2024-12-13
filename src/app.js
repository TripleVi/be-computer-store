import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors({
    origin: ['http://localhost:5000'],
    optionsSuccessStatus: 200,
    credentials: true,
}))

app.use(bodyParser.json())

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at port ${port}.`)
})
