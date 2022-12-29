import React from "react";

import "./App.css";
import {ROUTES} from "./constants";
import CourseList from "./pages/CourseList";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";

function App() {
  const [nav, setNav] = React.useState(ROUTES.HOME)
  const [params, setParams] = React.useState({
    title: "Params Example"
  })
  let Component;

  const onNavigate = (route, params = null) => {
    setNav(route)
    setParams(params)
  }

  switch (nav){
    case ROUTES.HOME:
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
        <Component onNavigate={onNavigate} params={params} />
      </div>
  )
}

export default App;
