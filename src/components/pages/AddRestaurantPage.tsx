import { useState, type ChangeEvent } from "react";
import image from "../../assets/images/img4.png";
import Input from "../Input";
import Button from "../Button";
import PageTitle from "./PageTitle";
import Textarea from "../Textarea";
import UploadFile from "../UploadFile";
const AddRestaurantPage = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    description: "",
    image: "",
  });
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    console.log("formValue", formValue);
    e.preventDefault();
    const canSubmit = [formValue].every(Boolean);
    if (!canSubmit) {
      alert("please provide all signup credetials");
      return;
    }
  };
  const onInputChange = (
    e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>
  ) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="">
      <div className="w-full flex h-screen max-h-screen bg-blue-800/10">
        <form onSubmit={onSubmit} className="w-1/2 px-5 py-5 space-y-5">
          <PageTitle title="Add restaurant" />

          <Input
            value={formValue.name}
            onChange={onInputChange}
            id="name"
            name="name"
            type="text"
            placeholder="enter your name"
            label="Name"
          />
          <Textarea
            value={formValue.description}
            onChange={onInputChange}
            id="description"
            name="description"
            type="text"
            placeholder="enter your description"
            label="Description"
            rows={5}
          />
          <UploadFile
            setFormValue={setFormValue}
            id="image"
            name="image"
            type="file"
            accept="image/*"
            placeholder="enter your image"
            label="Upload image"
          />
          <div className="w-full">
            <Button
              title="Add Restaurant"
              type="submit"
              className="hover:bg-blue-800/60"
            />
          </div>
        </form>
        <img
          src={image}
          alt="add restaurant image"
          className="h-screen w-1/2 object-cover"
        />
      </div>
    </div>
  );
};
export default AddRestaurantPage;
