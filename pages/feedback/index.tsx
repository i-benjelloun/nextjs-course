import { GetStaticProps } from "next";
import React from "react";
import { Feedback, buildFeedbackPath, extractFeedback } from "../api/feedback";

interface FeedbackPageProps {
  feedbacks: Feedback[];
}

const FeedbackPage = ({ feedbacks }: FeedbackPageProps) => {
  return (
    <ul>
      {feedbacks.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return { props: { feedbacks: data } };
}

export default FeedbackPage;
