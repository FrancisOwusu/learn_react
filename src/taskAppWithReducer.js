import { useReducer } from "react";
import AddTask from "./task_project/AddTask";
import TaskList from "./task_project/TaskList";
import tasksReducer from "./task_project/TaskReducer";

export default function TaskApp1(){
    const [tasks,dispatch] =useReducer(tasksReducer,initialTasks);
function handleAddTask(text){
    dispatch({
        type:'added',
        id:nextId++,
        text:text
    })
}

function handleChangeTask(task){
    dispatch({
        type:'changed',
        task:task,
    })
}
function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];