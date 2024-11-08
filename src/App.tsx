import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Contact, News, People, StudentProjects } from "./pages";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={ <News/> } />
                <Route path='/people' element={ <People/> } />
                <Route path='/student-projects' element={ <StudentProjects/> } />
                <Route path='*' element={ <Navigate to='/' replace /> } />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;