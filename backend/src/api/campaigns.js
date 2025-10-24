import express from 'express';
import { getAllCampaigns } from '../core/stats.js';

const router = express.Router();

router.get('/', (req, res) => {
    const campaigns = getAllCampaigns();
    res.status(200).json(campaigns);
})

export default router;