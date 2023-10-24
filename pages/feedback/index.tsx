import { GetStaticProps } from "next";
import React, { Fragment, useState } from "react";
import {
  Feedback,
  buildFeedbacksPath,
  extractFeedbacks,
} from "../api/feedback";

interface FeedbackPageProps {
  feedbacks: Feedback[];
}

const FeedbackPage = ({ feedbacks }: FeedbackPageProps) => {
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  function showDetailsHandler(id: string) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedback(data.feedback));
  }

  return (
    <Fragment>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={showDetailsHandler.bind(null, item.id)}>
              Show details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbacksPath();
  const data = extractFeedbacks(filePath);
  return { props: { feedbacks: data } };
}

export default FeedbackPage;
