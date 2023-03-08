import Image from "next/image";
// import { Link } from "react-feather";
import Link from "next/link";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import BasicModal from "../basic/BasicModal";
const tableData = [
  
];

const UserTable = ({tableData}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Users</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" bordered striped>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Agency Name</th>
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{index}</td>
                  <td>{tdata.firstname}</td>
                  <td>{tdata.lastname}</td>
                  <td>{tdata.emailaddress}</td>
                  <td>{tdata.companyname}</td>

                    {
                      tdata.is_active === 1 ?( 
                        <td className="bg-success rounded-circle d-inline-block ms-3" ></td>
                      ):(
                      <td className="bg-danger rounded-circle d-inline-block ms-3" ></td>
                    )}
                   
                  <td>{tdata.role}</td>
                  <td><Link href={"#"}><BasicModal input={'edit'}/></Link></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserTable;
