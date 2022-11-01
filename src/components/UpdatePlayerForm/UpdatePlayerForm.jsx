import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../utilities/Spinner';
import closeIcon from '../../assets/icons/close_black.svg';

export const UpdatePlayerForm = ({
  player,
  handleSubmit,
  handleImageFileChange,
  removePreviewImage,
  imageFile,
  formError,
  previewImage,
}) => {
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    history(`/player/${player.player_id}`);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="block text-[#6b7290] text-lg font-semibold mb-3">
        Name
      </label>
      <input
        type="text"
        name="name"
        defaultValue={player.name}
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label className="block text-[#6b7290] text-lg font-semibold mb-3">
        Position
      </label>
      <input
        type="text"
        name="position"
        defaultValue={player.position}
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label className="block text-[#6b7290] text-lg font-semibold mb-3">
        Weigh
      </label>
      <input
        type="text"
        name="weigh"
        defaultValue={player.weigh}
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label className="block text-[#6b7290] text-lg font-semibold mb-3">
        Height
      </label>
      <input
        type="text"
        name="height"
        defaultValue={player.height}
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label className="block text-[#6b7290] text-lg font-semibold mb-3">
        Image
      </label>
      {previewImage && (
        <div className="flex flex-col w-[15rem] border relative">
          <img
            src={closeIcon}
            alt="close icon"
            className="w-[1.5rem] self-end cursor-pointer m-2 absolute"
            onClick={removePreviewImage}
          />
          <img src={previewImage} alt="uploaded file"></img>
        </div>
      )}

      <label
        className="btn__secondary w-[8.8rem] cursor-pointer my-4"
        htmlFor="imageFile"
      >
        Choose File
      </label>
      <input
        type="file"
        name="image"
        id="imageFile"
        className="hidden"
        onChange={handleImageFileChange}
        value={imageFile}
      />
      <button className="btn__primary mb-3">
        {formError === false ? <Spinner /> : <span>Update Player</span>}
      </button>
      <button className="btn__cancel mb-3" onClick={handleClick}>
        Cancel
      </button>
    </form>
  );
};
