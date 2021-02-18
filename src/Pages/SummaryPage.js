{/*
  @Copyright (c) 2021
  @summary: Summary details for product status
  @author Murali Meduri<meduri1@gmail.com>
  @Created at: 02/08/2021
*/}

import React from "react";
import iphonexr from "../images/iphone-xr-black.png";

import { AiOutlineInbox, AiOutlineHome } from "react-icons/ai";
import * as moment from "moment";

import { FaShuttleVan } from "react-icons/fa";

function SummaryPage({ order }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginTop: "10px",
        backgroundColor: "white",
        marginBottom: 10,
      }}
    >
      <img
        src={iphonexr}
        style={{
          objectFit: "cover",
          width: "200px",
          height: "300px",
          borderWidth: "1px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <AiOutlineInbox color="black" size={50} />
          <div
            style={{
              height: "5px",
              borderWidth: "1px",
              borderColor: "black",
              width: "70px",
              backgroundColor: order.status == "ordered" ? "#e74c3c" : "grey",
              alignSelf: "center",
              borderRadius: "10px",
              marginTop: 5,
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <FaShuttleVan color="black" size={50} />
          <div
            style={{
              height: "5px",
              borderWidth: "1px",
              borderColor: "black",
              width: "70px",
              backgroundColor: order.status == "shipped" ? "#e74c3c" : "grey",
              alignSelf: "center",
              borderRadius: "10px",
              marginTop: 5,
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <AiOutlineHome color="black" size={50} />
          <div
            style={{
              height: "5px",
              borderWidth: "1px",
              borderColor: "black",
              width: "70px",
              backgroundColor: order.status == "delivered" ? "#e74c3c" : "grey",
              alignSelf: "center",
              borderRadius: "10px",
              marginTop: 5,
            }}
          ></div>
        </div>
        {/* {order.items[0].estimatedShipDateRange.fromDate} */}
      </div>{" "}
      <div style={{ fontFamily: "Roboto", color: "black", marginTop: 10 }}>
        Expected to Ship: 
        {moment(
          `${order.items[0].estimatedShipDateRange.fromDate}`,
          "YYYY-MM-DDTHH:mm:ss.SSS"
        ).format("MMM DD")}
        -{" "}
        {moment(
          `${order.items[0].estimatedShipDateRange.toDate}`,
          "YYYY-MM-DDTHH:mm:ss.SSS"
        ).format("MMM DD")}
        <div
          style={{
            fontFamily: "Roboto",
            color: "black",
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          {order.items[0].name}
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            color: "black",
            marginTop: 10,
            fontSize: 14,
          }}
        >
          {order.items[0].skuAttributes.color}{" "}
          {order.items[0].skuAttributes.size}
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            color: "black",
            marginTop: 5,
            fontSize: 14,
          }}
        >
          {order.items[0].plan}
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
