import styled from 'styled-components';

export const ManageOrderWrapper = styled.div`
    
`;

export const Container = styled.div`
  background-color: #000;
  color: white;
  padding: 20px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .header-menu {
    display: flex;
    align-items: center;

    .title {
      font-size: 25px;
      font-weight: bold;
    }

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 80px;

      .sub-menu {
        margin-left: 25px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
  .btn-signout {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color color 0.2s;
  }

  .btn-signout:hover {
    background-color: #f1a837;
    color: black;
    font-weight: bold;
  }
`;

export const ListContainer = styled.div`
    margin-top: 20px;
  .containerList {
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #fff;
    padding: 10px;
    max-width: 400px;
  }
  .grid-item {
    /* background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8); */
    padding: 20px;
    font-size: 1rem;
    text-align: left;
    
  }
  h1 {
    width: 340px;
    text-align: center;
  }
  .ant-btn-primary {
      width: 100%;
      margin-top: 1px
  }
`;
