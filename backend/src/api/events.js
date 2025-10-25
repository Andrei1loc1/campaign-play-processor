import express from 'express'
import { addCampaign } from '../core/queue.js'
import { logEvent } from '../core/eventLog.js'

const router = express.Router();

router.post('/', (req, res) => {
    const event = req.body;

    logEvent(event);
    addCampaign(event);
    
    res.status(202).json({ message: 'Event accepted' });
});

export default router;