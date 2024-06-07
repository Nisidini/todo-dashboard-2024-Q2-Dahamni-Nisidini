import s from "../taskPriorities/taskPriorities.module.css"

function TaskPriorities(){
    return(
        <>
        <div className={s.container}>
            <div className={s.header}>
                <h1>Task Priorities</h1>
            </div>
        </div>
        </>
    );
}

export default TaskPriorities;