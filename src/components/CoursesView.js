import React from "react";
import Blog from './Blog';

function CoursesView({courses}) {
  return (
    <div className="row mt-30-reverse">
      {courses.map(courses => (
        <div className="col-lg-6 mt-30" key={courses.id}>
          <Blog data={courses} />
        </div>
      ))}
    </div>
  );
}

export default CoursesView;
