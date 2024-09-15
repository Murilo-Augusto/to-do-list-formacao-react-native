import { api } from '@/lib/axios';

export interface DeleteTaskRequest {
  taskId: string;
}

export async function deleteTask({ taskId }: DeleteTaskRequest) {
  await api.delete(`/tasks/${taskId}`);
}
