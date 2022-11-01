import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/global/button.css';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userData } from '../../recoil/atoms/userData';

const AddPlayerComment = ({ fetchPlayer }) => {
  const { id } = useParams();
  const user = useRecoilValue(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = user.user_name;
    const comment = e.target.userComment.value;

    if (!comment) {
      alert(`Please fill out the comment section`);
    } else {
      await axios
        .post(`http://localhost:8080/players/${id}/comments`, {
          name: name,
          comment: comment,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    e.target.reset();
    fetchPlayer();
  };

  useEffect(() => {
    fetchPlayer();
  }, [fetchPlayer]);

  return (
    <form
      name="enterComment"
      method="POST"
      className="flex flex-col w-full pb-4"
      onSubmit={handleSubmit}
    >
      <label className="text-[#6b7290] py-2 font-extrabold">Comment</label>
      <div className="flex flex-col w-full pb-4">
        <textarea
          name="userComment"
          placeholder="Add a new comment "
          className="resize-none p-2 h-[5.7rem] mt-[0.25rem] mb-[1rem] rounded border-solid border-2 border-gray-300 focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-500"
        ></textarea>
        <button className="btn__secondary sm:w-[12rem] sm:self-end">
          Comment
        </button>
      </div>
    </form>
  );
};

export default AddPlayerComment;
