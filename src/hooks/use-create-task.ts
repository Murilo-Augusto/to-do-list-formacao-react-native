import { createTask } from '@/api/tasks/create';
import { Task } from '@/schemas/task';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess(data) {
      queryClient.setQueryData<Task[]>(['tasks'], (oldData) => [
        ...(oldData ?? []),
        data,
      ]);
    },
  });
}
