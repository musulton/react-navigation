import React from "react";
import {Routes, Route} from "react-router-dom";

import "./App.css";
import {Navbar} from "./components";
import {ROUTES} from "./constants";
import {CourseList, AddType, AddCourse, TypeList, EditCourse} from "./pages";
function App() {
  return (
      <div className="App">
          <Navbar />
          <Routes>
              <Route index={true} element={<h1>Dashboard Page</h1>} />
              <Route index={true} path={ROUTES.COURSE_LIST} element={<CourseList />} />
              <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
              <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
              <Route path={ROUTES.TYPE_LIST} element={<TypeList />} />
              <Route path={ROUTES.ADD_TYPE} element={<AddType />} />
              <Route path={"*"} element={<h3>Not Found</h3>} />
          </Routes>
      </div>
  )
}

export default App;
