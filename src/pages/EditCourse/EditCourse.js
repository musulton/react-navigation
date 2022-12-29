import {ROUTES} from "../../constants";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const EditCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    return (
        <>
            <h3>Edit Course Page</h3>
            <p>Params: {location?.state?.title}</p>
            <p>Path Variable: {params?.courseId}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: { title: "from Edit Course Page" }
            })}>Go to Course List</button>
        </>
    )
}

export default EditCourse;
