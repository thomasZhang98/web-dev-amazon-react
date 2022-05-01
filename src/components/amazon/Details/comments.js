import React, { useState } from 'react';

const CommentList = ({ comments }) => {
  return <div>{comments && comments.map((comment) => <li>{comment}</li>)}</div>;
};

const Cm = () => {
  const [comments, setComments] = useState([]);
  const [data, setData] = useState();

  const addComment = () => {
    setComments([...comments, data]);
  };

  return (
      <div>
        <div>
        <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
        ></textarea>
          <button onClick={addComment}>Comment</button>
        </div>
        <div>
          <CommentList comments={comments} />
        </div>
      </div>
  );
};
export default Cm;