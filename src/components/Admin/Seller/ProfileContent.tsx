"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

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

const ProfileContent = () => {
  const [profile, setProfile] = useState(initialProfile);

  const handleProfileChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  return (
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
};

export default ProfileContent;
