import { AccountForm } from "../../Components/AccountForm/AccountForm";
import { FooterFormLink } from "../../Components/FooterFormLink/FooterFormLink";
import { FormButton } from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { SmallWindow } from "../../Components/SmallWindow/SmallWindow";

export const SignIn: React.FC = () => {
  return (
    <SmallWindow>
      <AccountForm header="Sign In">
        <Input type="text" placeholder="Email address" header="Email address" />
        <Input type="text" placeholder="Password" header="Password" />
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
