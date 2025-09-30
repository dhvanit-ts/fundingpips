import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="max-w-7xl mx-auto mt-11 w-full flex justify-between items-center">
      <div>Logo</div>
      <div className="py-2">
        <NavigationMenu viewport={false} className="z-30">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Terms of Use</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About us</NavigationMenuTrigger>
              <NavigationMenuContent className="border-zinc-400">
                <ul>
                  <li>
                    <NavigationMenuLink
                      className="text-zinc-200 hover:text-zinc-100 underline-offset-4 hover:underline"
                      asChild
                    >
                      <Link href="/contact-us">Contact us</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="text-zinc-200 hover:text-zinc-100 underline-offset-4 hover:underline"
                      asChild
                    >
                      <Link href="/">About us</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="text-zinc-200 hover:text-zinc-100 underline-offset-4 hover:underline"
                      asChild
                    >
                      <Link href="/">Blogs</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="text-zinc-200 hover:text-zinc-100 underline-offset-4 hover:underline"
                      asChild
                    >
                      <Link href="/">Brand kit</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Affiliate program</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>FAQ</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline">Sign up</Button>
        <Button>Dashboard</Button>
      </div>
    </div>
  );
}

export default Header;
