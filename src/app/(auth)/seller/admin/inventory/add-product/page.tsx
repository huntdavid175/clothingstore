"use client";
import { useState, useEffect, useRef, ReactElement } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createProduct,
  uploadImages,
} from "@/app/(auth)/seller/admin/inventory/actions";
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
  Pencil,
  BookCheck,
  EditIcon,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

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

const AddProduct = () => {
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

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (
  //     newItem.name &&
  //     newItem.category &&
  //     newItem.price &&
  //     newItem.images.length > 0
  //   ) {
  //     setClothes((prev) => [
  //       ...prev,
  //       { ...newItem, id: Date.now(), price: parseFloat(newItem.price) },
  //     ]);
  //     setNewItem({
  //       name: "",
  //       category: "",
  //       price: "",
  //       images: [],
  //       inStock: true,
  //       tags: [],
  //       collection: "",
  //     });
  //   }
  // };

  const formRef = useRef<HTMLFormElement>(null);

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

  useEffect(() => {
    if (newItem.images.length > 0) {
      const uploadImagesFunc = async () => {
        await uploadImages(newItem.images[0]);
      };

      uploadImagesFunc();
    }
  }, [newItem.images]);

  console.log(newItem.images);

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
    <div className="grid grid-cols-7 gap-2">
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

  const SubmitButton = ({
    name,
    classes,
    icon,
  }: {
    name: string;
    classes: string;
    icon: React.ReactNode;
  }) => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} type="submit" className={classes}>
        {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
        {name}
      </Button>
    );
  };

  return (
    <form
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset(); //reset form after submission
      }}
      className="space-y-4"
      ref={formRef}
    >
      <div className="w-full flex lg:justify-between">
        <h2 className="text-2xl font-bold">Add Product</h2>
        <div className="flex space-x-4">
          {/* <Button className="bg-white text-black hover:text-white hover:bg-zinc-500">
            Save Draft
          </Button> */}

          <SubmitButton
            name="Save Draft"
            classes="bg-white text-black hover:text-white hover:bg-zinc-500 "
            icon={<Pencil className="mr-2 h-4 w-4" />}
          />
          <SubmitButton
            name="Publish"
            classes=""
            icon={<BookCheck className="mr-2 h-4 w-4" />}
          />
          {/* <Button color="indigo">Publish</Button> */}
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-x-4">
        <div className="flex-2 flex-grow">
          <Card className="mb-2">
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    // value={newItem.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="category">Gender Category</Label>
                  <Select
                    name="gender"
                    // value={newItem.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tops">Men</SelectItem>
                      <SelectItem value="Bottoms">Women</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                {/* <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    name="category"
                    // value={newItem.category}
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
                </div> */}
                {/* <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    // value={newItem.price}
                    onChange={handleInputChange}
                    required
                  />
                </div> */}
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
                {/* <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={newItem.tags.join(", ")}
                    onChange={handleTagChange}
                  />
                </div> */}
                {/* <div className="space-y-2">
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
        </div> */}
                {/* <div className="space-y-2">
                  <Label htmlFor="price">Stock Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    step="1"
                    // value={newItem.price}
                    // onChange={handleInputChange}
                  />
                </div> */}
              </div>

              {newItem.images.length > 0 && (
                <div className="mt-4">
                  <Label>Uploaded Images</Label>
                  <ImageGallery images={newItem.images} />
                </div>
              )}
              {/* <SubmitButton /> */}
            </CardContent>
          </Card>

          {/* card 2 */}
          <Card className="mb-2">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    // value={newItem.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-zinc-500">
                    Sale Price ($)
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    disabled
                    // value={newItem.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 flex-grow flex-shrink-0 lg:flex-[0_0_400px]">
          <Card className="mb-2">
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Product status</Label>
                  <Select
                    name="product-status"
                    // value={newItem.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tops">Published</SelectItem>
                      <SelectItem value="Bottoms">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* another  */}

          <Card className="mb-2">
            <CardHeader>
              <CardTitle>Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Gender Category</Label>
                  <Select
                    name="gender"
                    // value={newItem.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tops">Men</SelectItem>
                      <SelectItem value="Bottoms">Women</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    name="category"
                    // value={newItem.category}
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
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={newItem.tags.join(", ")}
                    onChange={handleTagChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* another 2 */}
          {/* <Card className="mb-2">
          <CardHeader>
            <CardTitle>Product Status</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action={async (formData) => {
                await formAction(formData);
                formRef.current?.reset(); //reset form after submission
              }}
              className="space-y-4"
              ref={formRef}
            >
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Product status</Label>
                  <Select
                    name="product-status"
                    // value={newItem.category}
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tops">Published</SelectItem>
                      <SelectItem value="Bottoms">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
        </Card> */}
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
