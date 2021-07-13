import React from "react";

function QuestionItem({ question, onDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDeleteClick = () => {
    onDeleteClick(id)
  }

  const handleSelectChange = (e) => {
    const configObj = { 
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": parseInt(e.target.value)
      })
    }
    fetch(`http://localhost:4000/questions/${id}`, configObj)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
          onChange={handleSelectChange}
          defaultValue={correctIndex}
          >{options}
        </select>
      </label>
      <button onClick={handleDeleteClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
