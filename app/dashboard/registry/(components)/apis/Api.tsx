import axios, { AxiosRequestConfig } from 'axios';

const apiBaseUrl = 'https://dev.api.dreamaffairs.mooo.com/api/v1';
const memberId = '9174b84cf01f49a4ab26a79e736fbdff';

export const uploadImage = async (formData: FormData, onUploadProgress: (progress: number) => void) => {
  const apiUrl = `${apiBaseUrl}/files/upload-image?member_id=${memberId}`;

  try {
    const options: AxiosRequestConfig = {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent: any) => {
        const percentage = (progressEvent.loaded * 100) / progressEvent.total;
        onUploadProgress(+percentage.toFixed(2));
      },
    };

    const uploadImageResponse = await axios.post(apiUrl, formData, options);
    return uploadImageResponse.data.data.product_image_url;
  } catch (error) {
    throw error;
  }
};

export const addProductGift = async (formData: any) => {
  const addProductApi = `${apiBaseUrl}/registry/add-product-gift?member_id=${memberId}`;
  try {
    const addProductResponse = await axios.post(addProductApi, formData);
    return addProductResponse.data;
  } catch (error) {
    throw error;
  }
};
