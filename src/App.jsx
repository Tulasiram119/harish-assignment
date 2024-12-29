import { useEffect, useState } from "react";
import LoginForm from "./components/login-form";
import { handleLogout, isAuthenticated } from "./helpers/utils";
import InvoiceForm from "./components/invoice-details";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (isAuthenticated()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const logOut = () => {
    handleLogout();
    setIsLoggedIn(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <InvoiceForm logOut={logOut} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
