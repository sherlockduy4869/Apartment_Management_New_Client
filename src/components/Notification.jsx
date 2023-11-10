import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <ToastContainer 
    position="bottom-right"
    autoClose="3000"
    pauseOnHover={false}
    transition={Slide}
    closeOnClick={true}
    limit={3}
    />
  )
}

export default Notification