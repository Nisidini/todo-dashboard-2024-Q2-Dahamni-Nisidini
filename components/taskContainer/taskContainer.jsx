import s from "../taskContainer/taskContainer.module.css"
import React, { useEffect, useState } from "react";

function TaskContainer(){
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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return(
        <>
        <div className={s.f}>
                <p>Tasks</p>
                <div className={s.inside}>
                    <div className={s.h}>
                        <div className={s.a}>
                            <div><p>Status</p></div>
                            <div><p>Task name</p></div>
                        </div>
                        <div className={s.b}>
                            <div><p>Created by</p></div>
                            <div><p>Priority</p></div>
                            <div><p>Date</p></div>
                        </div>
                    </div>
                    {tasks.map(task => (
                        <div key={task.id} className={s.task}>
                            <div className={task.completed ? s.greenBox : s.yellowBox}>
                                {task.completed ? '' : '-'}
                            </div>
                            <div className={s.taskName}>{task.taskName}</div>
                            <div className={s.taskDetails}>
                                <div className={s.my}>
                                    <div className={s.completed}>{task.completed}</div>
                                    <div className={s.todo}>{task.todo}</div>
                                </div>
                               
                                <div  className={s.myy}>
                                    <div className={s.createdBy}>{task.createdBy}</div>
                                    <div className={s.priority}>{task.priority}</div>
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