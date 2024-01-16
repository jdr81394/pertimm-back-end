const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const apiReportRoutes = require("./api/report.js");


app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiReportRoutes);

app.get("/", function (req, res) {
    res.send('health check');
});

app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
