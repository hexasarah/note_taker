const express = require('express')
const app = express()
const port = 3000

// app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// app.post('/', (req, res) => {
//   res.send('Post request success')
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});





