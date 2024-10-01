"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for inquiries
const initialInquiries = [
  {
    id: 1,
    product: "Summer T-Shirt",
    customer: "Alice Smith",
    message: "Is this available in size M?",
    date: "2023-06-15",
  },
  {
    id: 2,
    product: "Floral Dress",
    customer: "Emma Johnson",
    message: "Do you ship internationally?",
    date: "2023-06-14",
  },
  {
    id: 3,
    product: "Slim Fit Jeans",
    customer: "Michael Brown",
    message: "What's the inseam length?",
    date: "2023-06-13",
  },
];

const InquiriesContent = () => {
  const [inquiries, setInquiries] = useState(initialInquiries);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.date}</TableCell>
                <TableCell>{inquiry.product}</TableCell>
                <TableCell>{inquiry.customer}</TableCell>
                <TableCell>{inquiry.message}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Reply
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InquiriesContent;
