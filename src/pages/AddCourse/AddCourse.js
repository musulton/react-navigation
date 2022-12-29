import {useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "../../constants";

const AddCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>Add Course Page</h3>
            <p>Params: {location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: { title: "from Add Course Page" }
            })}>Go to Course List</button>
        </>
    )
}

export default AddCourse;
