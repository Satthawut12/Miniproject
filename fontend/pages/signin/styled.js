import styled from "styled-components";

export const Wrapped = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  color: black;
  background-color: #f1a837;
  padding: 10px;

  .ant-btn-primary {
    border-color: #f1a837;
  }
  .ant-btn-primary:hover {
    border-color: black;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 12px;
    padding: 30px;
  }

  .form_login {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn-component {
    width: 200px;
    font-weight: bold;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
  }

  .divider {
    margin-top: 5px;
  }

  .button-signin-guest {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer_signin {
    display: flex;
    font-size: 14px;
    justify-content: flex-start;
    width: 100%;
  }

  .base-background {
    background-color: #f1a837;
  }
  .base-background:hover {
    background-color: #000;
  }

  .btn-signup {
    color: #f1a837;
    font-weight: bold;
    cursor: pointer;
  }
`;
