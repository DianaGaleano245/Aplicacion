const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.render('index')
    })

app.set('views','./views')
app.set('view engine','ejs')
app.use('/public', express.static('public'))

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })
