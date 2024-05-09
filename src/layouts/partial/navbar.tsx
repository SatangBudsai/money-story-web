"use client";

import React, { useState, ReactNode } from "react";
import { MenuSidebar } from "./sidebar";
import router from "next/router";
import { Icon } from "@iconify/react";
import { Button, Card, Tooltip } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@/components/drawer";
import SwicthThemes from "@/components/swicth-themes";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const logout = () => {
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-[40]">
      <div className="bg-gradient-to-b from-background/80 from-30% to-background/0 p-6 pt-5 max-md:p-5  max-md:pt-3">
        <Card className="flex flex-row items-center justify-between px-5 py-2 bg-opacity-90">
          <div className="flex items-center gap-5">
            <div className="lg:hidden">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsOpenToggle(!isOpenToggle);
                }}
              >
                <Icon icon="lucide:menu" className="w-6 h-6" />
              </div>
              <Drawer
                direction="left"
                open={isOpenToggle}
                onClose={() => {
                  setIsOpenToggle(!isOpenToggle);
                }}
                size={"18rem"}
                className="px-5"
              >
                <MenuSidebar />
              </Drawer>
            </div>
            <div className="uppercase">Asset Me</div>
          </div>
          <div className="flex items-center gap-2">
            <SwicthThemes />
            <Tooltip
              showArrow={true}
              content="ออกจากระบบ"
              delay={0}
              closeDelay={200}
            >
              <Button isIconOnly variant="light" onClick={logout}>
                <Icon icon="lucide:log-out" className="w-6 h-6" />
              </Button>
            </Tooltip>
          </div>
        </Card>
      </div>
    </nav>
  );
};

export default Navbar;
