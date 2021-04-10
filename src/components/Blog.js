import React from "react";
import { Link } from "react-router-dom";

function Course(props) {
  const { id, featuredImage, title, createDay, createMonth, filesource } = props.data;
  const getShortMonth = month => {
    return month.slice(0, 3);
  };
  const getNospaceTitle = filesource => {
    let tempArr = filesource.split('/');
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={`courses/course-details/${id}/${getNospaceTitle(filesource)}`}>
          <img src={featuredImage} alt={title} />
        </Link>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link to={`courses/course-details/${id}/${getNospaceTitle(filesource)}`}>
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Course;
