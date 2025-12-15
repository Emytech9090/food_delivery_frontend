import Button from "./Button";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Button title="sign up" path="/auth/sign-up" />
      <Button title="sign in" path="/auth/sign-in" />
    </div>
  );
};
export default AuthButtons;
