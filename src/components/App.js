import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]) //somehow, "setQuestions" passes information to "questions"
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => {
      setQuestions(data)
      setIsLoaded(true)
    }) //to set the array to state, just call "setQuestions to  data"
  }, [])

const handleQuestionSubmit = (newQuestion) => {
  setQuestions([...questions, newQuestion]) //this is going to set "questions" and then give it the new question we are passing in as an argument "... is spread operator" (this copies whatever you type right after it (newQuestion))
}
const handleDeleteClick = (id) => {
  const newQuestions = questions.filter(question => {
    return question.id !== id
  }
  )
  setQuestions(newQuestions)
}
  if (!isLoaded) return <h3>Loading ...</h3>

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
          onQuestionSubmit={handleQuestionSubmit}
        /> : 
        <QuestionList 
          questions={questions}
          onDeleteClick={handleDeleteClick}
        />} 
    </main>
  );
}

export default App;
