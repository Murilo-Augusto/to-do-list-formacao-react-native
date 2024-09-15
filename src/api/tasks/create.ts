import { api } from '@/lib/axios';

export interface CreateTaskRequest {
  task: string;
  isCompleted: boolean;
}

export interface CreateTaskResponse {
  id: string;
  task: string;
  isCompleted: boolean;
}

export async function createTask(body: CreateTaskRequest) {
  const response = await api.post<CreateTaskResponse>('/tasks', body);

  return response.data;
}
