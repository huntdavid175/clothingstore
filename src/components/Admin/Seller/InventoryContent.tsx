"use client";
import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createProduct } from "@/app/(auth)/seller/admin/inventory/actions";
import { useToast } from "@/hooks/use-toast";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

import {
  PlusIcon,
  TrashIcon,
  ImageIcon,
  InstagramIcon,
  DownloadIcon,
  Loader2,
  EditIcon,
} from "lucide-react";

// Mock data for collections
const initialCollections = [
  { id: 1, name: "Summer Vibes", items: 2 },
  { id: 2, name: "Everyday Essentials", items: 1 },
];

// Mock data for initial clothing items
const initialClothes = [
  {
    id: 1,
    name: "Summer T-Shirt",
    category: "Tops",
    price: 19.99,
    images: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    inStock: true,
    tags: ["summer", "casual"],
    collection: "Summer Vibes",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Bottoms",
    price: 49.99,
    images: ["/placeholder.svg?height=100&width=100"],
    inStock: true,
    tags: ["denim", "casual"],
    collection: "Everyday Essentials",
  },
  {
    id: 3,
    name: "Floral Dress",
    category: "Dresses",
    price: 39.99,
    images: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    inStock: false,
    tags: ["floral", "summer", "party"],
    collection: "Summer Vibes",
  },
];

// Mock data for Instagram posts
const mockInstagramPosts: any = [
  {
    id: "IG1",
    imageUrl: "/placeholder.svg?height=300&width=300",
    caption: "New summer collection! #fashion #summer",
    likes: 120,
    comments: 15,
  },
  {
    id: "IG2",
    imageUrl: "/placeholder.svg?height=300&width=300",
    caption: "Vintage finds! #vintage #style",
    likes: 95,
    comments: 8,
  },
  {
    id: "IG3",
    imageUrl: "/placeholder.svg?height=300&width=300",
    caption: "Accessories for every occasion #accessories",
    likes: 150,
    comments: 20,
  },
];

const InventoryContent = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    images: [],
    inStock: true,
    tags: [],
    collection: "",
  });
  const [instagramPosts, setInstagramPosts] = useState([]);

  const [clothes, setClothes] = useState(initialClothes);
  const [isInstagramLinked, setIsInstagramLinked] = useState(false);

  const [collections, setCollections] = useState(initialCollections);
  const [bulkEditItems, setBulkEditItems] = useState<any>([]);

  useEffect(() => {
    // Simulate fetching Instagram posts
    if (isInstagramLinked) {
      setInstagramPosts(mockInstagramPosts);
    }
  }, [isInstagramLinked]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      newItem.name &&
      newItem.category &&
      newItem.price &&
      newItem.images.length > 0
    ) {
      setClothes((prev) => [
        ...prev,
        { ...newItem, id: Date.now(), price: parseFloat(newItem.price) },
      ]);
      setNewItem({
        name: "",
        category: "",
        price: "",
        images: [],
        inStock: true,
        tags: [],
        collection: "",
      });
    }
  };

  //formaction implementation
  const [formState, formAction] = useFormState(createProduct, {
    status: 0,
    message: "",
  });

  //show toast only when formstate changes
  const { toast } = useToast();

  useEffect(() => {
    if (formState.status === 200) {
      toast({
        title: "Success!",
        description: formState.message,
      });
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: formState.message,
        variant: "destructive",
      });
    }
  }, [formState, toast]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: any) => {
    setNewItem((prev) => ({ ...prev, category: value }));
  };

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);
    Promise.all(
      files.map((file: any) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then((images) => {
      setNewItem((prev: any) => ({
        ...prev,
        images: [...prev.images, ...images],
      }));
    });
  };

  const handleDelete = (id: any) => {
    setClothes((prev) => prev.filter((item) => item.id !== id));
  };

  const handleStockToggle = (id: any) => {
    setClothes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  const handleBulkEdit = () => {
    // Implement bulk edit logic here
    console.log("Bulk edit items:", bulkEditItems);
  };

  const handleExport = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(clothes));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "inventory.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleTagChange = (e: any) => {
    const tags = e.target.value.split(",").map((tag: any) => tag.trim());
    setNewItem((prev) => ({ ...prev, tags }));
  };

  const handleCollectionChange = (value: any) => {
    setNewItem((prev) => ({ ...prev, collection: value }));
  };

  const handleInstagramLink = () => {
    // Simulate linking Instagram account
    setIsInstagramLinked(true);
  };

  const handleImportFromInstagram = (postId: any) => {
    const post: any = instagramPosts.find((p: any) => p.id === postId);
    if (post) {
      const newProduct = {
        id: Date.now(),
        name: post.caption.split("#")[0].trim(),
        category: "Uncategorized",
        price: 0,
        images: [post.imageUrl],
        inStock: true,
        tags: post.caption.match(/#\w+/g) || [],
        collection: "",
        instagramId: post.id,
      };
      setClothes((prev) => [...prev, newProduct]);
    }
  };

  const ImageGallery = ({ images }: { images: any }) => (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image: any, index: number) => (
        <img
          key={index}
          src={image}
          alt={`Product image ${index + 1}`}
          className="w-full h-24 object-cover rounded"
        />
      ))}
    </div>
  );

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} type="submit" className="w-full">
        {pending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <PlusIcon className="mr-2 h-4 w-4" />
        )}
        Add Item
      </Button>
    );
  };

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Clothing Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={newItem.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  name="category"
                  value={newItem.category}
                  onValueChange={handleCategoryChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tops">Tops</SelectItem>
                    <SelectItem value="Bottoms">Bottoms</SelectItem>
                    <SelectItem value="Dresses">Dresses</SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={newItem.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="images">Images</Label>
                <Input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={newItem.tags.join(", ")}
                  onChange={handleTagChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="collection">Collection</Label>
                <Select
                  name="collection"
                  value={newItem.collection}
                  onValueChange={handleCollectionChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select collection" />
                  </SelectTrigger>
                  <SelectContent>
                    {collections.map((collection) => (
                      <SelectItem key={collection.id} value={collection.name}>
                        {collection.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {newItem.images.length > 0 && (
              <div className="mt-4">
                <Label>Uploaded Images</Label>
                <ImageGallery images={newItem.images} />
              </div>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Instagram Integration</CardTitle>
        </CardHeader>
        <CardContent>
          {!isInstagramLinked ? (
            <div className="text-center">
              <p className="mb-4">
                Link your Instagram account to import posts as products.
              </p>
              <Button onClick={handleInstagramLink}>
                <InstagramIcon className="mr-2 h-4 w-4" />
                Link Instagram Account
              </Button>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Instagram Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {instagramPosts.map((post: any) => (
                  <Card key={post.id}>
                    <CardContent className="p-4">
                      <img
                        src={post.imageUrl}
                        alt={post.caption}
                        className="w-full h-48 object-cover rounded-md mb-2"
                      />
                      <p className="text-sm mb-2 line-clamp-2">
                        {post.caption}
                      </p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                      <Button
                        className="w-full mt-2"
                        onClick={() => handleImportFromInstagram(post.id)}
                      >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Import as Product
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Clothing Inventory</CardTitle>
          <div className="space-x-2">
            <Button onClick={handleBulkEdit}>
              <EditIcon className="mr-2 h-4 w-4" /> Bulk Edit
            </Button>
            <Button onClick={handleExport}>
              <DownloadIcon className="mr-2 h-4 w-4" /> Export Inventory
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Select</TableHead>
                <TableHead>Images</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>In Stock</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Collection</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clothes.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox
                      checked={bulkEditItems.includes(item.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setBulkEditItems((prev: any) => [...prev, item.id]);
                        } else {
                          setBulkEditItems((prev: any) =>
                            prev.filter((id: any) => id !== item.id)
                          );
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <ImageIcon className="mr-2 h-4 w-4" />
                          View Images ({item.images.length})
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{item.name} Images</DialogTitle>
                        </DialogHeader>
                        <ImageGallery images={item.images} />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Switch
                      checked={item.inStock}
                      onCheckedChange={() => handleStockToggle(item.id)}
                    />
                  </TableCell>
                  <TableCell>{item.tags.join(", ")}</TableCell>
                  <TableCell>{item.collection}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default InventoryContent;
