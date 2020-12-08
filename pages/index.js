import Layout from '../components/Layout'
import Link from 'next/link'


export async function getStaticProps(){
  
  
    try{
    const result = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ba7b678a113f487b1d9d3c66cba0cfc8&language=en-US`)
    const {results} = await result.json()
    const movie = results.map((res, index) =>{
    const imageUrl = res.poster_path
      return{
        ...res,
        imageUrl
      }
    })
    
    return{
    props:{movie}
  }



    }catch(error){
      console.log(error);

    }

    
  }

export default function Home({movie}) {
  return (
    <Layout title="movies now playing">     
        <h1 className="text-4xl mt-8 mb-10 text-center text-indigo-light font-mono ... capitalize ..." >
         movies now playing        
        </h1>  
      <ul className="grid grid-cols-3 gap-6">
        {
          movie.map((item, index)=>{
            return (<li key={index}>
              <Link href={`/movie/?id=${item.id}`}>
                
                  <a className="mb-10 cursor-pointer text-indigo-light text-center font-mono ... ">
                  <img className="border-2 border-indigo-dark hover:border-indigo-light" src={`https://image.tmdb.org/t/p/w500${item.imageUrl}`} alt={item.original_title}/>
                  <p className="bg-indigo-default hover:bg-indigo-dark">{item.original_title}</p>
                  </a>
                               
              </Link>
            </li>)
          })
        }
        </ul>   
    </Layout>
   
  )
}
