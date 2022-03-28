import express from 'express';
import ServerRoutes from './ServerRoutes';

const app = express();

app.use(ServerRoutes);

export default app;
