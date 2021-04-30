import axios from "axios";
import { useRouter } from "next/router";
import { Container } from "./styled";
import Link from 'next/link'

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
        <div className="title">Calories</div>
        <div className="menu">
          <Link href="/">
            <div className="sub-menu">หน้าหลัก</div>
          </Link>
          <Link href="/manage">
            <div className="sub-menu">จัดการข้อมูล</div>
          </Link>
        </div>
      </div>
      <div className="btn-signout" onClick={() => handleSignOut()}>
        ออกจากระบบ
      </div>
    </Container>
  );
};

export default Header;
