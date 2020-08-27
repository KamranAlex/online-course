import React from "react";
import "./Body.css";
import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";
import fakeCourses from "../../FakeData/FakeCourses";
import { useState } from "react";

const Body = () => {
  const courses15 = fakeCourses;
  const [courses, setCourses] = useState(courses15);
  const [cart, setCart] = useState([]);

  const handleEnrolement = (courseInfo) => {
    const newCart = [...cart, courseInfo];
    setCart(newCart);
  };

  return (
    <div className='main-body'>
      <div className='container course-container'>
        <div className='row row-cols-1 row-cols-md-3'>
          {courses.map((course) => (
            <Courses
              handleEnrolement={handleEnrolement}
              singleCourse={course}
              key={course.id}
            ></Courses>
          ))}
        </div>
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Body;
