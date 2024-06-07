import s from "../navBar/navBar.module.css"

function NavBar(){
    return(
        <>
        <div className={s.f}>
        <div className={s.navBar}>
            <div><h1>DashBoard</h1></div>
            <div className={s.profilePic}></div>
        </div>
        </div>
        </>
    );
}

export default NavBar;