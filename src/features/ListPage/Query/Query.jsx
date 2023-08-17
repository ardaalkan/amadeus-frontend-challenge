import React, { useState } from "react";
import styles from "./Query.module.css";
import { Form, Button, Modal, Select, Spin } from "antd";
import planeDown from "../../../assets/images/svgs/planeDown.svg";
import planeUp from "../../../assets/images/svgs/planeUp.svg";
import { RightOutlined } from "@ant-design/icons";
import Date from "./componets/Date";

const Query = () => {
  const [fetching, setFetching] = useState(true);
  const [submit, setSubmit] = useState(true);
  const [options, setOptions] = useState([
    { label: "Istanbul - IST", value: "Istanbul" },
    { label: "Antalya - ANT", value: "Antalya" },
  ]);

  return (
    <div className={styles.main}>
      <Form className={styles.formStyle}>
        <Form.Item name="up" rules={[{ required: true }]}>
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
        <Form.Item name="down" rules={[{ required: true }]}>
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
        ><RightOutlined/></Button>
      </Form>
    </div>
  );
};

export default Query;
