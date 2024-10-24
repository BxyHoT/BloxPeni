import { SmallWindow } from "../../Components/SmallWindow/SmallWindow";
import { AccountForm } from "../../Components/AccountForm/AccountForm";
import { FooterFormLink } from "../../Components/FooterFormLink/FooterFormLink";

export const SignUp: React.FC = () => {
  return (
    <SmallWindow>
      <AccountForm
        header="Create new account"
        buttonText="Create"
        footerFormLink={
          <FooterFormLink
            to="/sign-in"
            linkText="Sign In"
            footerText="Already have an account?"
          />
        }
      />
    </SmallWindow>
  );
};
