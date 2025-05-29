"use client"
import React from 'react'
import { Chart } from '@/app/_components/ui/PieChart'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"

export default function Admin() {
    const { data } = useQuery({
        queryKey: ["reservations"],
        queryFn: () => axios.get("/api/v1/userspace/reservation")
            .then(res => res.data)
            .catch(err => console.log(err)),
    })  
    console.log(data)
    
  return (
    <div className="flex flex-col p-20 h-screen">
      <Chart data={data} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Repair Name</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.repairName}</TableCell>
              <TableCell>{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
