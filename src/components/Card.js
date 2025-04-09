import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify'

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    //logic
    if(likedCourses.includes(course.id)){
      //pahle se like hua para tha
      setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)))
      toast.warning("Unliked Successfully");

    }
    else{
      //pahle se like nahi h
      //insert karna hai ye course likedCourse me
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        // non- empty pahle se
        setLikedCourses((prev) => [...prev,course.id]);
      }
      toast.success("Liked Successfully");
    }

  }
  return (
    <div className="w-[300px] bg-opacity-80 bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>

      <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
      grid place-items-center">
        <button onClick={clickHandler} >
          {
            likedCourses.includes(course.id) ?
            (<FcLikePlaceholder fontSize="1.75rem" />):
            (<FcLike fontSize="1.75rem"/>)
          }
          
          
        </button>
      </div>
      </div>
      <div>
        <p className="p-2 text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white p-2">
          {
            course.description.length > 100 ? 
            `${course.description.substring(0,100)}...`:
            course.description
          }</p>
      </div>
      
    </div>
  )
}

export default Card
