import React, { useMemo, useState } from "react";
import { Button, DatePicker, Popover, Radio } from "antd";
import styles from "./Date.module.css";
const { RangePicker } = DatePicker;

const Date = () => {
  const [selectedOption, setSelectedOption] = useState("Tek Yön");

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const content = useMemo(() => {
    return (
      <div>
        <Radio.Group onChange={handleRadioChange} value={selectedOption}>
          <Radio value="Tek Yön">Tek Yön</Radio>
          <Radio value="Diğer Seçenek">Gidiş - Dönüş</Radio>
        </Radio.Group>
        {selectedOption === "Tek Yön" ? <DatePicker /> : <RangePicker />}
      </div>
    );
  }, [selectedOption]);

  return (
    <Popover content={content} trigger="click" placement="bottom">
      <Button style={{ margin: "10px" }}>Tarih Seç</Button>
    </Popover>
  );
};

export default Date;
