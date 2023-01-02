import React from "react";
import {Routes, Route, Outlet, Navigate} from "react-router-dom";

import "./App.css";
import {Navbar} from "./components";
import {ROUTES} from "./constants";
import {CourseList, AddType, AddCourse, TypeList, EditCourse, Login} from "./pages";

const CourseWrapper = () => (
    <>
        <h1>Course Page</h1>
        <Outlet />
    </>
)

const TypeWrapper = () => (
    <>
        <h1>Type Page</h1>
        <Outlet />
    </>
)

const ProtectedRoutes = ({isLoggedIn}) => {
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.LOGIN} replace={true} />
    }

    return (
        <>
            <Navbar />
            <hr />
            <Outlet />
        </>
    )
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    return (
        <div className="App">
            <Routes>
                <Route path={ROUTES.LOGIN} index={true} element={<Login />} />
                <Route path={ROUTES.DASHBOARD} element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
                    <Route path={ROUTES.COURSE_LIST} element={<CourseWrapper />}>
                        <Route index element={<CourseList />} />
                        <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
                        <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
                    </Route>
                    <Route path={ROUTES.TYPE_LIST} element={<TypeWrapper />}>
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
