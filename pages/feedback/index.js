import { extractFeedback, buildFeedbackPath } from "../api/feedback";
import Link from "next/link";
import { useState } from 'react'

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState()

  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback)
      });
  }


  const feedbackList = props.feedback.map((feedback) => (
    <div key={feedback.id}>
      <h1>{feedback.name}</h1>
      <button onClick={loadFeedbackHandler.bind(null, feedback.id)}>
        Show Data
      </button>
    </div>
  ));

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      {feedbackList}
    </>
  );
}

export async function getStaticProps() {
  const path = buildFeedbackPath();
  const data = extractFeedback(path);

  return {
    props: { feedback: data },
  };
}
