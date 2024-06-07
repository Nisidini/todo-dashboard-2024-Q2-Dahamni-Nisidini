import s from "../taskContainer/taskContainer.module.css"

function TaskContainer(){
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
                        <div><p>priority</p></div>
                        <div><p>Date</p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TaskContainer;