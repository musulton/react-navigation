import {ROUTES} from "../../constants";
import {Link} from "react-router-dom";

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

export default NavBar;
