import { Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => (props) => {
  const { token } = props;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }
    setLoading(false);
  }, [token]);
  return (
    <Spin spinning={loading}>
      <WrappedComponent {...props} />
    </Spin>
  );
};

export default withAuth;
