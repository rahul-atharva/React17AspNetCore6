import { Redirect } from "react-router-dom";

function RedirectToLandingPage() {
    return <Redirect to={{pathname:'/'}}></Redirect>
}

export default RedirectToLandingPage;