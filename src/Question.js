import React, { useCallback, useContext, useEffect, useState } from "react";
import { BreadCrumb } from "./BreadCrumb";
import ProgressBar from "./Progressbar";
import { questions } from "./QuestionBank";
import { MyContext } from ".";

export const Question = (prop) => {
  const { state, setState } = useContext(MyContext);
  const [selected, setSelected] = useState();
  const [nextLoading, setNextLoading] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    const qs = questions.slice(0, 5);
    setState({
      ...state,
      questions: qs,
      question: qs[0],
      seq: 1,
      total: parseInt(localStorage.getItem("total") || "2"),
    });
  }, [state.category, state.tech]);

  const confirm = useCallback(() => {
    if (timedOut || incorrect) return;

    if (selected) {
      if (selected == state.question.correct_answer) {
        const qs = state.questions.slice(1, Infinity);
        if (state.total == state.seq) {
          setState({ congrats: true });
          return;
        }
        setState({
          ...state,
          seq: state.seq + 1,
          question: qs[0],
          questions: qs,
        });

        setNextLoading(true);
        setSelected(null);
        setTimeout(() => {
          setNextLoading(false);
        }, 1500);
      } else {
        setIncorrect(true);
        setTimeout(() => {
          //setState({});
        }, 5000);
      }
    } else {
      setTimedOut(true);
      setTimeout(() => {
        //setState({});
      }, 5000);
    }
  }, [selected, timedOut, incorrect]);

  if (!state.question) return <></>;
  return (
    <>
      {!nextLoading && (
        <>
          <BreadCrumb />
          <ProgressBar
            timeOver={confirm}
            secs={parseInt(localStorage.getItem("time") || "60")}
          />
        </>
      )}

      <div className="questions">
        <div className="question">
          <pre>{state.question.question}</pre>
        </div>
        <div className="answer">
          <div
            className={
              "option " +
              (state.question.options[0] == selected ? "selected" : "")
            }
            onClick={() => setSelected(state.question.options[0])}
          >
            <span> A)</span> <pre>{state.question.options[0]}</pre>
          </div>
          <div
            className={
              "option " +
              (state.question.options[1] == selected ? "selected" : "")
            }
            onClick={() => setSelected(state.question.options[1])}
          >
            <span>B)</span> <pre>{state.question.options[1]}</pre>
          </div>
          <div
            className={
              "option " +
              (state.question.options[2] == selected ? "selected" : "")
            }
            onClick={() => setSelected(state.question.options[2])}
          >
            <span>C)</span> <pre>{state.question.options[2]}</pre>
          </div>
          <div
            className={
              "option " +
              (state.question.options[3] == selected ? "selected" : "")
            }
            onClick={() => setSelected(state.question.options[3])}
          >
            <span>D)</span> <pre>{state.question.options[3]}</pre>
          </div>

          <div className="btn-container">
            <button className="btn" onClick={confirm}>
              Confirm Selection
            </button>
          </div>
        </div>
      </div>

      {nextLoading && (
        <div className="good-job">
          <div>
            <h1>Good Job... </h1>
            <span>Loading Next Question...</span>
          </div>
        </div>
      )}

      {timedOut && (
        <div className="good-job">
          <div>
            <h1 className="timedout">Timedout... </h1>
          </div>
        </div>
      )}

      {incorrect && (
        <div className="good-job">
          <div>
            <h1 className="timedout">Incorrect Answer... </h1>
          </div>
        </div>
      )}
    </>
  );
};
