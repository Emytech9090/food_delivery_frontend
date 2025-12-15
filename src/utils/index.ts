import axios from "axios";
import { config as cfg } from "../config";

export const uploadToCloudinary = async (file:File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cfg.cloudinaryUploadPreset);
//   formData.append("api_secret", cfg.cloudinaryApiKey);
const url=`https://api.cloudinary.com/v1_1/${cfg.cloudinaryCloudName}/image/upload`
  
  const {data}=await axios.post(url,formData)
console.log('data', JSON.stringify(data))
  return data.secure_url; // image URL
};
