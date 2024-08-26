"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  Pencil,
  Trash2,
  PizzaIcon,
  ClipboardList,
  DollarSign,
  BarChart,
} from "lucide-react";

interface Pizza {
  id: number;
  name: string;
  category: string;
  details: string;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

interface Order {
  id: number;
  customerName: string;
  items: { name: string; size: string; quantity: number }[];
  totalAmount: number;
  status: "Pending" | "Preparing" | "Ready" | "Delivered";
  orderDate: string;
}

// Mock data for current stock
const initialMockStock: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    category: "Vegetarian",
    details: "Classic cheese and tomato",
    small: 8.99,
    medium: 10.99,
    large: 12.99,
    extraLarge: 14.99,
  },
  {
    id: 2,
    name: "Pepperoni",
    category: "Meat Lovers",
    details: "Loaded with pepperoni",
    small: 9.99,
    medium: 11.99,
    large: 13.99,
    extraLarge: 15.99,
  },
  {
    id: 3,
    name: "Supreme",
    category: "Specialty",
    details: "The works!",
    small: 10.99,
    medium: 12.99,
    large: 14.99,
    extraLarge: 16.99,
  },
  {
    id: 4,
    name: "Veggie Delight",
    category: "Vegetarian",
    details: "Assorted vegetables",
    small: 9.99,
    medium: 11.99,
    large: 13.99,
    extraLarge: 15.99,
  },
  {
    id: 5,
    name: "Meat Feast",
    category: "Meat Lovers",
    details: "For serious meat lovers",
    small: 11.99,
    medium: 13.99,
    large: 15.99,
    extraLarge: 17.99,
  },
];

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    items: [
      { name: "Margherita", size: "Medium", quantity: 2 },
      { name: "Pepperoni", size: "Large", quantity: 1 },
    ],
    totalAmount: 35.97,
    status: "Preparing",
    orderDate: "2023-06-01T14:30:00Z",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    items: [
      { name: "Veggie Delight", size: "Small", quantity: 1 },
      { name: "Supreme", size: "Extra Large", quantity: 1 },
    ],
    totalAmount: 26.98,
    status: "Pending",
    orderDate: "2023-06-01T15:45:00Z",
  },
  {
    id: 3,
    customerName: "Bob Johnson",
    items: [{ name: "Meat Feast", size: "Large", quantity: 2 }],
    totalAmount: 31.98,
    status: "Ready",
    orderDate: "2023-06-01T16:20:00Z",
  },
  {
    id: 4,
    customerName: "Alice Brown",
    items: [
      { name: "Margherita", size: "Small", quantity: 1 },
      { name: "Pepperoni", size: "Medium", quantity: 1 },
      { name: "Supreme", size: "Large", quantity: 1 },
    ],
    totalAmount: 37.97,
    status: "Delivered",
    orderDate: "2023-06-01T13:10:00Z",
  },
];

// Mock revenue data
const mockRevenueData = {
  daily: 1234.56,
  weekly: 8765.43,
  monthly: 35678.9,
  yearly: 423456.78,
};

export default function Component() {
  const [activeView, setActiveView] = useState("stock");
  const [pizzaName, setPizzaName] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [prices, setPrices] = useState({
    small: "",
    medium: "",
    large: "",
    extraLarge: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Pizza;
    direction: "ascending" | "descending";
  } | null>(null);
  const [editingPizza, setEditingPizza] = useState<Pizza | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deletingPizza, setDeletingPizza] = useState<Pizza | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [stock, setStock] = useState(initialMockStock);
  const [orders, setOrders] = useState(mockOrders);
  const [orderSortConfig, setOrderSortConfig] = useState<{
    key: keyof Order;
    direction: "ascending" | "descending";
  } | null>(null);

  const handlePriceChange = (size: keyof typeof prices, value: string) => {
    setPrices((prev) => ({ ...prev, [size]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ pizzaName, category, details, prices, image });
    // Reset form after submission
    setPizzaName("");
    setCategory("");
    setDetails("");
    setPrices({ small: "", medium: "", large: "", extraLarge: "" });
    setImage(null);
  };

  const filteredStock = stock.filter(
    (pizza) =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pizza.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic for stock
  const sortedStock =
    sortConfig !== null
      ? [...filteredStock].sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        })
      : filteredStock;

  // Sorting logic for orders
  const sortedOrders =
    orderSortConfig !== null
      ? [...orders].sort((a, b) => {
          if (a[orderSortConfig.key] < b[orderSortConfig.key]) {
            return orderSortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[orderSortConfig.key] > b[orderSortConfig.key]) {
            return orderSortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        })
      : orders;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedStock.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedStock.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const requestSort = (key: keyof Pizza) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const requestOrderSort = (key: keyof Order) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      orderSortConfig &&
      orderSortConfig.key === key &&
      orderSortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setOrderSortConfig({ key, direction });
  };

  const handleEdit = (pizza: Pizza) => {
    setEditingPizza(pizza);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (pizza: Pizza) => {
    setDeletingPizza(pizza);
    setIsDeleteDialogOpen(true);
  };

  const confirmEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPizza) {
      setStock((prevStock) =>
        prevStock.map((pizza) =>
          pizza.id === editingPizza.id ? editingPizza : pizza
        )
      );
      setIsEditDialogOpen(false);
    }
  };

  const confirmDelete = () => {
    if (deletingPizza) {
      setStock((prevStock) =>
        prevStock.filter((pizza) => pizza.id !== deletingPizza.id)
      );
      setIsDeleteDialogOpen(false);
    }
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Preparing":
        return "bg-blue-500";
      case "Ready":
        return "bg-green-500";
      case "Delivered":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Pizza Dashboard</h2>
          <nav>
            <Button
              variant={activeView === "stock" ? "default" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveView("stock")}
            >
              <PizzaIcon className="mr-2 h-4 w-4" />
              Manage Stock
            </Button>
            <Button
              variant={activeView === "orders" ? "default" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveView("orders")}
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              View Orders
            </Button>
            <Button
              variant={activeView === "revenue" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveView("revenue")}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Track Revenue
            </Button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeView === "stock" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Manage Stock</h2>
            <Card>
              <CardHeader>
                <CardTitle>Add New Pizza</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pizzaName">Pizza Name</Label>
                      <Input
                        id="pizzaName"
                        value={pizzaName}
                        onChange={(e) => setPizzaName(e.target.value)}
                        placeholder="Enter pizza name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="meat">Meat Lovers</SelectItem>
                          <SelectItem value="specialty">Specialty</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="details">Details</Label>
                    <Textarea
                      id="details"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Enter pizza details"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(Object.keys(prices) as Array<keyof typeof prices>).map(
                      (size) => (
                        <div key={size} className="space-y-2">
                          <Label htmlFor={size}>
                            {size.charAt(0).toUpperCase() + size.slice(1)} Price
                          </Label>
                          <Input
                            id={size}
                            type="number"
                            value={prices[size]}
                            onChange={(e) =>
                              handlePriceChange(size, e.target.value)
                            }
                            placeholder={`${
                              size.charAt(0).toUpperCase() + size.slice(1)
                            } price`}
                            min="0"
                            step="0.01"
                          />
                        </div>
                      )
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Upload Image</Label>
                    <Input
                      id="image"
                      type="file"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Add Pizza to Stock
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Current Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search pizzas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            <Button
                              variant="ghost"
                              onClick={() => requestSort("name")}
                            >
                              Name
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              onClick={() => requestSort("category")}
                            >
                              Category
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              onClick={() => requestSort("small")}
                            >
                              Small
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              onClick={() => requestSort("medium")}
                            >
                              Medium
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              onClick={() => requestSort("large")}
                            >
                              Large
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              onClick={() => requestSort("extraLarge")}
                            >
                              Extra Large
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentItems.map((pizza) => (
                          <TableRow key={pizza.id}>
                            <TableCell className="font-medium">
                              {pizza.name}
                            </TableCell>
                            <TableCell>{pizza.category}</TableCell>
                            <TableCell>${pizza.small.toFixed(2)}</TableCell>
                            <TableCell>${pizza.medium.toFixed(2)}</TableCell>
                            <TableCell>${pizza.large.toFixed(2)}</TableCell>
                            <TableCell>
                              ${pizza.extraLarge.toFixed(2)}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEdit(pizza)}
                              >
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(pizza)}
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      Showing {indexOfFirstItem + 1}-
                      {Math.min(indexOfLastItem, sortedStock.length)} of{" "}
                      {sortedStock.length}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(1)}
                        disabled={currentPage === 1}
                      >
                        <ChevronsLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span>
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(totalPages)}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronsRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeView === "orders" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">View Orders</h2>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">
                          <Button
                            variant="ghost"
                            onClick={() => requestOrderSort("id")}
                          >
                            Order ID
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>
                          <Button
                            variant="ghost"
                            onClick={() => requestOrderSort("customerName")}
                          >
                            Customer
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>
                          <Button
                            variant="ghost"
                            onClick={() => requestOrderSort("totalAmount")}
                          >
                            Total
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>
                          <Button
                            variant="ghost"
                            onClick={() => requestOrderSort("status")}
                          >
                            Status
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>
                          <Button
                            variant="ghost"
                            onClick={() => requestOrderSort("orderDate")}
                          >
                            Order Date
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">
                            {order.id}
                          </TableCell>
                          <TableCell>{order.customerName}</TableCell>
                          <TableCell>
                            <ul>
                              {order.items.map((item, index) => (
                                <li key={index}>
                                  {item.quantity}x {item.name} ({item.size})
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                          <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge
                              className={`${getStatusColor(
                                order.status
                              )} text-white`}
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(order.orderDate).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeView === "revenue" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Track Revenue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(mockRevenueData).map(([period, amount]) => (
                <Card key={period}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {period.charAt(0).toUpperCase() + period.slice(1)} Revenue
                    </CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${amount.toFixed(2)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* You can add more detailed revenue charts or tables here */}
          </div>
        )}
      </main>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Pizza</DialogTitle>
          </DialogHeader>
          {editingPizza && (
            <form onSubmit={confirmEdit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="edit-name"
                    value={editingPizza.name}
                    onChange={(e) =>
                      setEditingPizza({ ...editingPizza, name: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-category" className="text-right">
                    Category
                  </Label>
                  <Select
                    value={editingPizza.category}
                    onValueChange={(value) =>
                      setEditingPizza({ ...editingPizza, category: value })
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="Meat Lovers">Meat Lovers</SelectItem>
                      <SelectItem value="Specialty">Specialty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-small" className="text-right">
                    Small Price
                  </Label>
                  <Input
                    id="edit-small"
                    type="number"
                    value={editingPizza.small}
                    onChange={(e) =>
                      setEditingPizza({
                        ...editingPizza,
                        small: parseFloat(e.target.value),
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-medium" className="text-right">
                    Medium Price
                  </Label>
                  <Input
                    id="edit-medium"
                    type="number"
                    value={editingPizza.medium}
                    onChange={(e) =>
                      setEditingPizza({
                        ...editingPizza,
                        medium: parseFloat(e.target.value),
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-large" className="text-right">
                    Large Price
                  </Label>
                  <Input
                    id="edit-large"
                    type="number"
                    value={editingPizza.large}
                    onChange={(e) =>
                      setEditingPizza({
                        ...editingPizza,
                        large: parseFloat(e.target.value),
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-extraLarge" className="text-right">
                    Extra Large Price
                  </Label>
                  <Input
                    id="edit-extraLarge"
                    type="number"
                    value={editingPizza.extraLarge}
                    onChange={(e) =>
                      setEditingPizza({
                        ...editingPizza,
                        extraLarge: parseFloat(e.target.value),
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this pizza?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              pizza from your stock.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
