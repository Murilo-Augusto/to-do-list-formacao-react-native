import { completeTask } from '@/api/tasks/complete';
import { Task } from '@/schemas/task';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UseCompleteTaskProps {
  taskId: string;
}

interface UseCompleteTaskPayload {
  id: string;
  task: string;
  isCompleted: boolean;
}

export function useCompleteTask(
  { taskId }: UseCompleteTaskProps,
  body: UseCompleteTaskPayload
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => completeTask({ taskId }, body),
    onSuccess(_) {
      queryClient.setQueryData<Task[]>(['tasks'], (oldData) => {
        const newData = (oldData ?? []).map((task) => {
          if (task.id === taskId) {
            return {
              ...body,
            };
          }

          return task;
        });

        return newData;
      });
    },
  });
}
