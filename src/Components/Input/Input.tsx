import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import style from "./Input.module.scss";
import { FormError } from "../FormError/FormError";

interface IInputProps {
  type: string;
  placeholder: string;
  header: string;
  name: string;
  autocomplete?: string;
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions<FieldValues, string> | undefined;
  error: FieldErrors<FieldValues>;
}

export const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  header,
  register,
  options,
  error,
  name,
  autocomplete,
}) => {
  return (
    <label className={style.Input}>
      <p>{header}</p>
      <input
        autoComplete={autocomplete}
        type={type}
        placeholder={placeholder}
        {...register(`${name}`, options)}
      />
      {error[header] && <FormError error={error[header].message as string} />}
    </label>
  );
};
