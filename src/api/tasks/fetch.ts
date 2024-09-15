import { api } from '@/lib/axios';

export interface CreateTaskRequest {
  id: string;
  task: string;
  isCompleted: boolean;
}

export async function fetchTasks() {
  const response = await api.get<CreateTaskRequest[]>('/tasks');

  return response.data;
}
