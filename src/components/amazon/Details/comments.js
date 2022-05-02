import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CommentList = ({comments}) => {
    console.log(comments)
  if (comments) {
    return (
        <>
        {comments.map(comment => <div>{comment.comment}</div>)}
        </>
    )
  } else {
    return (<span>No comments</span>)
  }
};

const Cm = ({ comments, addComment }) => {
    const [comment, setComment] = useState();
    const handleClick = () => {
      addComment(comment);
      document.getElementById('comment').value = "";
    }

    return (
        <div>
          <div>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                id="comment"
                className="form-control"/>
            <button onClick={handleClick} className="btn btn-primary mt-2">Comment</button>
          </div>

          <h5 className="list-group mt-3">Comments:</h5>
          <div className="mt-2">
              {comments.length !== 0 ?
                  comments.map(comment => <li className="list-group-item"><Link to={`/profile/${comment.buyer_id}`} className="fw-bold"><div>{comment.userName}:</div></Link>{comment.comment}</li>) :
                  <h5>No comments</h5>}
          </div>
        </div>
    );
  };
  export default Cm;