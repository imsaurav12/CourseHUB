import React from 'react'
import Card from './Card'
import {useState} from 'react';

const Cards = (props) => {
  let courses = props.courses;
  // console.log('Printing Data')
  // console.log(courses);
  const [likedCourses, setLikedCourses] = useState([]);
  let category = props.category;

  function getCourses(){
    if (!courses) return [];
    if(category === "All"){
      let allCourses = [];
    Object.values(courses).forEach(arrayEl => {
      arrayEl.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
    return allCourses;
    }
    else{
      return courses[category];
    }
  }
   
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4"> {
      getCourses().map((course)=>(
        <Card key={course.id} 
        course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} />
      ))} 
    </div>
  )
}

export default Cards
