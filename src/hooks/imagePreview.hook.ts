"use client";

import { useState } from "react";

const useImagePreview = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
      setImage(file);
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setAvatarPreview(null);
    setImage(null);
  };

  return {
    handleAvatarChange,
    handleRemoveImage,
    avatarPreview,
    image,
  };
};

export default useImagePreview;
