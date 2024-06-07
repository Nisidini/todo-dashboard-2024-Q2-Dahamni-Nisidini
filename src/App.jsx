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
  
    <div className="dashboard">
      <div className='f'>
        <div><SideBar/></div>
        <div><NavBar/>
        <Frame/>
        <div  className='tasks'>
          <div>
          <TaskContainer/>
          </div>

          <div>
            <TaskPriorities/>
            <ActivityFeed/>
          </div>
        </div>
        </div>
        
      </div>
      
   
      
    </div>
   </>
  )
}

export default App;
