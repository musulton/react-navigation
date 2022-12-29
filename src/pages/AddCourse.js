import {ROUTES} from "../constants";

const AddCourse = ({onNavigate, params}) => (
    <>
        <h3>Add Course Page</h3>
        <p>Params: {params?.title}</p>
        <button onClick={() => onNavigate(ROUTES.HOME, { title: "from Add Course Page" })}>Go to Course List</button>
    </>
)

export default AddCourse;
