import React from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";

import "./App.css";
import {ROUTES} from "./constants";
import CourseList from "./pages/CourseList";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";
import EditCourse from "./pages/EditCourse";
import Dashboard from "./pages/Dashboard";

const menu = [
  { path: ROUTES.COURSE_LIST, text: "Course List" },
  { path: ROUTES.TYPE_LIST, text: "Type List" },
  { path: ROUTES.ADD_COURSE, text: "Add Course" },
  { path: ROUTES.ADD_TYPE, text: "Add Type" },
  { path: ROUTES.EDIT_COURSE, text: "Edit Course" },
]

function NavBar() {
  return (
      <nav>
        {menu.map((item, index) => (
            <Link
                key={index}
                style={{ marginRight: 10 }}
                to={item.path}
                state={{ title: "from NavBar" }}
            >
              {item.text}
            </Link>
        ))}
      </nav>
  )
}


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
            <NavBar />
            <hr />
            <Outlet />
        </div>
    )
}

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={ROUTES.HOME} element={<Layout />}>
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
