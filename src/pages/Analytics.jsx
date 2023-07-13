import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages.css';

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/comments'); // Replace with your API endpoint
        setComments(response.data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <div className="comment-avatar">{comment.user.username.charAt(0)}</div>
          <div className="comment-content">
            <div className="comment-author">{comment.user.username}</div>
            <div className="comment-body">{comment.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
