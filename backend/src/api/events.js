import express from 'express'
import { addCampaign } from '../core/queue.js'

const router = express.Router();

router.post('/', (req, res) => {
    const event = req.body;
    addCampaign(event);

    res.status(202).json({ message: 'Event accepted' });
});