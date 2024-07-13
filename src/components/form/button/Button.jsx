import s from "./button.module.scss"

const Button = ({text,handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className={s.btn}
    >
      {text}
    </button>
  );
};


export default Button