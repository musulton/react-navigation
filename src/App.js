import React from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";

import "./App.css";
import {ROUTES} from "./constants";
import CourseList from "./pages/CourseList";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";

const menu = [
  { path: ROUTES.COURSE_LIST, text: "Course List" },
  { path: ROUTES.TYPE_LIST, text: "Type List" },
  { path: ROUTES.ADD_COURSE, text: "Add Course" },
  { path: ROUTES.ADD_TYPE, text: "Add Type" },
]

function NavBar() {
  return (
      <nav>
        {menu.map((item) => (
            <Link
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


function Layout() {
  return (
      <div className="App">
        <NavBar />
        <hr />
        <Outlet />
      </div>
  )
}

function App() {
  return (
      <Routes>
        <Route path={ROUTES.COURSE_LIST} element={<Layout />}>
          <Route index={true} element={<CourseList />} />
          <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
          <Route path={ROUTES.TYPE_LIST} element={<TypeList />} />
          <Route path={ROUTES.ADD_TYPE} element={<AddType />} />
        </Route>
      </Routes>
  )
}

export default App;
