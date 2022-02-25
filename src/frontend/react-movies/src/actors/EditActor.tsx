import { useParams } from "react-router-dom";

function EditActor() {
    const { id }: any = useParams()
    return (
    <>
        <h3>Edit Actor</h3>
        The id is {id}
    </>
    );
}

export default EditActor;