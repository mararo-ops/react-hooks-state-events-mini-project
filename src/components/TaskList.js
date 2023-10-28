import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  console.log(tasks)
  const taskEach=tasks.map((task,index)=>{
    return(
      <Task key={index} task={task} handleDelete={handleDelete}/>
    )
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskEach}
    
    </div>
  );
}

export default TaskList;