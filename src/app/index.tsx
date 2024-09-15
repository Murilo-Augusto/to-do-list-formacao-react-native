import { Image, View } from 'react-native';
import { CirclePlus } from 'lucide-react-native';

import { Task } from '@/components/task';
import { Input } from '@/components/input';
import {
  Button,
  Container,
  Content,
  Counter,
  CounterContainer,
  CreatedContainer,
  CreatedText,
  DoneContainer,
  DoneText,
  Empty,
  EmptyContent,
  EmptyText1,
  EmptyText2,
  Info,
  List,
  NewTask,
  Separator,
  Tasks,
  Top,
} from './styles';
import { useMemo, useState } from 'react';
import { useCreateTask } from '@/hooks/use-create-task';
import { useTasks } from '@/hooks/use-tasks';

export default function AppPage() {
  const [newTask, setNewTask] = useState('');

  const { data: tasks } = useTasks();

  const { mutateAsync: createTaskFn } = useCreateTask();

  const sortedTasks = useMemo(() => {
    if (!tasks) return [];

    return tasks.sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) {
        return a.isCompleted ? 1 : -1;
      }

      return a.task.localeCompare(b.task);
    });
  }, [tasks]);

  const completedTasksAmount = useMemo(() => {
    if (!tasks) return [];

    return tasks.filter((task) => task.isCompleted).length;
  }, [tasks]);

  async function handleCreateTaskFn() {
    if (!newTask) return;

    try {
      createTaskFn({
        task: newTask,
        isCompleted: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNewTask('');
    }
  }

  return (
    <Container>
      <Top>
        <Image source={require('@/assets/logo.png')} />
      </Top>
      <Content>
        <NewTask>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChangeText={setNewTask}
          />
          <Button onPress={handleCreateTaskFn}>
            <CirclePlus size={16} color="white" />
          </Button>
        </NewTask>

        <Tasks>
          <Info>
            <CreatedContainer>
              <CreatedText>Criadas</CreatedText>
              <CounterContainer>
                <Counter>{sortedTasks.length}</Counter>
              </CounterContainer>
            </CreatedContainer>

            <DoneContainer>
              <DoneText>Concluídas</DoneText>
              <CounterContainer>
                <Counter>{completedTasksAmount}</Counter>
              </CounterContainer>
            </DoneContainer>
          </Info>
          <List
            data={sortedTasks ?? []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Task key={item.id} {...item} />}
            contentContainerStyle={{ gap: 12 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Empty>
                <Separator />
                <EmptyContent>
                  <Image source={require('@/assets/clipboard.png')} />
                  <View>
                    <EmptyText1>
                      Você ainda não tem tarefas cadastradas
                    </EmptyText1>
                    <EmptyText2>
                      Crie tarefas e organize seus itens a fazer
                    </EmptyText2>
                  </View>
                </EmptyContent>
              </Empty>
            )}
          />
        </Tasks>
      </Content>
    </Container>
  );
}
