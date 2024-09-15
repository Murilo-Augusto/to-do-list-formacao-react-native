import { api } from '@/lib/axios';

interface CompleteTaskRequest {
  taskId: string;
}

interface CompleteTaskBody {
  id: string;
  task: string;
  isCompleted: boolean;
}

export async function completeTask(
  { taskId }: CompleteTaskRequest,
  body: CompleteTaskBody
) {
  await api.patch(`/tasks/${taskId}`, body);
}
