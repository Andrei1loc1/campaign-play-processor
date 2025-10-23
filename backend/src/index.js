import express from 'express';
import eventsRouter from './api/events.js';
import campaignsRouter from './api/campaigns.js';

const app = express();

app.use(express.json());

app.use('/events', eventsRouter);
app.use('/campaigns', campaignsRouter);