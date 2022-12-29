import {useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "../../constants";

const AddType = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>Add Type Page</h3>
            <p>Params: {location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.TYPE_LIST, {
                state: { title: "from Add Type Page" }
            })}>Go to Type List</button>
        </>
    )
}

export default AddType;
