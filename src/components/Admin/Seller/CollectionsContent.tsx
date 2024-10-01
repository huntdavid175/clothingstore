"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for collections
const initialCollections = [
  { id: 1, name: "Summer Vibes", items: 2 },
  { id: 2, name: "Everyday Essentials", items: 1 },
];

const CollectionsContent = () => {
  const [collections, setCollections] = useState(initialCollections);
  const [newCollection, setNewCollection] = useState({ name: "", items: [] });

  const handleAddCollection = () => {
    if (newCollection.name) {
      setCollections((prev: any) => [
        ...prev,
        { ...newCollection, id: Date.now() },
      ]);
      setNewCollection({ name: "", items: [] });
    }
  };
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Create New Collection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Collection Name"
              value={newCollection.name}
              onChange={(e) =>
                setNewCollection((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <Button onClick={handleAddCollection}>Add Collection</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Collections</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {collections.map((collection) => (
                <TableRow key={collection.id}>
                  <TableCell>{collection.name}</TableCell>
                  <TableCell>{collection.items}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CollectionsContent;
