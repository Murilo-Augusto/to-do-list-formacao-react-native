import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  task: z.string(),
  isCompleted: z.boolean(),
});

export type Task = z.infer<typeof taskSchema>;
