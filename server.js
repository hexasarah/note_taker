const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const logger = require('./middleware/logger');

app.use(logger);
app.use(express.json());
app.use(express.static('public'));

const mainRouter = require('./routes');
app.use('/', mainRouter);

// app.post('/', (req, res) => {
//   res.send('Post request success')
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});





