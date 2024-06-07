import s from "../sideBar/sideBar.module.css"
import ImagePic from "../../src/assets/image.png"

function SideBar(){
    return(
        <>
        <div className={s.sideBarSection}>
            <div className={s.box}><h1 className={s.heading}>Acmy Solutions</h1></div>
            <div className={s.box2}>
                 <div className={s.y}>
                    <div><img src={ImagePic}/></div>
                    <div><p>DashBoard</p></div>
                 </div>
                 </div>
        </div>
        </>
    );
}

export default SideBar