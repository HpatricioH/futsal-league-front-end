import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { previewImageFile } from '../../utilities/imageReader';
import { Image, Transformation } from 'cloudinary-react';
import '../../styles/global/button.css';
import { onePlayer } from '../../recoil/atoms/onePlayer';
import { UpdatePlayerForm } from '../UpdatePlayerForm/UpdatePlayerForm';

const UpdatePlayer = () => {
  const [imageFile] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [formError, setFormError] = useState('');
  const player = useRecoilValue(onePlayer);

  const { id } = useParams();

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, position, weigh, height } = e.target;

    setFormError(false);
    await axios
      .patch(`http://localhost:8080/players/${id}`, {
        name: name.value,
        position: position.value,
        weigh: weigh.value,
        height: height.value,
        image: !previewImage ? player.image : previewImage,
      })
      .then((res) => {
        alert(`Player Updated`);
        history(`/player/${player.player_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageFileChange = (e) => {
    e.preventDefault();

    const imageFile = e.target.files[0];
    previewImageFile(imageFile, setPreviewImage);
  };

  const removePreviewImage = () => {
    setPreviewImage(null);
  };

  return (
    <section
      key={player.player_id}
      className="p-4 flex flex-col justify-center items-center md:pt-10"
    >
      <h2 className="text-4xl pb-4 font-bold text-center leading-snug">
        Update Player <span className="text-sky-600">{player.name}</span>
      </h2>
      <div className=" self-center p-4 border rounded-xl bg-[#cfcfcf1d] shadow-lg shadow-slate-600/50 sm:w-[25rem] xl:w-[30rem]">
        <div className=" items-center py-4 w-[15rem] sm:m-[auto] md:w-[18rem]">
          <Image
            cloudName="dase1w9ff"
            publicId={player?.image}
            className="drop-shadow-[0_2px_8px_rgba(59,57,57,0.8)] rounded-2xl"
            alt="player photo"
          >
            <Transformation crop="scale" />
          </Image>
        </div>
        <UpdatePlayerForm
          player={player}
          handleSubmit={handleSubmit}
          handleImageFileChange={handleImageFileChange}
          removePreviewImage={removePreviewImage}
          imageFile={imageFile}
          formError={formError}
          previewImage={previewImage}
        />
      </div>
    </section>
  );
};

export default UpdatePlayer;
