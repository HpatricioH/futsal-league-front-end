import { useRecoilValue } from 'recoil';
import { onePlayer } from '../../recoil/atoms/onePlayer';
import { useParams } from 'react-router-dom';
import likeComments from '../../utilities/likeComments';
import thumbIcon from '../../assets/icons/thumb_up_black_24dp.svg';
import { formatTime } from '../../utilities/relativeDate';
import { DeletePlayerComments } from '../DeletePlayerComments/DeletePlayerComments';

const PlayerComments = ({ fetchPlayer, user }) => {
  const player = useRecoilValue(onePlayer);

  const { id } = useParams();

  const handleClick = async (idComment) => {
    await likeComments(idComment, parseInt(id));
    fetchPlayer();
  };

  return player?.comments?.map((comment) => {
    const newDate = Date.parse(comment.timestamp);

    return (
      <section
        key={comment.idcomments}
        className="flex border-t-[0.063rem] border-b-[0.063rem] py-[1rem] w-full"
      >
        <div className="relative flex flex-col w-full">
          <p className="text-md font-bold pb-2">{comment.name}</p>
          <p className="text-[#6b7290]">{comment.comment}</p>
          <p className="absolute self-end">{formatTime(newDate)}</p>
          <div className="flex justify-end gap-1 pt-3">
            <p>{comment.likes}</p>
            <button onClick={() => handleClick(comment.idcomments)}>
              <img
                className="w-5 self-center"
                src={thumbIcon}
                alt="like icon"
              />
            </button>
            <DeletePlayerComments
              commentId={comment.idcomments}
              fetchPlayer={fetchPlayer}
              id={id}
              user={user}
              commentName={comment.name}
            />
          </div>
        </div>
      </section>
    );
  });
};

export default PlayerComments;
