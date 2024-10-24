import { SmallWindow } from "../../Components/SmallWindow/SmallWindow";
import { AccountForm } from "../../Components/AccountForm/AccountForm";
import { FooterFormLink } from "../../Components/FooterFormLink/FooterFormLink";
import { FormButton } from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { FormAccept } from "../../Components/FormAccept/FormAccept";

export const SignUp: React.FC = () => {
  return (
    <SmallWindow>
      <AccountForm header="Create new account">
        <Input type="text" placeholder="Username" header="Username" />
        <Input type="text" placeholder="Email address" header="Email address" />
        <Input type="text" placeholder="Password" header="Password" />
        <Input type="text" placeholder="Email" header="Email" />
        <FormAccept />
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
