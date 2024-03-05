import React from "react";
import { useParams } from "react-router-dom";
// import useToken from "../../Hooks/useToken";
import { Header } from "../Home/Header";
document.title = "Profile"

function Chanel() {
  const { user_id } = useParams();
  const [user, setUser] = React.useState(false);
 
  // const [setIsLoggedIn] = useToken(true);
  // const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://reqres.in/api/users/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setUser(data?.data);
         
        }
      });
  }, [user_id]);

  


  return (
    <>
      <Header />
      {user && (
        <div className="text">
          <img
            src={user.avatar}
            alt={user.first_name + " " + user.last_name + "s avatar"}
          />

          <h2>{user.first_name + " " + user.last_name}</h2>

          <a href={"mailto:" + user.email}>{user.email}</a>


        </div>
      )}

      


      
      
      

    </>



  );
}

export { Chanel };