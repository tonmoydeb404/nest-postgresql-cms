import 'dotenv/config';
import { PrismaConfig } from 'prisma';

export default {
  earlyAccess: true,
  schema: './src/prisma/schema',
} satisfies PrismaConfig;
