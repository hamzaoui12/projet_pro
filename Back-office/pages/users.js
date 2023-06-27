import React, { useEffect, useState } from "react"
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
  Button,
} from "@tremor/react"
import Search from "@/lib/components/Search"
import axios from "axios"

function Users() {
  const [users, setusers] = useState([
   
  ])

  useEffect(() => {
    ;(async () => {
      let { data } = await axios.get("http://localhost:3001/admin/getUsers")

      setusers(data.result)
    })()
  }, [])

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>Search wth the magic of AI powered by App Ambient.</Text>
      <Search />
      <Card className="mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Phone Number</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={Math.random}>
                <TableCell>{`${user.firstName}${
                  user.lastName ? " " + user.lastName : ""
                }`}</TableCell>
                <TableCell>
                  <Text>{user.phoneNumber}</Text>
                </TableCell>
                <TableCell>
                  <Text>{user.mail}</Text>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      backgroundColor: user.is_admin
                        ? "lightgreen"
                        : "rgb(229 231 235)",
                      borderColor: user.is_admin ? "white" : "rgb(209 213 219)",
                      color: user.is_admin ? "black" : undefined,
                    }}
                    className="w-[80px] text-xs font-semibold cursor-pointer bg-gray-200 drop-shadow-md rounded-md border-gray-300 border-[2px] text-center py-[6px]"
                  >
                    {user.is_admin ? "Admin" : "User"}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-row items-center gap-x-3">
                    <Button className="transition-all duration-300">
                      Edit
                    </Button>
                    <Button className="bg-red-600 hover:border-red-700 border-red-600 hover:bg-red-700 transition-all duration-300">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        { <UsersTable users={users} /> }
      </Card>
    </div>
  )
}

export default Users