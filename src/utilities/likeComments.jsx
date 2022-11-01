import axios from 'axios';

const likeComments = async (idComment, idPlayer) => {
  const like = await axios
    .put(`http://localhost:8080/players/${idPlayer}/comments/${idComment}/like`)
    .catch((err) => {
      console.log(err);
    });
  return like;
};

export default likeComments;
