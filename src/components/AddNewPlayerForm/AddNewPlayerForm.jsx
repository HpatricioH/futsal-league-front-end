import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../utilities/Spinner';
import closeIcon from '../../assets/icons/close_black.svg';
import '../../styles/global/forms.css';

export const AddNewPlayerForm = ({
  handleSubmit,
  player,
  previewImage,
  removePreviewImage,
  handleImageFileChange,
  imageFile,
  formError,
  errorMessage,
}) => {
  const history = useNavigate();

  const handleClickCancel = (e) => {
    e.preventDefault();
    history(`/team/${player.idteams}`);
  };

  return (
    <form
      className="flex flex-col [&_input]:form__input focus:[&_input]:outline-none focus:[&_input]:shadow-outline"
      onSubmit={handleSubmit}
    >
      <div className="[&_label]:form__label">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Position</label>
        <input type="text" name="position" />
        <div className="flex flex-col sm:flex-row sm:gap-[4rem]">
          <div>
            <label>Weigh</label>
            <input type="text" name="weigh" />
          </div>
          <div>
            <label>Height</label>
            <input type="text" name="height" />
          </div>
        </div>
        <label>Team</label>
        <select
          name="teams"
          id="teams"
          className="form__input focus:outline-none focus:shadow-outline"
        >
          <option value={player.idteams} name="team">
            {player.name}
          </option>
        </select>
        <label>Image</label>
        {previewImage && (
          <div className="flex flex-col w-[15rem] border relative">
            <img
              src={closeIcon}
              alt="close icon"
              className="w-[1.5rem] self-end cursor-pointer m-2 absolute"
              onClick={removePreviewImage}
            />
            <img src={previewImage} alt="uploaded file" className="h-[12rem]" />
          </div>
        )}
      </div>

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

      {formError === true ? (
        <span className="text-[#bd0000] text-xs pt-2">{errorMessage}</span>
      ) : null}

      <button className="btn__primary mb-3">
        {formError === false ? <Spinner /> : <span>Create Player</span>}
      </button>
      <button className="btn__cancel mb-3" onClick={handleClickCancel}>
        Cancel
      </button>
    </form>
  );
};
