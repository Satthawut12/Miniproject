import { ListContainer } from "./styles";
import axios from "axios";
import { Button } from "antd";
import React, { useEffect, useState } from "react";

const ManageOrder = (props) => {
  const { btn, data, editMenu, deletecalID } = props;
  return (
    <ListContainer>
      <h1>{btn ? "รายการ" : ""}</h1>
      <div className="containerList">
        <div className="grid-container">
          <div className="grid-item">ชื่อรายการ</div>
          <div className="grid-item">จำนวนแคลอรี่</div>
          <div className="grid-item"></div>
          {data?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="grid-item">{item?.menuName}</div>
                <div className="grid-item">{item?.totalCal}</div>
                <div className="grid-item">
                  {btn && (
                    <div>
                      <Button
                        type="primary"
                        onClick={() =>
                          editMenu(item?.calID, item?.menuName, item?.totalCal)
                        }
                      >
                        แก้ไข
                      </Button>

                      <Button
                        danger
                        type="primary"
                        onClick={() => deletecalID(item?.calID)}
                      >
                        ลบ
                      </Button>
                    </div>
                  )}
                  {!btn && (
                   <div></div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </ListContainer>
  );
};
export default ManageOrder;
