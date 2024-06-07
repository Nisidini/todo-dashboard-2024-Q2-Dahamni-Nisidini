import s from "../activityFeedback/activityFeed.module.css"

function ActivityFeed(){
    return(
        <>
        <div className={s.container}>
            <div className={s.header}>
                <h1>Activity Feed</h1>
            </div>
        </div>
        </>
    );
}

export default ActivityFeed;