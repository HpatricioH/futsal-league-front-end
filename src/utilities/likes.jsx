import axios from 'axios';

const likes = async (id) => {
  const like = await axios
    .put(`http://localhost:8080/players/${id}/like`)
    .catch((err) => {
      console.log(err);
    });
  return like;
};

export default likes;
