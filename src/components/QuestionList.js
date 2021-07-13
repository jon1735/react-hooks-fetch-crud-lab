import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, onDeleteClick }) {

  const handleDeleteClick = (id) => {
    onDeleteClick(id)
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    
    fetch(`http://localhost:4000/questions/${id}`, configObj)
  } 
    
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => 
        <QuestionItem 
        question={question} 
        key={question.id}
        onDeleteClick={handleDeleteClick}
        />
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
