import Layout from "../../components/Layout";
import ManageOrder from "../../components/ManageOrder";
import ManageScreen from "../../views/Manage";
import { Wrapped } from "./styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input,Button  } from 'antd';
import { useRouter } from 'next/router'

const Manage = (props) => {
  const router = useRouter()
  const [data, setData] = useState([]);
  const { token } = props;
  const [boxedit, setBoxedit] = useState(false);
  const [menuName,setMenuName] = useState('');
  const [totalCal,setTotalCal] = useState();
  const [calEditID, setCalEditID] = useState()

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      let result = await axios.get("http://localhost:4000/api/findmenu");
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deletecalID = async (calID) => {
    //console.log(calculatorID);
    try {
      let result = await axios.delete(
        `http://localhost:4000/api/delete/${calID}`
      );
      //console.log(result.data);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
    // finally {
    //   await getTotalcal()
    // }
  };

  const editMenu = async (calID, menuName, totalCal ) => {
    setBoxedit(!boxedit);
    setCalEditID(calID)
  };

  const callEditmenu = async () => {
    //console.log(menuName, totalCal, calEditID);
    try {
      let result = await axios.put(`http://localhost:4000/api/editmenu`,{
        menuName: menuName,
        totalCal: totalCal,
        calID: calEditID
      })
      router.reload()
    }
    catch (e) {
      alert("เกิดข้อผิดพลาดกรุณาลองใหม่")
    }
  };

  return (
    <Layout>
      <Wrapped>
        <div className="container">
          <div>
            <ManageScreen token={token} />
          </div>
          <div>
            <ManageOrder
              btn={true}
              data={data}
              deletecalID={deletecalID}
              editMenu={editMenu}
            />
          </div>
          {boxedit ? (
            <div>
              <h1>แก้ไข</h1>
              <div>ชื่อรายการ : <Input onChange={ e => setMenuName(e.target.value)}/></div>
              <div>ปริมาณแคลอรี่ : <Input onChange={ e => setTotalCal(e.target.value)}/></div>
              <Button type="primary" onClick={()=> callEditmenu()}>ยืนยัน</Button>
              <Button type="primary" danger onClick={() => editMenu()}>ยกเลิก</Button>

            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Wrapped>
    </Layout>
  );
};

export const getServerSideProps = ({ req, res }) => {
  return { props: { token: req.cookies.token || "" } };
};

export default Manage;
