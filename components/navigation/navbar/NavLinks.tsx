"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
interface Props {
  isMobileNav: boolean;
}

function NavLinks(props: Props) {
  const pathname = usePathname();
  const { isMobileNav = false } = props;
  const userId = 1;
  console.log(isMobileNav);

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO: DAR EL ID DE USUARIO A LA RUTA PROFILE
        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

        console.log("item route", item.route);

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              "flex items-center justify-start gap-4 bg-transparent p-4",
              {
                "primary-gradient rounded-lg text-light-900": isActive,
                "text-dark300": !isActive,
              }
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn({
                "base-bold": isActive,
                "base-medium": !isActive,
                "max-lg:hidden": !isMobileNav,
              })}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
}

export default NavLinks;
