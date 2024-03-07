import './QuizComponent.css'

let QuizComponent=()=>(
<div className="quiz">
  <h2>Question</h2>
  <div className="counter">1 of 15</div>
  <div className="question">
    How many hearts do kangaroos have?
  </div>
  <div className="options">
    <div className="option">They are Heartless</div>
    <div className="option">Broken Heart</div>
    <div className="option">Stolen heart</div>
    <div className="option">1 heart</div>
  </div>
  <div className="cta">
    <button className="prev">Back</button>
    <button className="next">Next</button>
    <button className="quit">Leave now</button>
  </div>
</div>
)

export default QuizComponent