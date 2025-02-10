import { Icons } from "../shared/icons";

const Sidebar = () => {
  return (
    <div className="w-[100px] justify-between h-[292px] flex bg-white rounded-2xl shadow-sm p-5">
      <div className="bg-gray-50 flex gap-2 flex-col justify-start items-center p-2 rounded-xl w-full h-full">
        <button className="bg-white shadow-sm p-3 rounded-lg flex justify-center items-center">
          <Icons.home className="text-lg" />
        </button>
        <button className="bg-white shadow-sm p-3 rounded-lg flex justify-center items-center">
          <Icons.chat className="text-[#D70c53]" />
        </button>
        <button className="bg-white shadow-sm p-3 rounded-lg flex justify-center items-center">
          <Icons.notification />
        </button>
        <button className="bg-white shadow-sm p-3 rounded-lg flex justify-center items-center">
          <Icons.arrowDown />
        </button>
        <button className="bg-white shadow-sm p-3 rounded-lg flex justify-center items-center">
          <Icons.settings />
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
