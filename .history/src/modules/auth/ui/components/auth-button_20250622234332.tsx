import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <Button variant="outline" className="">
      <UserCircleIcon />
      Sign In
    </Button>
  );
};
