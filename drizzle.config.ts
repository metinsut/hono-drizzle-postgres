import type { Config } from 'drizzle-kit';
export default {
  schema: './src/schemas/index.ts',
  out: './src/db',
} satisfies Config;
