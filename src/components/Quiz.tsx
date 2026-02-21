"use client";
import { useState } from "react";
import { saveQuizScore } from "@/lib/progress";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

interface QuizProps {
  topicId: string;
  questions: QuizQuestion[];
}

export default function Quiz({ topicId, questions }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [xpGained, setXpGained] = useState(0);

  if (questions.length === 0) return null;

  const q = questions[current];

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setAnswered(true);
    if (selected === q.answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      const finalScore = score + (selected === q.answer ? 0 : 0);
      const xp = saveQuizScore(topicId, finalScore, questions.length);
      setXpGained(xp);
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setXpGained(0);
  };

  if (finished) {
    return (
      <div className="quiz">
        <div className="quiz-result">
          <div className="quiz-result-score">
            {score}/{questions.length}
          </div>
          <div className="quiz-result-text">
            {score === questions.length
              ? "🎉 Perfect! You nailed it!"
              : score >= questions.length * 0.7
                ? "👏 Great job!"
                : "💪 Keep practicing!"}
          </div>
          {xpGained > 0 && (
            <div className="quiz-result-xp">+{xpGained} XP earned!</div>
          )}
          <br />
          <button className="quiz-btn" onClick={handleRetry}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <div className="quiz-progress">
          Question {current + 1} of {questions.length}
        </div>
        <div className="quiz-score">Score: {score}</div>
      </div>
      <div className="quiz-question">{q.question}</div>
      <div className="quiz-options">
        {q.options.map((opt, idx) => {
          let cls = "quiz-option";
          if (answered && idx === q.answer) cls += " correct";
          else if (answered && idx === selected) cls += " wrong";
          else if (!answered && idx === selected) cls += " selected";
          return (
            <div key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <div className="quiz-option-marker">
                {answered && idx === q.answer
                  ? "✓"
                  : answered && idx === selected
                    ? "✗"
                    : String.fromCharCode(65 + idx)}
              </div>
              <span>{opt}</span>
            </div>
          );
        })}
      </div>
      {!answered ? (
        <button
          className="quiz-btn"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Check Answer
        </button>
      ) : (
        <button className="quiz-btn" onClick={handleNext}>
          {current + 1 >= questions.length ? "See Results" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
