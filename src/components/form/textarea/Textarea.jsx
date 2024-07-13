import s from "./teaxtarea.module.scss";
const TextAreaForm = ({ value, placeholder, handleUpdate }) => {
  return (
    <textarea
      className={s.textarea}
      placeholder={placeholder}
      value={value}
      onChange={handleUpdate}
      id=""
    ></textarea>
  );
};

export default TextAreaForm;
