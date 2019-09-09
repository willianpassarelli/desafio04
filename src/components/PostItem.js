import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <div className="circular-portrait">
        <img src={author.avatar} />
      </div>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComment({ comments }) {
  return (
    <div className="post-comment">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <div className="circular-portrait">
            <img src={comment.author.avatar} />
          </div>
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComment comments={comments} />
    </div>
  );
}

export default PostItem;
