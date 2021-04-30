import { ListContainer } from "./styled";
import axios from "axios";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
const List = (props) => {
  const { btn, data, select } = props;
  return (
    <ListContainer>
      <h1>{btn ? "รายการ" : "บันทึก"}</h1>
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
                    <Button
                      type="primary"
                      onClick={() =>
                        select(item?.calID, item?.menuName, item?.totalCal)
                      }
                    >
                      เลือก
                    </Button>
                  )}
                  {!btn && (
                    <Button
                      danger
                      type="primary"
                      onClick={() =>
                        select(item?.calID, item?.menuName, item?.totalCal)
                      }
                    >
                      ลบ
                    </Button>
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
export default List;
