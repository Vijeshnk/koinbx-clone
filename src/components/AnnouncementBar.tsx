import { Megaphone } from "lucide-react";

const AnnouncementBar = () => (
  <div className="w-full bg-[#15284b] min-h-[36px] flex items-center justify-center px-4 py-1 z-40 border-b border-[#20335c]">
    <span className="flex items-center gap-2 text-[15px] text-white font-medium">
      <Megaphone size={18} className="text-[#31c4d8] mr-2 -mt-0.5" />
      <span className="text-[#31c4d8] font-semibold">KoinBX Users :</span>
      <span>
        KoinBX updated the primary bank to accept INR deposits through IMPS, NEFT, and RTGS.
      </span>
    </span>
  </div>
);

export default AnnouncementBar;
