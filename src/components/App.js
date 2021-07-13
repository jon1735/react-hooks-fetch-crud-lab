import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]) //somehow, "setQuestions" passes information to "questions"
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data)) //to set the array to state, just call "setQuestions to  data"
  }, [])

const handleQuestionSubmit = (newQuestion) => {
  setQuestions([...questions, newQuestion]) //this is going to set "questions" and then give it the new question we are passing in as an argument "... is spread operator" (this copies whatever you type right after it (newQuestion))
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onQuestionSubmit={handleQuestionSubmit}/> : <QuestionList questions={questions}/>} 
    </main>
  );
}

export default App;
