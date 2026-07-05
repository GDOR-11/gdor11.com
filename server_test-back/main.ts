import express from "express";
const app = express();

const state = {
    counter: 0
};

app.get("/server_test/api", (_req, res) => {
    res.send(JSON.stringify(state));
});
app.post("/server_test/api", (_req, res) => {
    state.counter++;
    res.send(JSON.stringify(state));
});

app.listen(8080);
