import { deleteTask } from '@/api/tasks/delete';
import { Task } from '@/schemas/task';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess(_, { taskId }) {
      queryClient.setQueryData<Task[]>(['tasks'], (oldData) => {
        if (!oldData) return;
        return oldData.filter((task) => task.id !== taskId);
      });
    },
  });
}
