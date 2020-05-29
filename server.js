const express = require('express');
require('dotenv').config();
const timestampRoute = require('./routes/timestamp');

const app = express();
const { PORT } = process.env;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');

// middlewares
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));

// static file
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

// route endpoints
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.use('/api', timestampRoute);

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
