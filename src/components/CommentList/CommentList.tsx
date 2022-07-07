import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <ul
    className="commentList"
  >
    {
      comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))
    }
  </ul>
);
