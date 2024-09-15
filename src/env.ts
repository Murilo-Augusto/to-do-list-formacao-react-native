import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string(),
  EXPO_PUBLIC_API_DELAY: z.coerce.number().default(0),
});

export const env = envSchema.parse({
  EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
  EXPO_PUBLIC_API_DELAY: process.env.EXPO_PUBLIC_API_DELAY,
});
