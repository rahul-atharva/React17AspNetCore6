import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

function CreateGenre() {
    const history = useHistory();
    return (<>
    <h3>Create Genre</h3>

    <Button onClick={() => {
        //... Saving in DB
        history.push("/Genres")
    }}>Save Changes</Button>
    </>);
}

export default CreateGenre;