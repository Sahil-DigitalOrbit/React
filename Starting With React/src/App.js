// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "./Component.css";
import { questions } from "./question.data";
import { tabData } from "./tabbing.data";

function App() {
  let [status, changeState] = useState(false);

  let [modalStatus, changeModalStatus] = useState(false);

  let [questionStatus, showAnswer] = useState(-1);

  let [tabValue, updateTab] = useState("");

  function changeTab(e) {
    let id = e.target.id;
    updateTab(tabData[id].data);
  }
  
function Tab() {
  return <section className="episode-display">{tabValue}</section>;
}

  return (
    <div className="App">
      <h1>Welcome to New React Page</h1>
      <div className="container">
        <Card />
        <hr></hr>

        {/* password show/hide button */}
        <h3>password show and hide options</h3>
        <div>
          <input type={status ? "text" : "password"} />
          <button onClick={() => changeState(!status)}>
            {status ? "hide" : "show"}
          </button>
        </div>
        <hr></hr>

        {/* Modal */}
        <button
          className="Enquire-button"
          onClick={() => changeModalStatus(true)}
        >
          Enquire Now
        </button>
        <div
          onClick={() => changeModalStatus(false)}
          className={`modal-background ${
            modalStatus ? "modal-background-active" : ""
          }`}
        ></div>
        <div className={`modal-box  ${modalStatus ? "modal-box-show" : ""}`}>
          Enquire
        </div>
        <hr></hr>
        {/* click Description */}

        <div>
          {questions.map((element, idx) => {
            return (
              <div key={idx}>
                <h3 onClick={() => showAnswer(idx)} className={`question`}>
                  {element.question}
                </h3>
                <p
                  className={`answer ${
                    questionStatus == idx ? "answer-show" : ""
                  }`}
                >
                  {element.answer}
                </p>
              </div>
            );
          })}
        </div>

        <hr></hr>

        {/* Tabbing */}
        <h2>Tabbing</h2>
        <div onClick={changeTab} className="episode-span" id="0">
          Show 1 episode
        </div>
        <div onClick={changeTab} className="episode-span" id="1">
          Show 2 episode
        </div>
        <div onClick={changeTab} className="episode-span" id="2">
          Show 3 episode
        </div>
        <Tab />
      </div>
    </div>
  );
}

function Card() {
  return <div className="card-tile text-danger">ddff</div>;
}

export default App;

