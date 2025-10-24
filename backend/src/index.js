import express from 'express';
import eventsRouter from './api/events.js';
import campaignsRouter from './api/campaigns.js';
import controlRouter from './api/control.js';

const app = express();

app.use(express.json());

app.use('/events', eventsRouter);
app.use('/campaigns', campaignsRouter);
app.use('/control', controlRouter);

startProcess();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});