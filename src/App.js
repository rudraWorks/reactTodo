import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import AppDiv from "./UI/AppDiv";
import AddTask from "./components/AddTask";
import PendingTasks from "./components/PendingTasks";
import CompletedTasks from "./components/CompletedTasks";
import PageContainer from "./UI/PageContainer";

function App() {
  const isDarkTheme = useSelector(state=>state.theme.darkTheme)
  const showAddTask = useSelector(state=>state.pageToShow.addTask)
  const showCompletedTasks = useSelector(state=>state.pageToShow.completedTasks)
  const showPendingTasks = useSelector(state=>state.pageToShow.pendingTasks)


  return (
    <AppDiv color={isDarkTheme?"lightgray":"white"}>
        <Navbar></Navbar>
        <PageContainer>
            {showAddTask &&  <AddTask/> }
            { showPendingTasks &&  <PendingTasks/> }
            {showCompletedTasks && <CompletedTasks/> }
        </PageContainer>
    </AppDiv>
  );
} 

export default App;
