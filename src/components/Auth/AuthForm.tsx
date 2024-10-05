"use client";

import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InstagramSignup from "@/components/Auth/Instagram/InstagramSignup";
import { useToast } from "@/hooks/use-toast";
import { login, signup } from "@/app/(auth)/seller/auth/actions";
import { Loader2 } from "lucide-react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [formSignupState, formSignupAction] = useFormState(signup, {
    status: 0,
    message: "",
  });

  const [formLoginState, formLoginAction] = useFormState(login, {
    status: 0,
    message: "",
  });

  const { toast } = useToast();

  // Show a toast only when formState changes
  useEffect(() => {
    if (formSignupState.status !== 0) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: formSignupState.message,
        variant: "destructive",
      });

      loading && setLoading(false);
    }

    if (formLoginState.status !== 0) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: formLoginState.message,
        variant: "destructive",
      });

      loading && setLoading(false);
    }
  }, [formSignupState, formLoginState, toast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { email, password, name, confirmPassword });
  };

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} type="submit" className="w-full">
        {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLogin ? "Login" : "Sign Up"}
      </Button>
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold mb-6 text-center">Online Boutique</h1>
      <div className="flex justify-center mb-6">
        <Button
          variant={isLogin ? "default" : "outline"}
          onClick={() => setIsLogin(true)}
          className="mr-2"
        >
          Login
        </Button>
        <Button
          variant={!isLogin ? "default" : "outline"}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </Button>
      </div>
      <form
        action={isLogin ? formLoginAction : formSignupAction}
        className="space-y-4"
      >
        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <SubmitButton />
      </form>
      <InstagramSignup />
    </div>
  );
}
