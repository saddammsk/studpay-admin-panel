'use client'
import Button from "@/app/components/ui/Button";
import UserAccountTable from "@/app/components/UsersStudent/UserAccountTable";
import React, { useState } from "react";
import { AddAccount } from "./AddAccount";

export const UserAccounts = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      <div className="bg-white pb-6 border border-solid border-gray-3100 shadow-4xl mt-6 rounded-lg">
        <div className="flex items-center justify-between 5xl:px-6 xl:px-3 px-4 pt-6 pb-4">
          <h4 className="text-black-1600 font-inter font-semibold text-lg leading-7 tracking-[-0.45px]">
            User Accounts
          </h4>
          <Button
            onClick={() => setIsOpen(true)}
            iconSrc="/images/plus-icon.svg"
            label="Add Account"
            className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
          />
        </div>
        <UserAccountTable />
      </div>


      <AddAccount isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
  );
};
