import './App.css'
import NavBar from '../components/navBar/navBar';
import SideBar from '../components/sideBar/sideBar';
import Frame from '../components/frame/frame';
import TaskContainer from '../components/taskContainer/taskContainer';
import TaskPriorities from '../components/taskPriorities/taskPriorities';
import ActivityFeed from '../components/activityFeedback/activityFeed';

function App() {

 
  return (
   <>
  
    <div className="dashboard"> {/* Main container for the dashboard */}
      <div className='Header'>  {/* Header and sideBar section */}
        <div>
          <SideBar/>
        </div>
        <div>
          <NavBar/>
          <Frame/>  {/* Welcome section */}
          <div  className='tasks'>
            <div>
              <TaskContainer/> {/* contains details of all the tasks */}
            </div>
          <div>
            <TaskPriorities/> {/* contains the barChart for the tasks  */}
            <ActivityFeed/> {/* containsall the activities  */}
          </div>
        </div>
        </div>    
      </div>   
    </div>
    
   </>
  )
}

export default App;
