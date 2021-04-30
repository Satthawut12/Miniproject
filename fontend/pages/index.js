import withAuth from "../components/withAuth";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import List from "../components/Layout/components/list";
import { Container } from "../styles/styles";
import Totalcal from "../components/Totalcal";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = (props) => {
  const [data, setData] = useState([]);
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

  const select = async (calID, menuName, totalCal) => {
    console.log(calID, menuName, totalCal);
    try {
      let result = await axios.post("http://localhost:4000/api/calculator", {
        menuName: menuName,
        totalCal: totalCal
      })
      console.log(result);
    } 
    catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <Container>
        <div className="box-container">
          <div>
            <List btn={true} data={data} select={select}/>
          </div>
          <div>
            <List btn={false}  />
          </div>
          <div>
            <Totalcal />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = ({ req, res }) => {
  return { props: { token: req.cookies.token || "" } };
};

export default withAuth(Index);
