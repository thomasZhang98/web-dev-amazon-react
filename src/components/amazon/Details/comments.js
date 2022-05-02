import React, {useState} from 'react';

const CommentList = ({comments}) => {
 
  if (comments) {
    return (
        <>
        {comments?.map(comment => <div>{comment.comment}</div>)}
       
        </>
    )
  } else {
    return (<span>No comments</span>)
  }
};


const Cm = ({ comments, addComment }) => {
  const [comment, setComment] = useState();

  function handleClick(e) {
    addComment(comment)
  }



    return (
        <div>
          <div>

        <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
            <button onClick={handleClick}>Comment</button>
          </div>
          <div>

            <CommentList comment={comments}/>

          </div>
        </div>
    );
  };
  export default Cm;