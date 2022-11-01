import { useNavigate } from 'react-router-dom';
import { teams } from '../../recoil/atoms/teams';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import axios from 'axios';
import '../../styles/global/button.css';
import { AddNewPlayerForm } from '../AddNewPlayerForm/AddNewPlayerForm';

const AddNewPlayer = () => {
  const [imageFile] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [player, setPlayer] = useRecoilState(teams);
  const [formError, setFormError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, position, weigh, height, teams } = e.target;

    if (!name.value) {
      e.target.name.classList.add('border-red-500');
    }
    if (!position.value) {
      e.target.position.classList.add('border-red-500');
    }
    if (!weigh.value) {
      e.target.weigh.classList.add('border-red-500');
    }
    if (!height.value) {
      e.target.height.classList.add('border-red-500');
    }

    try {
      if (name && position && weigh && height) {
        setFormError(false);
        await axios
          .post('http://localhost:8080/players/', {
            name: name.value,
            position: position.value,
            image: previewImage,
            weigh: weigh.value,
            height: height.value,
            teams: {
              id: parseInt(teams.value),
            },
          })
          .then((res) => {
            setPlayer(res.data);
            history(`/team/${player.idteams}`);
          })
          .catch((error) => {
            if (error.response.status === 400) {
              setFormError(true);
              setErrorMessage(error.response.data.errorDetails);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // When the user selects an image file preview the image file.
  const handleImageFileChange = (e) => {
    e.preventDefault();

    const imageFile = e.target.files[0];
    previewImageFile(imageFile);
  };

  /**
   * When the imageReader has finished reading the imageFile, set the previewImage to the result of the
   * imageReader.
   */
  const previewImageFile = (imageFile) => {
    const imageReader = new FileReader();

    imageReader.readAsDataURL(imageFile);
    imageReader.onloadend = () => {
      setPreviewImage(imageReader.result);
    };
  };

  const removePreviewImage = () => {
    setPreviewImage(null);
  };

  return (
    <>
      <section className="p-4 flex flex-col justify-center items-center md:pt-10">
        <h2 className="text-4xl pb-4 font-bold">Add New Player</h2>
        <div className=" p-4 border rounded-xl bg-[#cfcfcf1d] shadow-lg shadow-slate-600/50 sm:w-[25rem] xl:w-[30rem]">
          <AddNewPlayerForm
            handleSubmit={handleSubmit}
            player={player}
            previewImage={previewImage}
            removePreviewImage={removePreviewImage}
            handleImageFileChange={handleImageFileChange}
            imageFile={imageFile}
            formError={formError}
            errorMessage={errorMessage}
          />
        </div>
      </section>
    </>
  );
};

export default AddNewPlayer;
