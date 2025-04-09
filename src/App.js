import React from "react";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Cards from './components/Cards'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'


const App = () => {
  const [courses,setCourse] = useState(null);
  const [loading,setLoading] = useState(true);

  async function fetchData() {
    setLoading(true)
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //console.log(output)
      ////output->
      setCourse(output.data);
    }
    catch(error){
      toast.error("Something went error")
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
      <div> 
        <Filter filterData = {filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses}/>)
        }
      </div>
      </div>
    </div>
  );
};

export default App;
