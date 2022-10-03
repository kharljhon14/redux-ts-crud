export const generateUniqueID = () => {
   return parseInt((Date.now() * Math.random() * 100).toFixed(0));
};

export const getCurrentDate = () => {
   const today = new Date();

   return today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
   });
};
