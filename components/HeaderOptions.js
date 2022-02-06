import HeaderOption from "./HeaderOption";
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from '@heroicons/react/outline'

function HeaderOptions() {
  return (
    // By default flex is row 
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    border-b md:pl-32">
      {/*  Left Options */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected/>
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />

      </div>

      {/* Right Options */}
      <div className="flex space-x-4">
<p className="cursor-pointer hover:text-blue-500">Settings</p>
<p className="cursor-pointer hover:text-blue-500">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
