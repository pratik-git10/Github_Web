"use client";

import { usePathname } from "next/navigation";

export const useRouterHook = () => {
  const path = usePathname();

  // Extract the path after the first '/'
  const current = path.split("/").slice(1).join("/");

  return current || "Home"; // Return "Home" if the path is empty
};
