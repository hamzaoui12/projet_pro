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
import axios from "axios"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    ;(async () => {
      let { data } = await axios.get(
        "http://localhost:3001/admin/getCateogries"
      )

      setCategories(data.result)
    })()
  }, [])

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Categories</Title>
      <Card className="mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Category Name</TableHeaderCell>
              <TableHeaderCell>Cateogry ID</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Text className="">{category.id}</Text>
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
      </Card>
    </div>
  )
}

export default Categories
