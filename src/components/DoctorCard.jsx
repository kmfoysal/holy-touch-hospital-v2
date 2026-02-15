import { Phone } from "lucide-react";
import { hospitalInfo } from "../data/data"; // Assuming you have phone numbers here

const DoctorCard = ({ doctor }) => {
  return (
    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all duration-300 h-full">
      {/* 1. Top Left Badge (Department) - Optional */}
      <div className="absolute top-0 left-0 bg-orange-500 text-white px-6 py-2 rounded-br-2xl font-bold z-10">
        {doctor.department}
      </div>

      <div className="p-6 pb-24 grid sm:grid-cols-12 gap-4 items-center relative z-0">
        {/* LEFT COLUMN: Text Info */}
        <div className="sm:col-span-8 lg:col-span-12 xl:col-span-8 space-y-4 pt-2 sm:pt-8  order-2 sm:order-1 lg:order-2 xl:order-1">
          {/* Name & Degrees */}
          <div>
            <h2 className="text-2xl  font-bold text-medical-900 font-['Hind_Siliguri']">
              {doctor.name}
            </h2>
            <p className="text-orange-600 font-bold text-sm md:text-base font-['Hind_Siliguri']">
              {doctor.degrees}
            </p>
          </div>

          {/* Position & Institute */}
          <div className="space-y-1">
            <p className="text-slate-800 font-bold text-lg font-['Hind_Siliguri']">
              {doctor.specialty}
            </p>
            <p className="text-slate-500 font-medium text-sm font-['Hind_Siliguri']">
              {doctor.position}
            </p>
            {/* If you have institute data separate, put it here */}
            <p className="text-slate-500 text-sm font-['Hind_Siliguri']">
              {doctor.hospital ||
                "পটুয়াখালী মেডিকেল কলেজ হাসপাতাল, পটুয়াখালী।"}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Circular Image */}
        <div className="sm:col-span-4 lg:col-span-12 xl:col-span-4 flex justify-center relative order-1 sm:order-2 lg:order-1 xl:order-2">
          <div className="shrink-0 w-48 h-48  rounded-full border-[6px] border-medical-500 shadow-2xl overflow-hidden bg-slate-200 relative z-10">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* 3. BOTTOM CURVE (The Teal Wave Footer) */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-medical-600 z-10">
        <div className="text-center w-50 mx-auto bg-orange-500 text-white px-6 py-1 rounded-br-2xl rounded-tl-2xl font-semibold -mt-4 shadow-md">
          Contact for Details
        </div>
        {/* Footer Content (Logo & Address) */}
        <div className="absolute bottom-0 w-full h-full flex items-center justify-between px-6 md:px-10 text-white">
          <div className="hidden md:flex items-center gap-2 opacity-90">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
              H
            </div>
            <span className="font-bold tracking-wider text-sm">
              HOLY TOUCH HOSPITAL
            </span>
          </div>

          <div className="flex flex-col items-center md:items-end text-right text-base font-['Hind_Siliguri'] opacity-90 w-full md:w-auto">
            <div className="flex gap-2 text-white font-semibold text-base">
              <a
                href={`tel:${hospitalInfo.phone[0]}`}
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <Phone size={16} className="text-orange-500" />
                {hospitalInfo.phone[0]}
              </a>
              <span className=" text-slate-300">|</span>
              <a
                href={`tel:${hospitalInfo.phone[1]}`}
                className="flex items-center gap-2 hover:text-orange-500 transition"
              >
                <Phone size={16} className="text-orange-500" />
                {hospitalInfo.phone[1]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
