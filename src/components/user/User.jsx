import { useSelector } from "react-redux";
import s from "./user.module.scss";
const User = () => {
  const { name, email, message } = useSelector((state) => state.main.user);
  return (
    <div className={s.user}>
      <p className={s.user_text}>
        <span className="bold">Name:</span> {name}
      </p>
      <p className={s.user_text}>
        <span className="bold">Email:</span> {email}
      </p>
      <p className={s.user_text}>
        <span className="bold">Message:</span> {message}
      </p>
    </div>
  );
};

export default User;
