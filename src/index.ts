import { Hono } from 'hono';
import { timing } from 'hono/timing';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { api } from './routes/api';
import { Env } from './types';
import './db';

const app = new Hono<{ Bindings: Env }>();

app.use('/api/*', cors());
app.use('/api/*', timing());
app.use('/api/*', logger());
app.route('/api', api);

app.onError((err, c) => {
  console.error(`Hono Error: ${err}`);
  return c.text('Custom Error Message', 500);
});

export default app;
