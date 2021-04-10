import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import axios from "axios";
import Layout from "../components/Layout";

function CourseDetails(props) {
  const [content, setContent] = useState("");
  const courseFile = props.match.params.title;

  useEffect(() => {
    axios
      .get(require(`../courses/${courseFile}.md`))
      .then(result => {
        setContent(result.data);
      })
      .catch(err => console.log(err));
  }, [content]);

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
          <a href={"https://realpython.com/courses/".concat(courseFile)} className="mi-button">View Course</a>
        </div>
      </div>
    </Layout>
  );
}

export default CourseDetails;
