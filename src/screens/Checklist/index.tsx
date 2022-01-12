import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Task, TasksList } from '../../components/ComponentsCheckList/TasksList';
import { TodoInput } from '../../components/ComponentsCheckList/TodoInput';

import {
    Container,
    Header,
    TitleAction,
    TextAction,
    ContentTask,
    CountHeader,
    TitleCount,
    BoldCount,
} from './styles';

export type EditTaskArgs = {
    taskId: number;
    taskNewTitle: string;
}

export function Checklist() {
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    const [tasks, setTasks] = useState<Task[]>([]);

    function handleAddTask(newTaskTitle: string) {
      console.log(newTaskTitle);
      //Search tasks that has the same title
      const taskWithSameTask = tasks.find(task => task.title === newTaskTitle);
  
      //If find and exist
      if(taskWithSameTask){
        //He show alert and exit function handleAddTask
        return Alert.alert('Task já cadastrada 🤔',  'Você não pode cadastrar uma task com o mesmo nome.')
      }
  
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
  
      setTasks(oldTasks => [...oldTasks, newTask])
    }
  
    function handleToggleTaskDone(id: number) {
      const updatedTasks = tasks.map(task => ({ ...task }))
      const foundItem = updatedTasks.find(item => item.id === id );
  
      if(!foundItem)
       return;
  
       foundItem.done = !foundItem.done;
       setTasks(updatedTasks);
    }
  
    function handleRemoveTask(id: number) {
      Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [
        {
          style:"cancel",
          text: "Não",
        },
        {
          style: "destructive",
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter(task => task.id !== id );
  
            setTasks(updatedTasks);
          }
        }
      ])
    }
  
    function handleEditTask({ taskId, taskNewTitle }:EditTaskArgs){
  
      const updatedTask = tasks.map(task => ({...task}));
      const foundTask = updatedTask.find(task => task.id === taskId);
  
      if(!foundTask)
      return;
  
      foundTask.title = taskNewTitle;
      setTasks(updatedTask);
  
  }

  const tasksCounterText = tasks.length === 1 ? 'item' : 'itens';

    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <Header>
                <TitleAction>
                    <BackButton onPress={handleBack} />
                    <TextAction>Check-list</TextAction>
                </TitleAction>
            </Header>
            <ContentTask>
                <CountHeader >
                    <TitleCount>Você tem </TitleCount>
                    <BoldCount>{tasks.length} {tasksCounterText}</BoldCount>
                </CountHeader>

                <TodoInput addTask={handleAddTask} />

                <TasksList 
                    tasks={tasks} 
                    toggleTaskDone={handleToggleTaskDone}
                    removeTask={handleRemoveTask} 
                    editTask={handleEditTask}
                />
            </ContentTask>
        </Container>
    );
}