const express  = require('express')
const app = express()
const port = 3000
const {v4:uuidv4}=require('uuid')
const cors = require('cors')
app.use(express.json({extended:false}))
app.use(cors())
const todos=[
    {
        message:"message 1",
        id:1
    },
    {
        message:"message 2",
        id:2
    },
    {
        message:"message 3",
        id:3
    }
]

app.get('/', (req, res) => {
    res.status(200).json(todos);
})

app.post('/', (req, res) => {
    const newTodo=
        {
            message:req.body.message,
            id:uuidv4()
        };
    
    todos.push(newTodo)
    res.status(201).json(todos);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
