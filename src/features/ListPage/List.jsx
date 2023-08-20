import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import ListTable from "./ListTable/ListTable";
import ReactPlaceholder from "react-placeholder";
import Nullable from "../Nullable";
import "react-placeholder/lib/reactPlaceholder.css";
import Flight from "./FlightSchedule";
import MainLayout from "../../layout/MainLayout";

const List = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const exists = tableData.length;

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
      <MainLayout>
        <ReactPlaceholder
          showLoadingAnimation
          type="text"
          rows={9}
          ready={!loading}
          style={{ marginTop: "50px" }}
        >
          {loading ? (
            <ReactPlaceholder style={{ width: "100%", height: "100%" }} />
          ) : exists === 0 ? (
            <Nullable />
          ) : (
            <>
              <Flight
                origin={localStorage.getItem("originAirport")}
                destination={localStorage.getItem("destinationAirport")}
              />
              <ListTable tableData={tableData} />
            </>
          )}
        </ReactPlaceholder>
      </MainLayout>
    </div>
  );
};

export default List;
