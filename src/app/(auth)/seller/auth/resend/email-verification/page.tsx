"use client";

import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react";
import { resendEmailVerification } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const EmailVerificationResendPage = () => {
  const [formState, formAction] = useFormState(resendEmailVerification, {
    status: 0,
    message: "",
  });

  const { toast } = useToast();

  useEffect(() => {
    if (formState.status !== 0 && formState.status !== 200) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: formState.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Email verification resent!",
        description: "Please check your email for verification link",
      });
    }
  }, [formState, toast]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} type="submit" className="w-full">
        {pending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}
        Resend Email Verification
      </Button>
    );
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form action={formAction}>
        <SubmitButton />
      </form>
    </div>
  );
};

export default EmailVerificationResendPage;
