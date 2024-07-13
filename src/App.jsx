import { useSelector } from "react-redux"
import Form from "./components/form/Form"
import User from "./components/user/User"

const App = () => { 
  const {status} = useSelector(state => state.main.user)
  return (
    <main> 
      {status === "created" && <User/>}
      <Form/>
    </main>
  )
}

export default App