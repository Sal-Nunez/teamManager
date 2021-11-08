const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./server/routes/player.routes')(app)
require('./server/config/mongoose.config')
require('./server/routes/player.routes')
app.listen(8000, () => console.log('The Server is doing its thang on port 8000'))