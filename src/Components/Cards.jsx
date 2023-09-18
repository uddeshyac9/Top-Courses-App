import React, { useState } from 'react'
import Card from "./Card";

function Cards(props) {
    let courses = props.courses;
    let category = props.category;
   
//    console.log(courses);
   
   
    const [likedCourses, setLikedCourses] = useState([]);
    // getCourses returns you a list of all courses recived from the api responce 
    function getCourses() {
        // console.log(category);
        
         if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
         }  else
        {
            return courses[category];
        }
    }
    return (
        <div className='flex flex-wrap gap-4 justify-center mb-4'>
         {
                getCourses().map((course) => {
                    return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
                })
            }

        </div>
        
    )
}

export default Cards
