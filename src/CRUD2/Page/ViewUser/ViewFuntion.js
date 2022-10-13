// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const ViewFuntion = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://localhost:3000/users/${id}`);
//     setUser(res.data);
//   };
//   return (
//     <>
//       <ViewIndex user={user} loadUser={loadUser} />
//     </>
//   );
// };
// export default ViewFuntion;
