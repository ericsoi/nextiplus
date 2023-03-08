import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import UserTable from "../../src/components/dashboard/UserTable";
import { Pagination } from "@mui/material";
import Login from "../api/dmvic/auth";
import Head from "next/head";
import FullLayout from "../../src/layouts/FullLayout";
const Tables = () => {
  const [dataResponse, setdataResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/users`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setdataResponse(res.users);
    }
    getPageData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dataResponse.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="dashboard" />
      <link rel="icon" href="/favicon.ic" />
    </Head>
    <FullLayout>
      <Row>
        <Col lg="12">
          <UserTable tableData={currentRows} />
        </Col>
        <Pagination
          count={Math.ceil(dataResponse.length / rowsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
        {/* <Login /> */}
      </Row>
    </FullLayout>
    </>

    
  );
};

export default Tables;
