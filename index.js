require('dotenv').config()

const express = require('express')
const app = express()
//onst port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom')
})
app.get('/login',(req, res) => {
    res.send('<h1>Please Login Into React</h1>')
})

app.get('/youtube',(req,res) => {
    res.send("Hello Billoosss")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})