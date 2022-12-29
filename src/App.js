import React from "react";

import "./App.css";
import {Navbar} from "./components";
import {ROUTES} from "./constants";
import {CourseList, AddType, AddCourse, TypeList} from "./pages";
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
        <Navbar onNavigate={onNavigate} />
        <Component onNavigate={onNavigate} params={params} />
      </div>
  )
}

export default App;
