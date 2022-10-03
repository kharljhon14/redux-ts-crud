import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";

const Table = () => {
   const users = useAppSelector((state) => state.users.users);

   const renderedUsers = users.map((user) => {
      return (
         <tr key={user.id}>
            <td>{user.date}</td>
            <td>{user.lastName}</td>
            <td>{user.firtName}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
         </tr>
      );
   });

   return (
      <>
         <h2 className="table__header header-2">User's information table</h2>
         <table className="table">
            <thead className="table__head">
               <tr>
                  <th>Date</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Address</th>
                  <th>Email</th>
               </tr>
            </thead>
            <tbody className="table__body">{users.length > 0 ? renderedUsers : <tr></tr>}</tbody>
         </table>
      </>
   );
};

export default Table;
