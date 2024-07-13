import s from "./input.module.scss";

const InputForm = ({ label, handleUpdate, value, type = "text" }) => {
  return (
    <label className={s.label}>
      <p className={s.label_text}>{label}</p>
      <input
        onChange={handleUpdate}
        value={value}
        className={s.label_input}
        type={type}
      />
    </label>
  );
};

export default InputForm