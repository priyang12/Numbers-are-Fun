const express = require('express');
const request = require('request');
const path = require('path');
const app = express();
var cors = require('cors');

app.use(cors({ origin: 'https://numbers-priyang.herokuapp.com/' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  next();
});

app.get('/api', (req, res) => {
  console.log(req.query.ApiCall);
  request(
    { url: `http://numbersapi.com/${req.query.ApiCall}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      res.json(body);
    }
  );
});

//static for Browser
const _dirname = path.resolve();

app.use('/Photos', express.static(path.join(__dirname, '/Photos')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
