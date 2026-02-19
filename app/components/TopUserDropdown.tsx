"use client";

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Dialog } from "@headlessui/react";

export const TopUserDropdown = () => {
  const [openLogout, setOpenLogout] = useState(false);

  const handleLogout = () => {
    setOpenLogout(false);
    // signOut() or dispatch(logout())
  };

  return (
    <>
      <Menu>
        <MenuButton className="flex items-center cursor-pointer outline-0 gap-4">
          <img src="/images/avatar.png" alt="" className="shadow-4xl border border-solid border-gray1600 rounded-full" />
          <span className="flex items-center w-4 h-4">
            <img src="/images/user-dropfown.svg" className="md:block hidden" alt="" />
          </span>
        </MenuButton>

        <MenuItems
          anchor="bottom end"
          className="w-52 z-50 outline-0 rounded-xl border border-gray-100 bg-white shadow-lg p-1 text-sm"
        >
          <MenuItem>
            {({ active }) => (
              <button
                className={`w-full rounded-lg px-3 py-1.5 text-left ${active ? "bg-gray-1300" : ""
                  }`}
              >
                View profile
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ active }) => (
              <button
                className={`w-full rounded-lg px-3 py-1.5 text-left ${active ? "bg-gray-1300" : ""
                  }`}
              >
                Account settings
              </button>
            )}
          </MenuItem>

          <div className="my-1 h-px bg-gray-100" />

          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => setOpenLogout(true)}
                className={`w-full rounded-lg px-3 py-1.5 text-left text-red-600 ${active ? "bg-gray-1300" : ""
                  }`}
              >
                Log out
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>

      {/* ================= LOGOUT MODAL ================= */}
      <Dialog
        open={openLogout}
        onClose={() => setOpenLogout(false)}
        className="relative z-99"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-6">
            <Dialog.Title className="text-lg font-semibold text-gray-900">
              Confirm logout
            </Dialog.Title>

            <Dialog.Description className="mt-2 text-sm text-gray-600">
              Are you sure you want to log out?
            </Dialog.Description>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setOpenLogout(false)}
                className="px-4 py-2 cursor-pointer transition duration-300 hover:bg-gray-1300 rounded-lg text-sm border border-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 transition duration-300 hover:bg-red-500 cursor-pointer rounded-lg text-sm bg-red-600 text-white"
              >
                Log out
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
