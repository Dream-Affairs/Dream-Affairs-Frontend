import { ChangeEvent, useRef, useState } from 'react';

export interface ImageUploadResult {
  image: string | null;
  error: string | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleImageClick: () => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useImageUpload = (): ImageUploadResult => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check file type
      if (!file.type.startsWith('image/jpeg') && !file.type.startsWith('image/png')) {
        // Invalid file type
        setError('Invalid file type. Please upload a JPEG or PNG image.');
      } else {
        // Clear previous errors
        setError(null);

        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return { image, error, fileInputRef, handleImageClick, handleFileChange };
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
