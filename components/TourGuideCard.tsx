import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export interface TourGuide {
  name: string;
  about: string;
  language: string;
  destinations: string;
  phone: string[];
  email: string;
}

interface Props {
  guide: TourGuide;
}

export default function TourGuideCard({ guide }: Props) {
  return (
    <div className="relative bg-white font-montserrat shadow-lg rounded-2xl p-6 sm:p-10 mt-10 w-full flex flex-col md:flex-row gap-10">

      <div className="absolute -top-8 left-4 bg-yellow-300 text-black px-6 py-3 rounded-full text-xl font-semibold">
        {guide.name}
      </div>

      <div className="flex-1 flex flex-col gap-6 mt-3">
        <div>
          <p className="font-semibold text-gray-900 text-lg">About</p>
          <p className="text-gray-800 text-sm sm:text-base mt-1 leading-snug">
            {guide.about}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 text-lg">
            Language Proficiency
          </p>
          <p className="text-gray-800 text-sm sm:text-base mt-1 leading-snug">
            {guide.language}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 text-lg">Assigned Destinations</p>
          <p className="text-gray-800 text-sm sm:text-base mt-1 leading-snug">
            {guide.destinations}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:w-[300px] lg:w-[350px]">

        <div className="border-2 border-yellow-400 rounded-xl px-4 py-3 bg-bg shadow-sm flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-400 text-xl" />
          <div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              Contact Number
            </p>
            {guide.phone.map((num, index) => (
              <p key={index} className="text-gray-800 text-xs sm:text-sm mt-0.5">
                {num}
              </p>
            ))}
          </div>
        </div>

        <div className="border-2 border-yellow-400 rounded-xl px-4 py-3 bg-white shadow-sm flex items-center gap-3">
          <FaEnvelope className="text-yellow-400 text-xl" />
          <div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              Email Address
            </p>
            <p className="text-gray-800 text-xs sm:text-sm mt-0.5 break-all">
              {guide.email}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
