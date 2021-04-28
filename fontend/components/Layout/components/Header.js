import axios from "axios";
import { useRouter } from "next/router";
import { Container } from "./styled";

const Header = () => {
  const route = useRouter();
  const handleSignOut = async () => {
    await axios
      .get(`http://localhost:4000/api/logout`, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.status === 200) {
          route.push("/signin");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <div className="header-menu">
        <div className="title">Header</div>
        <div className="menu">
          <div className="sub-menu">Home</div>
          <div className="sub-menu">Profile</div>
          <div className="sub-menu">About</div>
          <div className="sub-menu">Contact</div>
        </div>
      </div>
      <div className="btn-signout" onClick={()=> handleSignOut()}>Sign Out</div>
    </Container>
  );
};

export default Header;
