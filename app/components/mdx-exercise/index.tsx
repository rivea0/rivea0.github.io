'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './mdx-exercise.module.css';

// For now, only binary options: a or b
export default function MDXExercise({
  correctAnswer,
  children,
}: {
  correctAnswer?: 'a' | 'b';
  children: React.ReactNode;
}) {
  const [givenAnswer, setGivenAnswer] = useState('');
  const [optionA, optionB, answerFragment] = [
    children[0],
    children[1],
    children[2],
  ];

  return (
    <div className={styles.exerciseSection}>
      <div className={styles.options}>
        <MDXExerciseOption
          onClick={() => setGivenAnswer('a')}
          content={optionA}
          isSelected={givenAnswer === 'a'}
          isCorrect={correctAnswer ? correctAnswer === 'a' : null}
        ></MDXExerciseOption>
        <div className={styles.vs}>vs.</div>
        <MDXExerciseOption
          onClick={() => setGivenAnswer('b')}
          content={optionB}
          isSelected={givenAnswer === 'b'}
          isCorrect={correctAnswer ? correctAnswer === 'b' : null}
        ></MDXExerciseOption>
      </div>
      <MDXExerciseAnswerBox
        isAnswerChosen={!!givenAnswer}
        answerFragment={answerFragment}
        correctAnswerChosen={givenAnswer === correctAnswer}
      />
    </div>
  );
}

function MDXExerciseOption({
  onClick,
  content,
  isSelected,
  isCorrect,
}: {
  onClick: () => void;
  content: React.ReactNode;
  isSelected: boolean;
  isCorrect: boolean | null;
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        styles.optionBlock,
        isSelected && isCorrect && styles.correctOption,
        isSelected && !isCorrect && styles.incorrectOption
      )}
    >
      {content}
    </div>
  );
}

function MDXExerciseAnswerBox({
  isAnswerChosen,
  answerFragment,
  correctAnswerChosen,
}: {
  isAnswerChosen: boolean;
  answerFragment: React.ReactNode;
  correctAnswerChosen: boolean;
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.answerBox}>
      <div className={styles.mysteryBox}>
        <button
          type="button"
          className={clsx(
            styles.showAnswerBtn,
            (showAnswer || isAnswerChosen) && styles.hideShowAnswerBtn
          )}
          onClick={() => setShowAnswer(true)}
        >
          Show me the answer!
        </button>
      </div>
      <div className={styles.mysteryBox}>
        <div
          className={clsx(
            showAnswer || isAnswerChosen ? styles.removeBlur : styles.addBlur
          )}
        >
          <div className={clsx(styles.answerInfoHeader)}>
            <p>
              {!isAnswerChosen
                ? ''
                : correctAnswerChosen
                ? '🎉 CORRECT'
                : '❌ INCORRECT'}
            </p>
          </div>

          {answerFragment}
        </div>
      </div>
    </div>
  );
}
