import { useState } from 'react';

enum ImageFileType {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
}

export interface ImageUploadResult {
  image: string | null;
  error: string | null;
  clearImage: () => void;
  handleImageChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const useImageUpload = (): ImageUploadResult => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const clearImage = () => {
    setImage(null);
    setError(null);
  };

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check file type using enum
      const validTypes = [ImageFileType.JPEG, ImageFileType.PNG];
      if (!validTypes.includes(file.type as ImageFileType)) {
        setError('Invalid file type. Please upload a JPEG or PNG image.');
        clearImage();
        return;
      }

      // Clear previous errors
      setError(null);

      // Read and display the selected image
      const reader = new FileReader();
      reader.onload = () => {
        // Ensure the result is a string
        const result = reader.result as string;
        setImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return { image, error, clearImage, handleImageChange };
};

export const useLimitedTextInput = (initialValue: string, maxLength: number) => {
  const [text, setText] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;

    // Limit the input to the specified maxLength
    const limitedText = inputText.slice(0, maxLength);

    setText(limitedText);
  };

  return { text, handleChange };
};
