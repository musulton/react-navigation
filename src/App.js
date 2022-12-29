import React from "react";
import {Routes, Route, Outlet, Navigate, useNavigate} from "react-router-dom";

import "./App.css";
import {Navbar} from "./components";
import {ROUTES} from "./constants";
import {CourseList, AddType, AddCourse, TypeList, EditCourse, Dashboard} from "./pages";

function ProtectedRoute({isLoggedIn}) {
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.DASHBOARD} replace />
    }

    return <Outlet />
}

function Layout({onLogout, onLogin, isLoggedIn}) {
    return (
        <div>
            {!isLoggedIn ? (<button onClick={onLogin}>Login</button>) :
            (<button onClick={onLogout}>Logout</button>)}
            <h1>Enigma Course</h1>
            <Navbar />
            <hr />
            <Outlet />
        </div>
    )
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const navigate = useNavigate();
    const onLogin = () => {
        setIsLoggedIn(true)
        navigate(ROUTES.COURSE_LIST)
    }
    const onLogout = () => setIsLoggedIn(false);
    return (
        <div className="App">
            <Routes>
                <Route path={ROUTES.DASHBOARD} element={<Layout onLogin={onLogin} onLogout={onLogout} isLoggedIn={isLoggedIn} />}>
                    <Route index={true} element={<Dashboard />} />
                    <Route path={ROUTES.COURSE_LIST} element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                        <Route index element={<CourseList />} />
                        <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
                        <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
                    </Route>
                    <Route path={ROUTES.TYPE_LIST} element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                        <Route index element={<TypeList />} />
                        <Route path={ROUTES.ADD_TYPE} element={<AddType />} />
                    </Route>
                </Route>
                <Route path={"*"} element={<h3>Page is not found</h3>} />
            </Routes>
        </div>
    )
}

export default App;
