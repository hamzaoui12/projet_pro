import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
  } from "@tremor/react";
  
  export default function UsersTable({ users }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Phone Number</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={Math.random}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Text>{user.phoneNumber}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.email}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  