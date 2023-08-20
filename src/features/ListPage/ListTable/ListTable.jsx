import React, { useState } from "react";
import { Button, Space, Table } from "antd";

const ListTable = ({ tableData }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: "Origin Airport",
      dataIndex: "originAirport",
      key: "originAirport",
      render: (text, record) => record.originAirport.name,
      sortOrder:
        sortedInfo.columnKey === "originAirport" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Destination Airport",
      dataIndex: "destinationAirport",
      key: "destinationAirport",
      render: (text, record) => record.destinationAirport.name,
      sortOrder:
        sortedInfo.columnKey === "destinationAirport" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Departure Time",
      dataIndex: "departureDateTimeDisplay",
      key: "departureTime",
      sorter: (a, b) =>
        a.departureDateTimeDisplay.localeCompare(b.departureDateTimeDisplay),
      sortOrder:
        sortedInfo.columnKey === "departureTime" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Arrival Time",
      dataIndex: "arrivalDateTimeDisplay",
      key: "arrivalTime",
      sorter: (a, b) =>
        a.arrivalDateTimeDisplay.localeCompare(b.arrivalDateTimeDisplay),
      sortOrder:
        sortedInfo.columnKey === "arrivalTime" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Flight Duration",
      dataIndex: "flightDuration",
      key: "flightDuration",
      sorter: (a, b) => a.flightDuration.localeCompare(b.flightDuration),
      sortOrder:
        sortedInfo.columnKey === "flightDuration" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={tableData}
        onChange={handleChange}
        size="large"
      />
    </>
  );
};

export default ListTable;
