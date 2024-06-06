import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Contact, News, People, StudentProjects } from "./pages";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={ <News/> } />
                <Route path='/people' element={ <People/> } />
                <Route path='/student-projects' element={ <StudentProjects/> } />
                <Route path='/contact' element={ <Contact/> } />
            </Routes>
        </>
    )
}

export default App;