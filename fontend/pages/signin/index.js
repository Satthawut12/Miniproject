import { Form, Input, Button, Checkbox, Divider, message, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapped } from "./styled";
import { useRouter } from "next/router";
import { useCookie } from "next-cookie";
import withAuth from "../../components/withAuth";

const signin = (props) => {
  const [stateSignin, setStateSignin] = useState(true);
  const [loading, setLoading] = useState(false)
  const route = useRouter()


  const handleSignin = async (values) => {
    const result = await axios.post("http://localhost:4000/api/login", values, {
      withCredentials: true,
    });
    if (result.status == 200) {
      route.push('/')
    }
  };

  const handleSignUp = async (values) => {
    setLoading(true)
    const result = await axios.post(
      "http://localhost:4000/api/register",
      values
    );
    setTimeout(()=>{setLoading(false),setStateSignin(true)},500)
    message.success({ content: `สมัครบัญชีสำเร็จ` });
  };

  const onSigninFailed = (errorInfo) => {
    message.error({ content: "กรุณากรอกข้อมูลให้ครบถ้วน" });
  };

  const guestUser = async () => {
    try {
      let result = await axios.get("http://localhost:4000/api/guestuser")
      let signin = await axios.post("http://localhost:4000/api/login",{
        username: result.data.username,
        password: "123456"
      },
      {
        withCredentials: true,
      })
      if (signin.status == 200) {
        route.push('/')
      }
    }
    catch (e) {
      message.error({ content: "มีข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" });
    }
  }

  return (
    <Wrapped>
      <div className="container">
        <div className="title">{stateSignin ? "Sign in" : "Sign Up"}</div>
        <Divider className="divider" />
        {stateSignin && (
          <div className="form_login">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={handleSignin}
              onFinishFailed={onSigninFailed} 
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกชื่อบัญชีผู้ใช้!",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกรหัสผ่่าน!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="button-signin-guest">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-component base-background "
                  >
                    Sign in
                  </Button>
                </Form.Item>
                <Divider className="divider" />
                <Form.Item>
                  <Button onClick={() => guestUser()} className="btn-component">
                    Guest Sign in
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        )}

        {!stateSignin && (
          <Spin spinning={loading}>
            <div className="form_login">
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={handleSignUp}
                onFinishFailed={onSigninFailed}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกชื่อบัญชีผู้ใช้!",
                    },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "กรุณากรอกอีเมล!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรหัสผ่่าน!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <div className="button-signin-guest">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn-component base-background "
                    >
                      Sign Up
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </Spin>
        )}
        {stateSignin && (
          <div className="footer_signin">
            <div>
              หากยังไม่บัญชีผู้ใช้ ?{" "}
              <span
                className="btn-signup"
                onClick={() => setStateSignin(false)}
              >
                Sign Up
              </span>
            </div>
          </div>
        )}
        {!stateSignin && (
          <div className="footer_signin">
            <div>
              หากมีบัญชีแล้ว ?{" "}
              <span className="btn-signup" onClick={() => setStateSignin(true)}>
                Sign in
              </span>
            </div>
          </div>
        )}
      </div>
    </Wrapped>
  );
};
export default signin;

export const getServerSideProps = ({ req, res }) => {
  return { props: { token: req.cookies.token || "" } };
};