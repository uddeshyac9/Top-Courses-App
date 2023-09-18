import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { filterData, apiUrl } from './data.jsx'
import { toast } from "react-toastify";
import Spinner from './Components/Spinner'

// import './App.css'

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
 
  const fetchData = async() => {
    setLoading(true);
    try {
      const responce = await fetch(apiUrl);
      const apiData = await responce.json();
      //save data into a varriable 
      setCourses(apiData.data)
      // console.log(apiData.data)
     
    } catch (error) {
      toast.error('Something went Wrong');
      
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData()
  },[])
  // useEffect(() => {
  //   // This code block will run when the 'courses' state is updated
  //   console.log('courses data:', courses);
  // }, [courses]); // Add 'courses' as a dependency to this useEffect
  

  return (
    <div className='min-h-screen flex flex-col bg-bgDark2'>
       <div> <Navbar/>
    </div>
    <div className='bg-bgDark2'>
    <div >
      <Filter filterData = {filterData}
        category={category}
        setCategory={setCategory}/>
      </div>
    <div className=' w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center '>
      {
        loading ? < Spinner/> : <Cards courses={courses} category={category}/>
         
      }
      </div>
      </div>
    </div>
   
    

   
  )
}

export default App
