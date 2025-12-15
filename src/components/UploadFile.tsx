import { Trash2, UploadCloud } from "lucide-react";

import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type InputHTMLAttributes,
  type SetStateAction,
} from "react";
import { uploadToCloudinary } from "../utils";

type UploadFileType = {
  setFormValue: Dispatch<
    SetStateAction<{ image: string; name: string; description: string }>
  >;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label: string;
  isReversed?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
const UploadFile = ({
  setFormValue,
  id,
  name,
  type,
  placeholder,
  ...props
}: UploadFileType) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("invalid file selection");
      return;
    }
    setSelectedFile(URL.createObjectURL(file));
    const url = await uploadToCloudinary(file);
    setFormValue((prev) => ({ ...prev, [e.target.name]: url }));
  };

  return (
    <div className="flex w-full items-center">
      <div
        className={`flex-1 h-24 flex rounded-lg border-2 border-blue-800/40 focus:outline-blue-800 px-2 items-center justify-center`}
      >
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center"
        >
          <UploadCloud size={44} />
          <p>upload logo: png, jpg 2mb</p>
        </label>
        <input
          {...props}
          onChange={handleChange}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`rounded-lg border-2 border-blue-800/40 focus:outline-blue-800 px-2 hidden`}
        />
      </div>
      {selectedFile && (
        <div className="flex flex-1 object-contain h-24 rounded-lg items-center justify-center">
          <div className="w-24 h-24 relative">
            <Trash2
              size={16}
              className="absolute top-2 right-2 text-red-600 z-50"
              onClick={() => setSelectedFile(null)}
            />
            <img
              src={selectedFile}
              className="object-contain w-24 h-24 rounded-lg "
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default UploadFile;
