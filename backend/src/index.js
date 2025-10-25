import express from 'express';
import cors from 'cors';
import eventsRouter from './api/events.js';
import campaignsRouter from './api/campaigns.js';
import controlRouter from './api/control.js';
import { initializeDB } from './core/eventLog.js';

await initializeDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/events', eventsRouter);
app.use('/campaigns', campaignsRouter);
app.use('/control', controlRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});