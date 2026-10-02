import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'VozConta Backend',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/onboarding', (_req, res) => {
  res.json({
    steps: [
      'Splash',
      'Welcome',
      'Business Profile',
      'Permissions',
      'Dashboard Preview',
    ],
    status: 'ready',
  });
});

app.listen(port, () => {
  console.log(`VozConta backend running on http://localhost:${port}`);
});
