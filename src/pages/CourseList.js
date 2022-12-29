import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const CourseList = () => {
        const navigate = useNavigate();
        const location = useLocation();
        return (
            <>
                    <h3>Course List Page</h3>
                    <p>Params: {location?.state?.title}</p>
                    <button onClick={() => navigate(ROUTES.TYPE_LIST, {
                            state: { title: "from Course List" }
                    })}>Go to Type List</button><br />
                    <button onClick={() => navigate(ROUTES.ADD_COURSE, {
                            state: { title: "from Course List" }
                    })}>Go to Add Course</button><br />
                    <button onClick={() => navigate(ROUTES.ADD_TYPE, {
                            state: { title: "from Course List" }
                    })}>Go to Add Type</button>
            </>
        )
}

export default CourseList;
