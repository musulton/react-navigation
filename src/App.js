import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";

import "./App.css";
import {Navbar} from "./components";
import {ROUTES} from "./constants";
import {CourseList, AddType, AddCourse, TypeList, EditCourse, Dashboard} from "./pages";

function Course() {
    return (
        <div>
            <h1>Course</h1>
            <Outlet />
        </div>
    )
}


function CourseType() {
    return (
        <div>
            <h1>Course Type</h1>
            <Outlet />
        </div>
    )
}

function Layout() {
    return (
        <div>
            <h1>Enigma Course</h1>
            <Navbar />
            <hr />
            <Outlet />
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={ROUTES.DASHBOARD} element={<Layout />}>
                    <Route index={true} element={<Dashboard />} />
                    <Route path={ROUTES.COURSE_LIST} element={<Course />}>
                        <Route index element={<CourseList />} />
                        <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
                        <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
                    </Route>
                    <Route path={ROUTES.TYPE_LIST} element={<CourseType />}>
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
