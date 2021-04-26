const express = require('express');
const uploadRoutes = require('./api/routes/uploadRoutes');
const app = express()

// ROUTES
app.use('/api/upload', uploadRoutes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/files/index.html')
})

app.listen(3000, () => {
    console.log("server is running at port 3000")
})