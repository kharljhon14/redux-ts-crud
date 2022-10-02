import React from "react";

const Form = () => {
   return (
      <div className="form__container">
         <h2 className="form__header header-2">Add new data</h2>
         <form className="form">
            <input required type="text" className="form__input" placeholder="First name..." />
            <input required type="text" className="form__input" placeholder="Last name..." />
            <input required type="text" className="form__input" placeholder="Address..." />
            <input required type="email" className="form__input" placeholder="Email" />
            <button className="btn form__btn">Submit</button>
         </form>
      </div>
   );
};

export default Form;
