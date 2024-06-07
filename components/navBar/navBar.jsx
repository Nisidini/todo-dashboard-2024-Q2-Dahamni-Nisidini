import s from "../navBar/navBar.module.css"
import bellIcon from "../../src/assets/bell.png"
import dropDownIcon from "../../src/assets/dropDown.png"

function NavBar(){
    return(
        <>
        <div className={s.container}>
        <div className={s.navBar}>
            <div><h1>DashBoard</h1></div>
            <div>
                <div className={s.section}>
                    <div><img src={bellIcon}/></div>
                    <div className={s.profilePic}></div>
                    <div><img src={dropDownIcon}/></div>
                </div>
            </div>
            
        </div>
        </div>
        </>
    );
}

export default NavBar;