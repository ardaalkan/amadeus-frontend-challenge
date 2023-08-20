import React, { useMemo, useState } from "react";
import { Button, DatePicker, Popover, Radio, Modal } from "antd";
// import styles from "./Date.module.css";
const { RangePicker } = DatePicker;

const Date = () => {
  const [selectedOption, setSelectedOption] = useState("Tek Yön");
  const [dates, setDates] = useState([]);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setDates([]);
  };

  const handleDateChange = (dates) => {
    setDates(dates);
  };

  const handleApply = () => {
    if (dates.length === 0) {
      error();
      return;
    }
    localStorage.setItem("selectedOption", selectedOption);
    localStorage.setItem("selectedDate", JSON.stringify(dates));
  };

  const error = () => {
    Modal.error({
      title: "Hata",
      content: "Lütfen bir tarih seçin!",
    });
  };

  const content = useMemo(() => {
    return (
      <div>
        <Radio.Group onChange={handleRadioChange} value={selectedOption}>
          <Radio value="Tek Yön">Tek Yön</Radio>
          <Radio value="Gidiş Dönüş">Gidiş - Dönüş</Radio>
        </Radio.Group>
        {selectedOption === "Tek Yön" ? (
          <DatePicker onChange={handleDateChange} />
        ) : (
          <RangePicker onChange={handleDateChange} />
        )}
        <Button onClick={handleApply} style={{ marginLeft: "5px" }}>
          Uygula
        </Button>
      </div>
    );
  }, [selectedOption, dates]);

  return (
    <Popover content={content} trigger="click" placement="bottom">
      <Button style={{ margin: "10px" }}>Tarih Seç</Button>
    </Popover>
  );
};

export default Date;
