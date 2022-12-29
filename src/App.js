import React from "react";

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

function NavBar({onNavigate}) {
  return (
      <nav>
        {menu.map((item) => (
            <a
                style={{ marginRight: 10 }}
                href="#"
                onClick={() => onNavigate(item.path, { title: "from NavBar" })}
            >
              {item.text}
            </a>
        ))}
      </nav>
  )
}

function App() {
  const [nav, setNav] = React.useState(ROUTES.COURSE_LIST)
  const [params, setParams] = React.useState({
    title: "Params Example"
  })
  let Component;

  const onNavigate = (route, params = null) => {
    setNav(route)
    setParams(params)
  }

  switch (nav){
    case ROUTES.COURSE_LIST:
      Component = CourseList
      break
    case ROUTES.ADD_COURSE:
      Component = AddCourse
      break
    case ROUTES.ADD_TYPE:
      Component = AddType;
      break
    case ROUTES.TYPE_LIST:
      Component = TypeList
      break
    default:
      Component = CourseList
      break
  }

  return (
      <div className="App">
        <NavBar onNavigate={onNavigate} />
        <Component onNavigate={onNavigate} params={params} />
      </div>
  )
}

export default App;
