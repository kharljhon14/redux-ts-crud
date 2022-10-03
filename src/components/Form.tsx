import React, { useRef } from "react";
import { generateUniqueID, getCurrentDate } from "../helpers";
import { useAppDispatch } from "../hooks/reduxHooks";
import User from "../models/user.model";
import { showToast } from "../Services/toast";
import { addNewUser } from "../store/reducers/users";

const Form = () => {
   const firtNameInput = useRef<HTMLInputElement>(null);
   const lastNameInput = useRef<HTMLInputElement>(null);
   const addressInput = useRef<HTMLInputElement>(null);
   const emailInput = useRef<HTMLInputElement>(null);

   const dispatch = useAppDispatch();
   const handleSubmit = (evt: React.FormEvent) => {
      evt.preventDefault();
      showToast("SUCCESS", "Added to the list");

      const user: User = {
         id: generateUniqueID(),
         date: getCurrentDate(),
         lastName: lastNameInput.current?.value || "",
         firtName: firtNameInput.current?.value || "",
         address: addressInput.current?.value || "",
         email: emailInput.current?.value || "",
      };

      dispatch(addNewUser(user));

      if (lastNameInput.current !== null) lastNameInput.current.value = "";
      if (firtNameInput.current !== null) firtNameInput.current.value = "";
      if (addressInput.current !== null) addressInput.current.value = "";
      if (emailInput.current !== null) emailInput.current.value = "";
   };

   return (
      <div className="form__container">
         <h2 className="form__header header-2">Add new data</h2>
         <form onSubmit={handleSubmit} className="form">
            <input required type="text" className="form__input" placeholder="First name..." ref={firtNameInput} />
            <input required type="text" className="form__input" placeholder="Last name..." ref={lastNameInput} />
            <input required type="text" className="form__input" placeholder="Address..." ref={addressInput} />
            <input required type="email" className="form__input" placeholder="Email" ref={emailInput} />
            <button className="btn form__btn">Submit</button>
         </form>
      </div>
   );
};

export default Form;
