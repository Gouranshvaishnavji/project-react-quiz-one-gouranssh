import './ResultComponent.css';

let ResultComponent = () => (
<div className="resultSection">
  <div className="resultTitle">Result</div>
  <div className="resultCard">
    <div className="resultComment">You need more practice!</div>
    <div className="resultScore">Your score is 20%</div>
    <div className="resultStats">
        <div className="resultStat">
          <div className="resultStatTitle">Total number of questions</div>
          <div className="resultStatValue">15</div>
        </div>
        <div className="resultStat">
          <div className="resultStatTitle">your score</div>
          <div className="resultStatValue">3</div>
        </div>
        <div className="resultStat">
          <div className="resultStatTitle">...............</div>
          <div className="resultStatValue">--</div>
        </div>
        <div className="resultStat">
          <div className="resultStatTitle">......................</div>
          <div className="resultStatValue">--</div>
        </div>
    </div>
  </div>
  <div className="resultCta">
    <button className="playAgain">Play Again</button>
    <button className="backHome">Back to Home</button>
  </div>
</div>
);

export default ResultComponent