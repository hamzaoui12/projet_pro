import React, { useState } from "react"
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Card,
} from "@tremor/react"
import Search from "@/lib/components/Search"

function Users() {
  const [users, setusers] = useState([
    {
      id: 0,
      name: "amina",
      phoneNumber: "0756345870",
      email: "amina.larbi@gmail.com",
    },
    {
      id: 0,
      name: "amina 1",
      phoneNumber: "0607345841",
      email: "amina1@test.com",
    },
    {
      id: 1,
      name: "amina 2",
      phoneNumber: "0607345842",
      email: "amina2@test.com",
    },
    {
      id: 2,
      name: "amina 3",
      phoneNumber: "0607345843",
      email: "amina3@test.com",
    },
    {
      id: 3,
      name: "amina 4",
      phoneNumber: "0607345844",
      email: "amina4@test.com",
    },
    {
      id: 4,
      name: "amina 5",
      phoneNumber: "0607345845",
      email: "amina5@test.com",
    },
    {
      id: 5,
      name: "amina 6",
      phoneNumber: "0607345846",
      email: "amina6@test.com",
    },
    {
      id: 6,
      name: "amina 7",
      phoneNumber: "0607345847",
      email: "amina7@test.com",
    },
    {
      id: 7,
      name: "amina 8",
      phoneNumber: "0607345848",
      email: "amina8@test.com",
    },
    {
      id: 8,
      name: "amina 9",
      phoneNumber: "0607345849",
      email: "amina9@test.com",
    },
    {
      id: 9,
      name: "amina 10",
      phoneNumber: "0607345850",
      email: "amina10@test.com",
    },
  ])

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Search />
      <Card className="mt-6">
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
      </Card>
    </div>
  )
}

export default Users
