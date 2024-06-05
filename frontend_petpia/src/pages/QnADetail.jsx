import React from "react";
import { Link } from "react-router-dom";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";
import "./QnADetail.scss";

// sampleQuestionData.js
export const sampleQuestion = {
  title: "볼마운트 볼 사이즈가 어떻게 되나요?",
  author: "mugu****",
  date: "2024-04-30",
  content:
    "저는 새로운 볼마운트를 구매하려고 하는데, 볼 사이즈가 어떻게 되는지 알고 싶습니다. 볼마운트와 함께 제공되는 볼의 크기와 호환되는 볼 크기에 대해 설명해 주실 수 있나요?",
  status: "답변완료",
  answer: {
    author: "admin",
    date: "2024-04-30",
    content:
      "안녕하세요, 고객님. 볼마운트와 함께 제공되는 볼의 크기는 3cm입니다. 추가로 호환되는 볼 크기는 2cm에서 4cm까지입니다. 도움이 되셨길 바랍니다.",
  },
};

const QnADetail = () => {
  const question = sampleQuestion;

  return (
    <Grid>
      <Column span={2}></Column>
      <Column span={8}>
        <h1 className="qna-title">{question.title}</h1>
        <div className="question-meta">
          <span>{question.author}</span>
          <span>|</span>
          <span>{question.date}</span>
        </div>
        <div className="question-content">
          <p>{question.content}</p>
        </div>
      </Column>
      <Column span={2}></Column>
      <Column span={2}></Column>
      <Column span={8}>
        <div className="answer-section">
          {question.answer ? (
            <>
              <h2>답변</h2>
              <div className="answer-meta">
                <span>{question.answer.author}</span>
                <span>|</span>
                <span>{question.answer.date}</span>
              </div>
              <div className="answer-content">
                <p>{question.answer.content}</p>
              </div>
            </>
          ) : (
            <p>답변이 아직 등록되지 않았습니다.</p>
          )}
        </div>
      </Column>
      <Column span={2}></Column>
      <Column span={2}></Column>
      <Column span={2}>
        <div className="navigation">
          <Link to="/qna">Q&A 목록으로 돌아가기</Link>
          {/* 이전/다음 질문 링크 추가 가능 */}
        </div>
      </Column>
    </Grid>
  );
};

export default QnADetail;
