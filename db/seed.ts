import { db } from '.';
import { users } from './schema';
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    id: faker.number.int({ min: 1, max: 10000 }),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    // role: 'customer',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 3,
});

await db.insert(users).values(USERS);

console.log(`Seeding complete.`);
