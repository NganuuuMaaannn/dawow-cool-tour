"use client";

export default function References() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-sm font-semibold text-gray-400 mb-6">
        References
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-400">
        {[
          {
            href: "https://www.facebook.com/share/p/1JbcpjX7e3/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Ata Manobo",
          },
          {
            href: "https://www.facebook.com/share/p/16dSy7z97j/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Bagobo - Klata",
          },
          {
            href: "https://www.facebook.com/share/p/1Wfi1tmH4g/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Bagobo - Tagabawa",
          },
          {
            href: "https://www.facebook.com/share/p/14GsKCNgEja/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Matigsalog",
          },
          {
            href: "https://www.facebook.com/share/p/14GsKCNgEja/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Ovu Manuvu",
          },
          {
            href: "https://www.facebook.com/share/p/1GdhAz8nb5/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Iranun",
          },
          {
            href: "https://www.facebook.com/share/p/1YzFtPSNmy/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Bangsa - Kagan",
          },
          {
            href: "https://www.facebook.com/share/p/1ER83SJWBe/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Maguindanaon",
          },
          {
            href: "https://www.facebook.com/share/p/14Qn7yghvct/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Maranao",
          },
          {
            href: "https://www.facebook.com/share/p/1CpSVUer4D/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Bangsa - Sama",
          },
          {
            href: "https://www.facebook.com/share/p/1BFkng3APz/?mibextid=wwXIfr",
            text: "Kadayawan sa Davao. (2025). Tausug",
          },
          {
            href: "https://www.sunstar.com.ph/amp/story/davao/feature/know-the-11-tribes-at-the-kadayawan-village",
            text: "SunStar. (2022). 11 Deputy Mayor",
          },
        ].map((ref, index) => (
          <p key={index} className="text-center sm:text-center">
            <a
              href={ref.href}
              className="block hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ref.text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
