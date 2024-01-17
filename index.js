const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, './routes/blog')))

app.listen(port, () => {
  console.log(`Blog is running at http://localhost:${port}`)
})