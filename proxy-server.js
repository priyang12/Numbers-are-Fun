const express = require("express");
const request = require("request");
const path = require("path");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (req, res) => {
  request(
    { url: `http://numbersapi.com/${req.query.ApiCall}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }
      res.json(body);
    }
  );
});

dotenv.config();

//static for Browser
const _dirname = path.resolve();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
