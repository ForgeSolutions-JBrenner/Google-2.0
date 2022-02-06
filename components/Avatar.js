import * as React from 'react'
import {Menu, Transition} from '@headlessui/react'
import {signIn, signOut, useSession} from 'next-auth/react'
import Image from 'next/image';

function Avatar({ url, className }) {
  const {data: session, status } = useSession();
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="">
                <Menu.Button className="inline-flex justify-center w-full text-sm font-medium leading-5 ">
                  <Image
                    src={url}
                    className={`rounded-full h-10 w-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
                    loading="lazy"
                    alt="Avatar"
                  />
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm leading-5 font-bold">Welcome, {session.user.name}!</p>
                    <p className='mt-2'>{session.user.email}</p>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#account-settings"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#support"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item
                      as="span"
                      disabled
                      className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                    >
                      New feature (soon)
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#license"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/api/auth/singout`}
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Avatar;
