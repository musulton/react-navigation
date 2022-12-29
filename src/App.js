import React from "react";
import {Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";

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

const appRouter = createBrowserRouter([
    {
        path: ROUTES.DASHBOARD,
        element: <Layout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: ROUTES.COURSE_LIST, element: <Course />, children: [
                    { index: true, element: <CourseList /> },
                    { path: ROUTES.ADD_COURSE, element: <AddCourse /> },
                    { path: `${ROUTES.EDIT_COURSE}/:courseId?`, element: <EditCourse /> }
                ] },
            { path: ROUTES.TYPE_LIST, element: <CourseType />, children: [
                    { index: true, element: <TypeList /> },
                    { path: ROUTES.ADD_TYPE, element: <AddType /> }
                ] },
        ],
    },
    { path: "*", element: <h3>Page is not found</h3> }
])

function App() {
  return (
      <div className="App">
          <RouterProvider router={appRouter} />
      </div>
  )
}

export default App;
