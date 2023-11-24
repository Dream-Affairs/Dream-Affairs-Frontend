import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { uploadImage } from '../apis/Api';

export interface ImageUploadResult {
  ImageUrl: string | null;
  error: string | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleImageClick: () => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadProgress: number;
}

export const useImageUpload = (): ImageUploadResult => {
  const [ImageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check file type
      if (!file.type.startsWith('image/jpeg') && !file.type.startsWith('image/png')) {
        // Invalid file type
        setError('Invalid file type. Please upload a JPEG or PNG image.');
      } else {
        // Clear previous errors
        setError(null);

        try {
          const formData = new FormData();
          formData.append('file', file);

          console.log('Uploading file:', file); // Log the file being uploaded

          const ImageUrl = await uploadImage(formData, (progress) => setUploadProgress(progress));

          setImageUrl(ImageUrl);
          console.log('Agboola Agbeniga Hardcoded this:', ImageUrl);
        } catch (uploadError) {
          console.error('Error uploading image:', uploadError);
          setError('Error uploading image. Please try again.');
        }
      }
    }
  };

  return { ImageUrl, error, fileInputRef, handleImageClick, handleFileChange, uploadProgress };
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

export interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<any>;
}

export const useForm = <T extends Record<string, any>>({ initialValues, onSubmit }: UseFormProps<T>) => {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const [formError, setformError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log('Form Submission Data:', formValues);

    try {
      await onSubmit(formValues);
      // Handle success, redirect, or display success message
      console.log('Form submitted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, display an error message, etc.
      setformError('Failed to submit the form. Please try again.');
    }
  };

  return {
    formValues,
    formError,
    handleInputChange,
    handleSubmit,
  };
};
