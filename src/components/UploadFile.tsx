import { Trash2, UploadCloud } from "lucide-react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import {
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from "react";

type UploadFileType = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label: string;
  isReversed?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
const UploadFile = ({
  value,
  onChange,
  id,
  name,
  type,
  placeholder,
  ...props
}: UploadFileType) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("invalid file selection");
      return;
    }
    setSelectedFile(URL.createObjectURL(file));

    // onChange(e);
  };
  const cld = new Cloudinary({ cloud: { cloudName: "dlxvm6sxn" } });

  // Use this sample image or upload your own via the Media Library
  const img = cld
    .image("cld-sample-5")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

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
          value={value}
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
            />
            <img
              src={selectedFile}
              className="object-contain w-24 h-24 rounded-lg "
            />
            <AdvancedImage cldImg={img} />
          </div>
        </div>
      )}
    </div>
  );
};
export default UploadFile;
