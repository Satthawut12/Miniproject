import Head from "next/head";
import withAuth from "../components/withAuth";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";


const Index = (props) => {
  return (
    <Layout>
      <div>Main</div>
    </Layout>
  );
};

export const getServerSideProps=({ req, res })=> {
  return { props: { token: req.cookies.token || ""} };
}

export default withAuth(Index);
