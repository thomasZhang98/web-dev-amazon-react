import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useProfile} from "../../../contexts/profile-context";

const Cm = ({ comments, addComment }) => {
    const {profile} = useProfile();
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
              {comments && comments.length !== 0 ?
                  comments.map(comment => <li className="list-group-item"><Link to={`/profile${profile._id === comment.buyerID ? '' : '/' + comment.buyerID}`} className="fw-bold"><div>{comment.userName}:</div></Link>{comment.comment}</li>) :
                  <h5>No comments</h5>}
          </div>
        </div>
    );
  };
  export default Cm;