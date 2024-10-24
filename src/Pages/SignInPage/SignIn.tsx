import { useForm } from "react-hook-form";
import { AccountForm } from "../../Components/AccountForm/AccountForm";
import { FooterFormLink } from "../../Components/FooterFormLink/FooterFormLink";
import { FormButton } from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { SmallWindow } from "../../Components/SmallWindow/SmallWindow";
import { useLoginUserMutation } from "../../redux/api/api";
import { getFetchParam } from "./func";

export const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <SmallWindow>
      <AccountForm
        getFethParam={getFetchParam}
        header="Sign In"
        handler={handleSubmit}
        fetch={useLoginUserMutation}
      >
        <Input
          autocomplete="email"
          name="email"
          error={errors}
          type="text"
          placeholder="Email address"
          header="Email address"
          register={register}
        />
        <Input
          autocomplete="current-password"
          name="password"
          error={errors}
          type="text"
          placeholder="Password"
          header="Password"
          register={register}
        />
        <FormButton buttonText="Sign In" />
        <FooterFormLink
          to="/sign-up"
          linkText="Sign Up"
          footerText="Don't have an account?"
        />
      </AccountForm>
    </SmallWindow>
  );
};
