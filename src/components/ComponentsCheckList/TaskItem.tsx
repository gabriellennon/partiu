import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

import trashIcon from '../../assets/icons/trash/trash.png'
import editIcon from '../../assets/icons/edit/edit.png'

import { AntDesign } from '@expo/vector-icons';

import { Task } from './TasksList'
import { EditTaskArgs } from "../../screens/Checklist";


interface TasksItemProps {
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
}

export function TaskItem({ task, toggleTaskDone, removeTask, editTask }: TasksItemProps) {

  const textInputRef = useRef<TextInput>(null)

  const [istask, setIsTask] = useState(false);
  const [editedtask, setEditedTask] = useState(task.title);

  function handleStartEditing() {
    setIsTask(true);
  }

  function handleCancelEditing() {
    setEditedTask(task.title);
    setIsTask(false);
  }

  function handleSubmitEditing() {
    editTask({ taskId: task.id, taskNewTitle: editedtask });
    setIsTask(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (istask) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [istask])

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(task.id)}
        >
          <View
            style={task.done ? styles.taskMarkerDone : styles.taskMarker}
          >
            {task.done && (
              <AntDesign name="checkcircle" size={12} color="#FFF" />
            )}
          </View>

          <TextInput
            ref={textInputRef}
            style={task.done ? styles.taskTextDone : styles.taskText}
            value={editedtask}
            onChangeText={setEditedTask}
            editable={istask}
            onSubmitEditing={handleSubmitEditing}
          >
          </TextInput>
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        {istask ? (
          <TouchableOpacity
            onPress={handleCancelEditing}
          >
            <AntDesign name="close" size={24} color="#b2b2b2" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleStartEditing}
          >
            <Image source={editIcon} />
          </TouchableOpacity>
        )}

        <View style={styles.iconsDivider}/>
        
          <TouchableOpacity
            onPress={() => removeTask(task.id)}
            disabled={istask}
          >
            <Image source={trashIcon} style={{ opacity: istask ? 0.2 : 1 }} />
          </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    //paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#666',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 24,
  },
  iconsDivider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(196, 196, 196, 0.24)',
    marginHorizontal: 12,
  },
})