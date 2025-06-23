"use client";

import { HomeIcon, PlaySquareIcon } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscription",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
];

export const MainSection = () => {
  return <div></div>;
};
