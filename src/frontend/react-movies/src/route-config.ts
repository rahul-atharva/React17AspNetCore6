import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandinPage";

const routes = [
    { path: '/genres', component: IndexGenres },
    { path: '/', component: LandingPage, exact: true }
];

export default routes;