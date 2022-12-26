const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');

//middlewares
app.use(helmet())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//DB Connection
/* mongoose
    .connect(process.env.Database)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error =>", err)); */
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB connect error=>", err));

readdirSync("./routes").map(r => app.use("/api/v1/", require(`./routes/${r}`)));


//server
const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

/* const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');

//middlewares
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

//Db connected 
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log(object))
    .catch((err) => console.log("BD Connected=>>>>>>>", err));

const port = process.env.PORT || 7000;


app.listen(port, () => {
    console.log(`App is running is port${port}`)
}); */