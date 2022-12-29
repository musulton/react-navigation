import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const TypeList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>Type List Page</h3>
            <p>Params: {location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: { title: "from Type List Page" }
            })}>Go to Course List</button>
        </>
    )
}

export default TypeList;
