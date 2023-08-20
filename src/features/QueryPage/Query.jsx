import React, { useState, useEffect } from "react";
import { Form, Button, Select, Spin } from "antd";
import styles from "./Query.module.css";
import planeDown from "../../assets/images/svgs/planeDown.svg";
import planeUp from "../../assets/images/svgs/planeUp.svg";
import Date from "./Date/Date";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";

const Query = () => {
  const [fetching, setFetching] = useState(true);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const req = "Bu alan doldurulmalı!";

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/flights`);
      const data = await response.json();
      const firstFlight = data[0];

      const airportOptions = [
        {
          label: firstFlight.originAirport.name,
          value: firstFlight.originAirport.code,
        },
        {
          label: firstFlight.destinationAirport.name,
          value: firstFlight.destinationAirport.code,
        },
      ];
      setOptions(airportOptions);
      setFetching(false);
    } catch (error) {
      console.log("error", error);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleForm = (values) => {
    localStorage.setItem("originAirport", values.up);
    localStorage.setItem("destinationAirport", values.down);
    navigate(PATHS.LIST);
  };

  return (
    <div className={styles.main}>
      <Form className={styles.formStyle} onFinish={handleForm}>
        <Form.Item name="up" rules={[{ required: true, message: req }]}>
          <Select
            filterOption={false}
            showSearch
            style={{ width: "200px", margin: "10px" }}
            placeholder="IST"
            suffixIcon={<img src={planeUp} alt="origin" />}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            options={options}
          />
        </Form.Item>
        <Form.Item name="down" rules={[{ required: true, message: req }]}>
          <Select
            filterOption={false}
            showSearch
            style={{ width: "200px", margin: "10px" }}
            placeholder="ANT"
            suffixIcon={<img src={planeDown} alt="origin" />}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            options={options}
          />
        </Form.Item>
        <Form.Item>
          <Date />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ margin: "5px" }}
        >
          <RightOutlined />
        </Button>
      </Form>
    </div>
  );
};

export default Query;
