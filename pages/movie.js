import Link from 'next/link'
import Layout from '../components/Layout';

export default function Movie({movie}){
 console.log(movie);
 return (
  <Layout title={movie.original_title}>

  <div className="grid grid-cols-2 gap-6 p-10">
   <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title}/>

   <div className="text-indigo-light font-mono ...">
    <h1 className="text-center mb-5">
    {movie.original_title}
   </h1>
   <p className="mb-5"><span className="inline-block bg-indigo-dark p-2 mr-2 mb-2">overview:</span> <br/>
   {movie.overview}</p>
   <p><span className="inline-block bg-indigo-dark p-2 mr-2 mb-2">rating: </span>{movie.vote_average}</p>
   <p><span className="inline-block bg-indigo-dark p-2 mr-2">release date:  </span>{movie.release_date}</p>
   

    </div>
  </div>
  <p className="m-6 font-mono ... text-center">
      <Link href="/">
          <a className="text-2xl underline text-indigo-light hover:text-indigo-dark">Home</a>
      </Link>
   </p>
   
    
  </Layout>
 )


}

export async function getServerSideProps(context){
 const { id } = context.query;
 try{
 
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ba7b678a113f487b1d9d3c66cba0cfc8&language=en-US`);
  const movie = await res.json();
 

 
  
  return { 
   props: { movie },
  };
  

 }catch(error){
  console.log(error);
 }


}