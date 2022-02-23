// import 
import express from 'express'
import mongoose from 'mongoose'
import Messages from './db_messages.js'
import Pusher from 'pusher'
import cors from "cors"

// password for admin : QIQmMxuVNnBbTt18

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1214982",
    key: "b3401703ef6714b80f8a",
    secret: "56767703fb6f1550d12b",
    cluster: "ap1",
    useTLS: true
});

// middleware
app.use(express.json())
app.use(cors())

// Database config
const connection_url = 'mongodb+srv://admin:QIQmMxuVNnBbTt18@cluster0.hcjwi.mongodb.net/whatsupdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//?
const db = mongoose.connection

db.once('open', () => {
    console.log('DB is connected!')

    const msgCollection = db.collection('messagecontents')
    // watch for database changes
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change) => {
        console.log(change)

        //trigger pusher
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', 
                {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timestamp: messageDetails.timestamp,
                    received: messageDetails.received,
                }
            );
        } else {
            console.log('Error triggering Pusher')
        }
    })


})

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(`new message created: \n ${data}`)
        }
    })
})

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))
