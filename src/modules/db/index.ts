import { logger } from '../shared/utils/logger';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', logger.error.bind(logger, 'MongoDB connection error:'));
db.once('open', () => {
  logger.info('Connected to MongoDB');
});
