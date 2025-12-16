import { Link } from "react-router";
import Button from "../Button";
import Input from "../Input";
import { useState, type ChangeEvent, type FormEvent } from "react";
import PageTitle from "./PageTitle";

const SigninpPage = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    terms: "",
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const canSubmit = [formValue].every(Boolean);
    if (!canSubmit) {
      alert("please provide all signin credetials");
      return;
    }
    console.log("submitting to db", formValue);
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-blue-800/10 inset-0 flex flex-col justify-center items-center h-screen">
      <div
        className="flex flex-col w-md h-3/4 rounded-lg shadow-xs bg-gray-900 shadow-black
       text-white items-center px-4 py-4 "
      >
        <PageTitle title=" Sign In" />

        <form
          className="w-full px-5 py-2 flex flex-col gap-y-5 items-center"
          onSubmit={onSubmit}
        >
          <Input
            value={formValue.email}
            onChange={onInputChange}
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
            label="Email"
          />
          <Input
            value={formValue.password}
            onChange={onInputChange}
            id="password"
            name="password"
            type="password"
            placeholder="enter your password"
            label="Password"
          />
          <Input
            value={formValue.terms}
            onChange={onInputChange}
            id="terms"
            name="terms"
            type="checkbox"
            className="accent-blue-800 h-4 w-4"
            label="Remind me"
            isReversed
          />

          <div className="flex justify-between items-center w-full">
            <Link to={"/auth/forgot-password"} className="text-blue-800">
              forgot password
            </Link>
            <Link to={"/auth/privacy-policy"} className="text-blue-800">
              privacy policy
            </Link>
          </div>
          <p>
            Haven't created account?
            <Link to={"/auth/sign-up"} className="text-blue-800 px-2">
              sign up
            </Link>
          </p>
          <div className="w-full">
            <Button title="Sign in" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninpPage;
