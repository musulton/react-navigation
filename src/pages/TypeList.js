import {ROUTES} from "../constants";

const TypeList = ({onNavigate, params}) => (
    <>
        <h3>Type List Page</h3>
        <p>Params: {params?.title}</p>
        <button onClick={() => onNavigate(ROUTES.HOME, { title: "from Type List Page" })}>Go to Course List</button>
    </>
)

export default TypeList;
