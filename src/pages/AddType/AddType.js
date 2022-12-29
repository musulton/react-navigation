import {ROUTES} from "../../constants";

const AddType = ({onNavigate, params}) => (
    <>
        <h3>Add Type Page</h3>
        <p>Params: {params?.title}</p>
        <button onClick={() => onNavigate(ROUTES.TYPE_LIST, { title: "from Add Type Page" })}>Go to Type List</button>
    </>
)

export default AddType;
