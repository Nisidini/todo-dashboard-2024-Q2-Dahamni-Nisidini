import s from "../frame/frame.module.css"

function Frame(){
    return(
        <>
        <div className={s.f}>
            <h1>Welcome back, John Doe</h1>
            <p>The end of the year is coming.Are you planning your performance
                interviews?.You can do this super efficiently with Acmy
            </p>
            <a href="#moreInfor">Look here for more information</a>
        </div>
        </>
    );
}


export default Frame;