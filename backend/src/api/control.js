import express from 'express';
import { startProcess, stopProcess, processStatus } from '../core/campaignPlays';

const router = express.Router();

router.post('/start', (req, res) => {
    startProcess();
    res.status(200).json({ message: 'Process is running' });
});

router.post('/stop', (req, res) => {
    stopProcess();
    res.status(200).json({ message: 'Process stopped' });
})

router.get('/status', (req, res) => {
    const status = processStatus();
    res.status(200).json(status);
})