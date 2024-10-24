import { SmallWindow } from "../../Components/SmallWindow/SmallWindow";
import { AccountForm } from "../../Components/AccountForm/AccountForm";
import { FooterFormLink } from "../../Components/FooterFormLink/FooterFormLink";
import { FormButton } from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { FormAccept } from "../../Components/FormAccept/FormAccept";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/api/api";
import { getFetchParam } from "./func";

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <SmallWindow>
      <AccountForm
        getFethParam={getFetchParam}
        header="Create new account"
        handler={handleSubmit}
        fetch={useCreateUserMutation}
      >
        <Input
          autocomplete="username"
          name="username"
          type="text"
          placeholder="Username"
          header="Username"
          error={errors}
          register={register}
          options={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username must be at most 20 characters",
            },
          }}
        />
        <Input
          name="email"
          error={errors}
          type="email"
          placeholder="Email address"
          header="Email address"
          register={register}
          options={{
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Invalid email address",
            },
          }}
        />
        <Input
          autocomplete="new-password"
          name="password"
          error={errors}
          type="password"
          placeholder="Password"
          header="Password"
          register={register}
          options={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 40,
              message: "Password must be at most 40 characters",
            },
          }}
        />
        <Input
          autocomplete="new-password"
          name="repeatPassword"
          error={errors}
          type="password"
          placeholder="Repeat password"
          header="Repeat password"
          register={register}
          options={{
            required: "Repeat password is required",
            validate: (value) => value === password || "Passwords mast match",
          }}
        />
        <FormAccept
          error={errors}
          register={register}
          options={{ required: "Accept is required" }}
        />
        <FormButton buttonText="Create" />
        <FooterFormLink
          to="/sign-in"
          linkText="Sign In"
          footerText="Already have an account?"
        />
      </AccountForm>
    </SmallWindow>
  );
};
