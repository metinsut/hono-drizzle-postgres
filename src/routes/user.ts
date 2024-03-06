import { Hono } from 'hono';
import { timing, startTime, endTime } from 'hono/timing';
// import { middleWare } from './middleWare';
import { db } from '../db';
import { users } from '../db/schema';

const user = new Hono();
user.use(timing());

// user.route('*', middleWare);

user.get('/', async (c) => {
  startTime(c, 'db');
  const allUsers = await db.select().from(users);
  endTime(c, 'db');
  return c.json({
    users: allUsers,
  });
});

export { user };
