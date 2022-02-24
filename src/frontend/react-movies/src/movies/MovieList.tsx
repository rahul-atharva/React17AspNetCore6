import GenericList from "../utils/GenericList";
import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css';

export default function MoviesList(props: movieListProps) {
    return <GenericList list={props.movies}
    >
        <div className={css.div}>
            {props.movies?.map(
                movie =>
                    <IndividualMovie {...movie} key={movie.id}></IndividualMovie>
            )}
        </div>
    </GenericList>

    // if(!props.movies){
    //     return <><Loading /></>
    // }
    // else if(props.movies.length === 0){
    //     return <>There are no MOvies to display.</>
    // }
    // else{
    //     return (
    //         <>
    //             <div className={css.div}>
    //                 {props.movies.map(
    //                     movie =>
    //                         <IndividualMovie {...movie} key={movie.id}></IndividualMovie>
    //                 )}
    //             </div>
    //         </>
    //     )
    // }

}

interface movieListProps {
    movies?: movieDTO[];
}