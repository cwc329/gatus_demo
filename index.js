import express from 'express';

const app = express();

const sleep = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

app.get('/', async (req, res) => {
    res.sendStatus(200);
});

app.get('/mayBreak', async (req, res) => {
    const random = Math.random() * 5;
    const status = Math.ceil(random) * 100;
    res.sendStatus(status);
});

app.get('/slow', async (req, res) => {
    const sleepTime = Math.random() * 4;
    await sleep(sleepTime);
    res.sendStatus(200);
});

app.get('/good', async (req, res) => {
    const response = {status: 'UP'};
    await res.json(response);
});

app.listen(5566, () => {
   console.log('listening on port 5566');
});
