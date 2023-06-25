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

const Users = () => {
  const [products, setproducts] = useState([
    {
      name: "CHAISE POUR ADULTE",
      description: "Une très jolie chaise pour adulte",
      stock: 10,
      price: 150,
    },
    {
      name: "CHAISE POUR ADULTE",
      description: "Une très jolie chaise pour adulte",
      stock: 10,
      price: 150,
    },
    {
      name: "CHAISE POUR ADULTE",
      description: "Une très jolie chaise pour adulte",
      stock: 10,
      price: 150,
    },
    {
      name: "CHAISE POUR ADULTE",
      description: "Une très jolie chaise pour adulte",
      stock: 10,
      price: 150,
    },
  ])

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Products</Title>
      <Card className="mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Product Name</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={Math.random}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <Text>{product.stock}</Text>
                </TableCell>
                <TableCell>
                  <Text>${product.price}</Text>
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
