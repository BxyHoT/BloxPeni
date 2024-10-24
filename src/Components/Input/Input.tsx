import style from "./Input.module.scss";

interface IInputProps {
  type: string;
  placeholder: string;
  header: string;
}

export const Input: React.FC<IInputProps> = ({ type, placeholder, header }) => {
  return (
    <label className={style.Input}>
      <p>{header}</p>
      <input type={type} placeholder={placeholder} />
    </label>
  );
};
