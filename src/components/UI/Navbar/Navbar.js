import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth')
    }

    return (
      <div className="navbar">
          <MyButton onClick = {logout} >
            Выйти
          </MyButton>
      <div className="navbar__links">
          <Link to ="/about"> О сайте</Link>
          <Link to ="/Posts">Посты</Link>
      </div>
    </div>
    )

}

export default Navbar;