import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater(){
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'Sambil', 
                latitude: 23.171053638590738,
                longitude: 72.57907249214038}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}