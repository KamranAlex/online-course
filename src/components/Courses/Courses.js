import React from "react";
import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Courses = (props) => {
  const courseInfo = props.singleCourse;
  const { name, image, instructor, price, rating } = courseInfo;
  return (
    <div className='col md-4'>
      <div className='card'>
        <img src={image} alt='' />
        <div className='card-body'>
          <h5 className='course-name'> {name}</h5>
          <p>
            by <small className='instructor'>{instructor}</small>
          </p>
          <p>
            Price: <span className='price'>${price}</span>
          </p>
          <p>
            Rating: <span className='rating'>{rating}/5</span>
          </p>
        </div>
        <div className='card-footer'>
          <button
            onClick={() => props.handleEnrolement(courseInfo)}
            className='btn btn-danger'
          >
            <FontAwesomeIcon icon={faCartPlus} /> Enrole Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
