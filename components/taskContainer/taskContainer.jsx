import React, { useEffect, useState } from "react";
import Pagination from "react-paginate";
import s from "../taskContainer/taskContainer.module.css";

function TaskContainer() {
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const tasksPerPage = 8;

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

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    //displaying the tasks in 8 pages
    const offset = currentPage * tasksPerPage;
    const currentPageTasks = tasks.slice(offset, offset + tasksPerPage);

    return (
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
                    {currentPageTasks.map(task => (
                        <div key={task.id} className={s.task}>
                           <div key={task.id} className={s.task}>
                            <div className={task.completed ? s.greenBox : s.yellowBox}>
                                {task.completed ? '' : '-'}
                            </div>  
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
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(tasks.length / tasksPerPage)}
            onPageChange={handlePageClick}
            containerClassName={s.pagination} 
            activeClassName={s.active}
            />

        </>
    );
}

export default TaskContainer;
