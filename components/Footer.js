import { GlobeAltIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-200 text-sm text-gray-500">
      <div className="px-8 py-4">
        <p>United States</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
        <div className="flex justify-center items-center p-2 text-md md:col-span-2 lg:col-span-1
        lg:col-start-2">
          <GlobeAltIcon className="w-6 h-6 text-green-600 animate-pulse" />
          Carbon Neutral since 2007
        </div>
        <div className="flex justify-center items-center ml-2 space-x-8 whitespace-nowrap md:justify-self-start">
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search Works</p>
        </div>
        <div className="flex justify-center items-center mr-2 space-x-8 md:ml-auto">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
