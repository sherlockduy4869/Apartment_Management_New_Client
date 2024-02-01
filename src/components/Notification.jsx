import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <ToastContainer 
    position="bottom-right"
    autoClose="1500"
    pauseOnHover={false}
    transition={Slide}
    closeOnClick={true}
    limit={1}
    />
  )
}

export default Notification