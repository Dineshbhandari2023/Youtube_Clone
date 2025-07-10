import { useUser } from "@clerk/nextjs";
import React from "react";

export const StudioSidebarHeader = () => {
  const { user } = useUser();
  return <div>Header</div>;
};
