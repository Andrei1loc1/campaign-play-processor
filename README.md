# 💻 Campaign Play Processor

Small full-stack project that simulates and processes asynchronous campaign play events, inspired by BlindSpot’s real-world workflow.

## About the project

---

This app simulates how campaign play events are processed and displayed on a dashboard in real time.

You can start or stop the processing system, simulate events manually, and refresh the data to see how campaigns update dynamically.

I focused on making the UI feel like a real internal dashboard to match the concept of digital screen monitoring.

---

## Live Deploy On Render

FRONTEND DASHBOARD:  
👉 [https://campaign-play-processor-site.onrender.com/](https://campaign-play-processor-site.onrender.com/)

BACKEND SERVER API:  
👉 [https://campaign-play-processor-2.onrender.com/](https://campaign-play-processor-2.onrender.com/)

---

## Project structure ideea

```
.
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── config/
│   │   ├── core/
│   │   ├── utils/
│   │   └── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   └── App.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## How to run locally

### 1. Clone the repository
```bash
git clone https://github.com/Andrei1loc1/campaign-play-processor
cd CampaignPlayProcessor
```

### 2. Install dependencies
Backend:
```bash
cd backend
npm install
npm start
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```


## Tech Stack

**Frontend**
- React + Vite  
- Tailwind CSS  
- Lucide Icons  
- Custom glassmorphism design 
- LetterGlitch Background from React Bits

**Backend**
- Node.js + Express  
- CORS + body-parser  
- Simple in-memory event processing system  
- SQlite database, just to sotck the events, not to show and process

---

## Features

✅ Start/Stop async event processor  
✅ Simulate random campaign play events  
✅ Auto-refresh and manual refresh  
✅ Glass dashboard UI  
✅ Real-time counters per campaign and per screen  

---


## Time Spent

I spent about 5-6 hours total on this project — it was a quick build, focusing on getting the core functionality working smoothly.

---

## Potential Improvements

- Implement the database bonus for persistent storage and querying.
- Add better error handling and user-friendly messages.
- Optimize for performance for real-time updates and pagination for large event lists.
- Improve mobile responsiveness and add unit tests.

---

## Personal notes

This was a fun challenge — I wanted to keep the logic simple, but structured like a real system.
The UI was inspired by a “digital screen control room” concept, with green highlights to suggest live system status.

---