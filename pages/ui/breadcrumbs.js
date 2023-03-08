import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Link from "next/link";
import FullLayout from "../../src/layouts/FullLayout";
import Head from "next/head";
const Breadcrumbs = () => {
  return (
    <>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="dashboard" />
      <link rel="icon" href="/favicon.ic" />
    </Head>
    <FullLayout>
    
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-link me-2"> </i>
            Basic Breadcrumbs
          </CardTitle>
          <CardBody className="">
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/">Library</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </FullLayout>
    </>
  );
};

export default Breadcrumbs;
