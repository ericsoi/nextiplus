import React from 'react'
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from 'reactstrap';
import FullLayout from "../../../src/layouts/FullLayout";
import Head from 'next/head';
export default function Doubleinsurance() {
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
            <i className="bi bi-bell me-2"> </i>
            Validate Double Insurance
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Vehicle Registration</Label>
                <Input
                  id="vehicle_reg"
                  name="vehicle_reg"
                  placeholder="Enter vehicle registration number"
                  type="text"
                  required
                />
              </FormGroup>
             
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </FullLayout>
    </>
  )
}
