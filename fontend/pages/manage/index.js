import Layout from "../../components/Layout";
import ManageScreen from "../../views/Manage";

const Manage = (props) => {
  const { token } = props;
  return (
    <Layout>
      <ManageScreen token={token}/>
    </Layout>
  );
};

export const getServerSideProps = ({ req, res }) => {
  return { props: { token: req.cookies.token || "" } };
};

export default Manage;
