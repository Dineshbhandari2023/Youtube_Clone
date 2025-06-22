import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <Button variant="outline">
      <UserCircleIcon />
      Sign In
    </Button>
  );
};
