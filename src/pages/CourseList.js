import {ROUTES} from "../constants";

const CourseList = ({onNavigate, params}) => (
    <>
        <h3>Course List Page</h3>
        <p>Params: {params?.title}</p>
        <button onClick={() => onNavigate(ROUTES.TYPE_LIST, { title: "from Course List" })}>Go to Type List</button><br />
        <button onClick={() => onNavigate(ROUTES.ADD_COURSE, { title: "from Course List" })}>Go to Add Course</button><br />
        <button onClick={() => onNavigate(ROUTES.ADD_TYPE, { title: "from Course List" })}>Go to Add Type</button>
    </>
)

export default CourseList;
