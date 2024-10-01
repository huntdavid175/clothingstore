"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PlusIcon,
  ShirtIcon,
  TrashIcon,
  ImageIcon,
  HomeIcon,
  PackageIcon,
  UserIcon,
  InstagramIcon,
  BarChart3Icon,
  TagIcon,
  MessageSquareIcon,
  BoxesIcon,
  CalendarIcon,
  Share2Icon,
  DownloadIcon,
  EditIcon,
  SearchIcon,
  PaletteIcon,
  LinkIcon,
  LogOutIcon,
} from "lucide-react";

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

// Mock data for seller profile
const initialProfile = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  storeName: "Jane's Boutique",
  joinDate: "2022-01-15",
  avatar: "/placeholder.svg?height=100&width=100",
  instagramHandle: "@janes_boutique",
  bio: "Curating the finest vintage and modern fashion pieces.",
  website: "www.janesboutique.com",
  socialMedia: {
    facebook: "facebook.com/janesboutique",
    twitter: "twitter.com/janesboutique",
    pinterest: "pinterest.com/janesboutique",
  },
};

// Mock data for analytics
const initialAnalytics = {
  profileViews: 1200,
  productViews: 3500,
  inquiries: 45,
  topProducts: [
    { name: "Summer T-Shirt", views: 500 },
    { name: "Floral Dress", views: 450 },
    { name: "Slim Fit Jeans", views: 300 },
  ],
};

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

// Mock data for collections
const initialCollections = [
  { id: 1, name: "Summer Vibes", items: 2 },
  { id: 2, name: "Everyday Essentials", items: 1 },
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

export default function SellerDashboard() {
  const [clothes, setClothes] = useState(initialClothes);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    images: [],
    inStock: true,
    tags: [],
    collection: "",
  });
  const [profile, setProfile] = useState(initialProfile);
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [collections, setCollections] = useState(initialCollections);
  const [newCollection, setNewCollection] = useState({ name: "", items: [] });
  const [customization, setCustomization] = useState({
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    font: "sans-serif",
  });
  const [seasonalShowcase, setSeasonalShowcase] = useState<any>({
    name: "",
    startDate: "",
    endDate: "",
    items: [],
  });
  const [bulkEditItems, setBulkEditItems] = useState<any>([]);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [isInstagramLinked, setIsInstagramLinked] = useState(false);

  useEffect(() => {
    // Simulate fetching Instagram posts
    if (isInstagramLinked) {
      setInstagramPosts(mockInstagramPosts);
    }
  }, [isInstagramLinked]);

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

  const handleDelete = (id: any) => {
    setClothes((prev) => prev.filter((item) => item.id !== id));
  };

  const handleProfileChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockToggle = (id: any) => {
    setClothes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  const handleTagChange = (e: any) => {
    const tags = e.target.value.split(",").map((tag: any) => tag.trim());
    setNewItem((prev) => ({ ...prev, tags }));
  };

  const handleCollectionChange = (value: any) => {
    setNewItem((prev) => ({ ...prev, collection: value }));
  };

  const handleAddCollection = () => {
    if (newCollection.name) {
      setCollections((prev: any) => [
        ...prev,
        { ...newCollection, id: Date.now() },
      ]);
      setNewCollection({ name: "", items: [] });
    }
  };

  const handleCustomizationChange = (e: any) => {
    const { name, value } = e.target;
    setCustomization((prev) => ({ ...prev, [name]: value }));
  };

  const handleSeasonalShowcaseChange = (e: any) => {
    const { name, value } = e.target;
    setSeasonalShowcase((prev: any) => ({ ...prev, [name]: value }));
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

  const DashboardContent = () => (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
            <ShirtIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clothes.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.profileViews}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Product Views</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.productViews}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
            <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.inquiries}</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analytics.topProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const InventoryContent = () => (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Clothing Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Button type="submit" className="w-full">
              <PlusIcon className="mr-2 h-4 w-4" /> Add Item
            </Button>
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

  const ProfileContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Seller Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="avatar">Profile Picture</Label>
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback>
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleProfileChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="storeName">Store Name</Label>
            <Input
              id="storeName"
              name="storeName"
              value={profile.storeName}
              onChange={handleProfileChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagramHandle">Instagram Handle</Label>
            <Input
              id="instagramHandle"
              name="instagramHandle"
              value={profile.instagramHandle}
              onChange={handleProfileChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              value={profile.website}
              onChange={handleProfileChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleProfileChange}
            />
          </div>
          <div className="space-y-2">
            <Label>Social Media Links</Label>
            <Input
              id="facebook"
              name="facebook"
              value={profile.socialMedia.facebook}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  socialMedia: {
                    ...prev.socialMedia,
                    facebook: e.target.value,
                  },
                }))
              }
              placeholder="Facebook URL"
            />
            <Input
              id="twitter"
              name="twitter"
              value={profile.socialMedia.twitter}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, twitter: e.target.value },
                }))
              }
              placeholder="Twitter URL"
            />
            <Input
              id="pinterest"
              name="pinterest"
              value={profile.socialMedia.pinterest}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  socialMedia: {
                    ...prev.socialMedia,
                    pinterest: e.target.value,
                  },
                }))
              }
              placeholder="Pinterest URL"
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  );

  const CollectionsContent = () => (
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

  const InquiriesContent = () => (
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

  const CustomizationContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Store Customization</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primaryColor">Primary Color</Label>
            <Input
              id="primaryColor"
              name="primaryColor"
              type="color"
              value={customization.primaryColor}
              onChange={handleCustomizationChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondaryColor">Secondary Color</Label>
            <Input
              id="secondaryColor"
              name="secondaryColor"
              type="color"
              value={customization.secondaryColor}
              onChange={handleCustomizationChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="font">Font</Label>
            <Select
              name="font"
              value={customization.font}
              onValueChange={(value) =>
                setCustomization((prev) => ({ ...prev, font: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sans-serif">Sans-serif</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
                <SelectItem value="monospace">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Customization</Button>
        </form>
      </CardContent>
    </Card>
  );

  const SeasonalShowcaseContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Seasonal Showcase</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="showcaseName">Showcase Name</Label>
            <Input
              id="showcaseName"
              name="name"
              value={seasonalShowcase.name}
              onChange={handleSeasonalShowcaseChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={seasonalShowcase.startDate}
              onChange={handleSeasonalShowcaseChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="date"
              value={seasonalShowcase.endDate}
              onChange={handleSeasonalShowcaseChange}
            />
          </div>
          <div className="space-y-2">
            <Label>Select Items for Showcase</Label>
            {clothes.map((item: any) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`item-${item.id}`}
                  checked={seasonalShowcase.items.includes(item.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSeasonalShowcase((prev: any) => ({
                        ...prev,
                        items: [...prev.items, item.id],
                      }));
                    } else {
                      setSeasonalShowcase((prev: any) => ({
                        ...prev,
                        items: prev.items.filter((id: any) => id !== item.id),
                      }));
                    }
                  }}
                />
                <Label htmlFor={`item-${item.id}`}>{item.name}</Label>
              </div>
            ))}
          </div>
          <Button type="submit">Create Showcase</Button>
        </form>
      </CardContent>
    </Card>
  );

  const SEOContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>SEO Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">SEO Tips</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use descriptive, keyword-rich product titles</li>
              <li>Write detailed product descriptions</li>
              <li>Use alt text for all product images</li>
              <li>Create unique content for each product page</li>
              <li>Optimize your store's loading speed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Keyword Suggestions</h3>
            <p>Based on your inventory, consider using these keywords:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.from(new Set(clothes.flatMap((item) => item.tags))).map(
                (tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Seller Dashboard
          </h2>
        </div>
        <nav className="mt-6">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("inventory")}
          >
            <PackageIcon className="mr-2 h-4 w-4" />
            Inventory
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("collections")}
          >
            <BoxesIcon className="mr-2 h-4 w-4" />
            Collections
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("inquiries")}
          >
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Inquiries
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("customization")}
          >
            <PaletteIcon className="mr-2 h-4 w-4" />
            Customization
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("seasonal")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Seasonal Showcase
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("seo")}
          >
            <SearchIcon className="mr-2 h-4 w-4" />
            SEO Tools
          </Button>
        </nav>
        <div className="absolute bottom-4 left-4">
          <Button variant="ghost" onClick={() => console.log("logged out")}>
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">
        <Tabs value={activeTab} className="space-y-4">
          <TabsContent value="dashboard" className="space-y-4">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <DashboardContent />
          </TabsContent>
          <TabsContent value="inventory" className="space-y-4">
            <h2 className="text-2xl font-bold">Inventory Management</h2>
            <InventoryContent />
          </TabsContent>
          <TabsContent value="profile" className="space-y-4">
            <h2 className="text-2xl font-bold">Seller Profile</h2>
            <ProfileContent />
          </TabsContent>
          <TabsContent value="collections" className="space-y-4">
            <h2 className="text-2xl font-bold">Collections</h2>
            <CollectionsContent />
          </TabsContent>
          <TabsContent value="inquiries" className="space-y-4">
            <h2 className="text-2xl font-bold">Customer Inquiries</h2>
            <InquiriesContent />
          </TabsContent>
          <TabsContent value="customization" className="space-y-4">
            <h2 className="text-2xl font-bold">Store Customization</h2>
            <CustomizationContent />
          </TabsContent>
          <TabsContent value="seasonal" className="space-y-4">
            <h2 className="text-2xl font-bold">Seasonal Showcase</h2>
            <SeasonalShowcaseContent />
          </TabsContent>
          <TabsContent value="seo" className="space-y-4">
            <h2 className="text-2xl font-bold">SEO Tools</h2>
            <SEOContent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
