import express from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'express';
import { errorHandler } from './app/middlewares/errorHandler';
import userRoutes from './app/modules/user/user.routes';
import eventRoutes from './app/modules/event/event.routes';

// Import routes from modules (add more as you create modules)
// import userRoutes from './modules/user/user.routes';
// import eventRoutes from './modules/event/event.routes';

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

// Mount module routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Global error handler
app.use(errorHandler);

export default app; 