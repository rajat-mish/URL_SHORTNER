// import React from "react";
// import LoginForm from "../components/LoginForm.jsx";
// import RegisterForm from "../components/RegisterForm.jsx";
// import { useState } from "react";

// const AuthPage = () => {
//     const [login, setLogin] = useState(true);
//   return (
//     // <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
//     //   <LoginForm />
//     // </div>
//     <div>
//        {login?  <LoginForm state={setLogin}/>:<RegisterForm state={setLogin}/>}
//     </div>
   
//   );
// };

// export default AuthPage;




import React from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import { useState } from "react";

const AuthPage = () => {
  const [login, setLogin] = useState(true);
  
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-md mx-auto px-4">
        {login ? <LoginForm state={setLogin}/> : <RegisterForm state={setLogin}/>}
      </div>
    </div>
  );
};

export default AuthPage;