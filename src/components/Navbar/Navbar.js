import {ROUTES} from "../../constants";

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

export default NavBar;
