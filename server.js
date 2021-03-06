const express = require(`express`);
const bodyParser = require(`body-parser`);
const path = require(`path`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// data

let reservations_data = [{thing: `blank`}];

// routing

app.use(express.static(`public`));

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `public/home.html`));
});

app.get(`/api/reservations`, (req, res) => {
    return res.json(reservations_data);
});

app.post(`/api/reservations`, (req, res) => {
    let newReservation = req.body;
    reservations_data.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});