import { Container, DeleteButton, TaskText, TrashIcon } from './styles';
import { Checkbox } from '../checkbox';
import { useDeleteTask } from '@/hooks/use-delete-task';
import { useCompleteTask } from '@/hooks/use-complete-task';

export interface TaskProps {
  id: string;
  task: string;
  isCompleted: boolean;
}

export function Task({ id, task, isCompleted }: TaskProps) {
  const { mutateAsync: completeTaskFn } = useCompleteTask(
    { taskId: id },
    { id, isCompleted: !isCompleted, task }
  );
  const { mutateAsync: deleteTaskFn } = useDeleteTask();

  async function handleDeleteTask() {
    try {
      deleteTaskFn({ taskId: id });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCompleteTask() {
    try {
      completeTaskFn();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container onPress={handleCompleteTask}>
      <Checkbox value={isCompleted} onValueChange={() => {}} />
      <TaskText>{task}</TaskText>
      <DeleteButton onPress={handleDeleteTask}>
        <TrashIcon width={16} size={16} />
      </DeleteButton>
    </Container>
  );
}
