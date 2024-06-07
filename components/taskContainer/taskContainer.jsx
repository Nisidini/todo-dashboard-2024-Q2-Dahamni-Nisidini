import s from "../taskContainer/taskContainer.module.css"
import React, { useEffect, useState } from "react";

function TaskContainer(){

    //Fetching the tests data from the URL
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
            .then(response => response.json())
            .then(data => {
                setTasks(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

//Converting the date formart
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

  //changing the colors of the task priority   
    const getPriorityClass = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return s.redBox;
            case 'low':
                return s.blueBox;
            case 'medium':
                return s.mediumBox;
            default:
                return '';
        }
    };

    return(
        <>
        <div className={s.container}>
                <p>Tasks</p>
                <div className={s.insideContainer}>
                    <div className={s.header}>
                        <div className={s.section1}>
                            <div><p>Status</p></div>
                            <div><p>Task name</p></div>
                        </div>
                        <div className={s.section2}>
                            <div><p>Created by</p></div>
                            <div><p>Priority</p></div>
                            <div><p>Date</p></div>
                        </div>
                    </div>
                     {/* Displaying the data in the URL into the container */}
                    {tasks.map(task => (
                        <div key={task.id} className={s.task}>
                            <div className={task.completed ? s.greenBox : s.yellowBox}>
                                {task.completed ? '' : '-'}
                            </div>
                            {/* <div className={s.taskName}>{task.taskName}</div> */}
                            <div className={s.taskDetails}>
                                <div className={s.details1}>
                                    <div className={s.completed}>{task.completed}</div>
                                    <div className={s.todo}>{task.todo}</div>
                                </div>
                               
                                <div  className={s.details2}>
                                    <div className={s.createdBy}>{task.createdBy}</div>
                                    <div className={getPriorityClass(task.priority)}>{task.priority}</div>
                                    <div className={s.createdAt}>{formatDate(task.createdAt)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TaskContainer;