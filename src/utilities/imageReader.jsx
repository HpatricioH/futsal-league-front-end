/**
 * image reader for upload functionality, set the preview image state read image data to upload.
 * function to be reusable any where upload an image is required
 */
export const previewImageFile = (imageFile, setPreviewImage) => {
  const imageReader = new FileReader();

  imageReader.readAsDataURL(imageFile);
  imageReader.onloadend = () => {
    setPreviewImage(imageReader.result);
  };
};
