import { Layout } from "antd";
import {Container} from './styled'
import { Content } from "antd/lib/layout/layout";
import Header from "./components/header";

export default function Topbar({ children }) {
  return (
    <Container>
      <Layout>
        <Header/>
        <Content className="content">{children}</Content>
      </Layout>
    </Container>
  );
}
