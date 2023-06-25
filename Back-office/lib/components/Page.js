import { Card, Title, Text } from "@tremor/react"
import Search from "@/lib/components/Search"
import UsersTable from "@/lib/components/Table"
import { useState } from "react"
import React from "react"

export default function IndexPage() {
  const [users, setusers] = useState([
    {
      id: 0,
      name: "amina",
      username: "amina_1",
      email: "amina.larbi@gmail.com",
    },
  ])

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </div>
  )
}
