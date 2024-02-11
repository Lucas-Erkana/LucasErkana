import React from "react";
import feedbackData from "./feedbackData.json";
import FeedbackCard from "../../components/FeedbackCard";
import PageHeader from "../../components/PageHeader";

const Feedback = () => {
  const FeedbackList = () =>
    feedbackData.map((feedback) => (
      <FeedbackCard
        key={feedback.id}
        title={feedback.title}
        image={feedback.image}
        company_name={feedback.company_name}
        name={feedback.name}
        description={feedback.description}
        github={feedback.github}
        bgcolor={feedback.bgcolor}
        textcolor={feedback.textcolor}
      />
    ));

  return (
    <section className="feedback">
      <PageHeader title="Feedback" description="What others say about me" />
      <div className="row">
        <FeedbackList />
      </div>
    </section>
  );
};

export default Feedback;
