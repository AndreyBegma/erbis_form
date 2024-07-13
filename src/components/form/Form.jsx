import s from "./form.module.scss";

import InputForm from "./input/Input";
import TextAreaForm from "./textarea/Textarea";
import Button from "./button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeForm, createUser } from "../../redux/slices/main";
import checkForm from "../../scripts/checkForm";


const Form = () => {
  const dispatch = useDispatch()
  const { form } = useSelector((state) => state.main);

  const handleUpdateForm = (type, newValue) => { 
    dispatch(changeForm({type,newValue}))
  }

  const handleSendForm = (e) => { 
    e.preventDefault()
    if (checkForm(form) === false) { 
      dispatch(createUser())
    }
  }

  return (
    <form className={s.form}>
      <InputForm handleUpdate={e => handleUpdateForm("name", e.target.value)} label="Name" value={form.name} />
      <InputForm handleUpdate={e => handleUpdateForm("mail", e.target.value)} label="Email" value={form.email} type="email" />
      <TextAreaForm handleUpdate={e => handleUpdateForm("message", e.target.value)} placeholder="Write text message" value={form.message} />
      <Button handleClick={handleSendForm} text="Send" />
    </form>
  );
};

export default Form;
