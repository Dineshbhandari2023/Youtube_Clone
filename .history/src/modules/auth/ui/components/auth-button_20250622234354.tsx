import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <Button variant="outline" className="px-4 py-0 font-medium text-blue-50">
      <UserCircleIcon />
      Sign In
    </Button>
  );
};
