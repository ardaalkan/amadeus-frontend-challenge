import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import ListTable from "./ListTable/ListTable";

const List = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [originAirport, setOriginAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const origin = localStorage.getItem("originAirport");
    const destination = localStorage.getItem("destinationAirport");

    if (origin && destination) {
      fetchData(origin, destination);
    }
  }, []);

  const fetchData = async (origin, destination) => {
    try {
      const response = await fetch("http://localhost:3001/flights");
      const data = await response.json();

      const filteredData = data.filter(
        (item) =>
          item.originAirport.code === origin &&
          item.destinationAirport.code === destination
      );

      setTableData(filteredData);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>

      <ListTable tableData={tableData} />
    </div>
  );
};

export default List;
