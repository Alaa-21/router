import React, { Fragment } from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  let { quoteId } = useParams();
  console.log(<Comments />);
  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <h2>{quoteId}</h2>

      <Routes>
        <Route path={`/quotes/${quoteId}/comments`} element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
