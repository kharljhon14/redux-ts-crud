import { toast } from "react-toastify";

export const showToast = (type: string, message: string) => {
   switch (type) {
      case "SUCCESS":
         toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
         });
         break;

      case "ERROR":
         toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
         });
         break;

      default:
         return false;
   }
};
