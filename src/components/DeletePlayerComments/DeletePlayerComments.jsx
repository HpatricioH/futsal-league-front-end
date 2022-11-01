import deleteIcon from '../../assets/icons/delete_icon.svg';
import axios from 'axios';
import { useEffect } from 'react';

export const DeletePlayerComments = ({
  commentId,
  fetchPlayer,
  id,
  user,
  commentName,
}) => {
  const deleteHandler = async (e) => {
    e.preventDefault();
    await axios
      .delete(
        `http://localhost:8080/players/${parseInt(id)}/comments/${commentId}`
      )
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchPlayer();
  };

  useEffect(() => {
    fetchPlayer();
  }, [fetchPlayer]);

  return commentName === user.user_name || user.role === 'admin' ? (
    <button onClick={deleteHandler}>
      <img src={deleteIcon} alt="delete icon" />
    </button>
  ) : null;
};
