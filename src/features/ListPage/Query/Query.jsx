import React, { useState, useEffect } from "react";
import styles from "./Query.module.css";
import { Form, Button, Modal, Select, Spin } from "antd";
import planeDown from "../../../assets/images/svgs/planeDown.svg";
import planeUp from "../../../assets/images/svgs/planeUp.svg";
import { RightOutlined } from "@ant-design/icons";
import Date from "./componets/Date/Date";
import { first } from "lodash";

const Query = () => {
  const [fetching, setFetching] = useState(true);
  const [submit, setSubmit] = useState(true);
  const [options, setOptions] = useState([]);
  const [flightDestinations, setFlightDestinations] = useState([]);
  const [targetAirportName, setTargetAirportName] = useState("");

  const req = "This field is required";

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

  // const error = () => {
  //   Modal.error({
  //     title: "Hata",
  //     content: "Hava alanı Bulunamadı!",
  //   });
  // };

  return (
    <div className={styles.main}>
      <Form className={styles.formStyle}>
        <Form.Item name="up" rules={[{ required: true, message: req }]}>
          <Select
            filterOption={false}
            showSearch
            style={{ width: "200px", margin: "10px" }}
            placeholder="IST"
            suffixIcon={<img src={planeUp} alt="origin" />}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            options={options}
            onSearch={fetchData}
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
          disabled={!submit}
          style={{ margin: "5px" }}
        >
          <RightOutlined />
        </Button>
      </Form>
    </div>
  );
};

export default Query;
