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
  const [dataTorecord, setDataTorecord] = useState([]);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    fetch();
    getTotalcal();
  }, []);

  const fetch = async () => {
    try {
      let result = await axios.get("http://localhost:4000/api/findmenu");
      setData(result.data);
      let found  = await axios.get("http://localhost:4000/api/list")
      setDataTorecord(found.data)
    } catch (e) {
      console.log(e);
    }
  };

  const select = async (calID, menuName, totalCal) => {
    //console.log(calID, menuName, totalCal);
    try {
      let result = await axios.post("http://localhost:4000/api/calculator", {
        menuName: menuName,
        totalCal: totalCal
      })
      if(result.status === 200){
        console.log(result.data);
        setDataTorecord(result.data.calculator)
      }
    } 
    catch (e) {
      console.log(e);
    }
    finally {
      await getTotalcal()
    }
  };

  const deleteCalculatorID = async (calculatorID) => {
    //console.log(calculatorID);
    try {
      let result = await axios.delete(`http://localhost:4000/api/calculator/delete/${calculatorID}`)
      //console.log(result.data);
      setDataTorecord(result.data)
    }
    catch (e) {
      console.log(e);
    }
    finally {
      await getTotalcal()
    }
  }

  const getTotalcal = async () => {
    try {
      let result = await axios.get("http://localhost:4000/api/total")
      if(result.status === 200){
        console.log(result.data);
        setTotal(result.data.caltotal)
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <Layout>
      <Container>
        <div className="box-container">
          <div>
            <List btn={true} data={data} select={select}/>
          </div>
          <div>
            <List btn={false}  data={dataTorecord} deleteCalId={deleteCalculatorID}/>
          </div>
          <div>
            <Totalcal totalCal={total} />
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
