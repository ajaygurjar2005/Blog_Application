
import Banner from '../Banner/Banner';
import Categorise from './Categorise';
// import data from "../../constants/data.jsx"
import Posts from './post/Posts.jsx';



const Home = () => {

  return (
    <div className='mb-4'>
      <Banner />
      <div className="w-full md:flex">
        <div className="w-1/5">
          <Categorise />
        </div>
        <div className="w-4/5 flex flex-col">
          <div className="">
            <Posts />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home
