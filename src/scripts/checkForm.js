import { Notify } from "notiflix";

const checkForm = (form) => { 
  let formError = false
  if (form.name.length === 0) { 
    Notify.warning( "Name is required.")
    formError = true
  }
  if (/[^a-zA-Z\s]/.test(form.name)){
    Notify.warning("Name cannot contain digits or special symbols.")
    formError = true
  }
  if (form.email.length === 0) {
    Notify.warning( "Email is required.")
  }
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
    Notify.warning("Email format is invalid.")
    formError = true
  }
  if (form.message.length > 500) { 
    Notify.warning("Message cannot be longer than 500 characters.")
    formError = true
  }
  return formError
}

export default checkForm