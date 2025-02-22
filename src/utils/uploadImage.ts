const uploadImage = async (imageFile: File) => {
  const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_KEY}`;
  let newImageUrl = null;
  const formData = new FormData();

  formData.append("image", imageFile);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const imgData = await res.json();

    if (imgData.success) {
      newImageUrl = imgData.data.display_url;
    } else {
      // console.error("Error from imgbb:", imgData.error.message);
    }
  } catch (err) {
    confirm(JSON.stringify(err));
  }

  return newImageUrl;
};

export default uploadImage;
