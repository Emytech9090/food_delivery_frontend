import { useEffect, useState } from "react";
import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    title: "Fresh Morning Breakfast",
    caption: "Start your day with warm, freshly prepared goodness.",
    image: image1,
  },
  {
    title: "Healthy Greens Bowl",
    caption: "A perfect mix of crisp vegetables and natural flavors.",
    image: image2,
  },
  {
    title: "Chef’s Special Pasta",
    caption: "Creamy, rich, and crafted with authentic ingredients.",
    image: image3,
  },
  {
    title: "Sweet Dessert Delight",
    caption: "Indulge in a soft and heavenly sweet treat.",
    image: image4,
  },
];

const Herobanner = () => {
  const [idx, setIdx] = useState(2);
  const handleBannerChange = (clicked: "right" | "left") => {
    if (clicked === "left") {
      setIdx((prev) => (prev > 0 ? prev - 1 : banners.length - 1));
    }
    if (clicked === "right") {
      setIdx((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) =>
        prev < banners.length - 1
          ? prev + 1
          : prev === banners.length - 1
          ? 0
          : prev > 0
          ? prev - 1
          : 0
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const arrowStyle =
    "bg-black/50 hover:bg-black/80 h-14 w-14 flex rounded-full items-center justify-center z-50";
  return (
    <div className="flex">
      {banners.map(
        (item, index) =>
          index === idx && (
            <div className="flex items-center w-full">
              <div className="absolute  flex items-center w-full justify-between px-4">
                <div
                  onClick={() => handleBannerChange("left")}
                  className={arrowStyle}
                >
                  <ChevronLeft
                    size={32}
                    className="text-white hover:text-lg hover:cursor-pointer"
                  />
                </div>
                <div
                  onClick={() => handleBannerChange("right")}
                  className={arrowStyle}
                >
                  <ChevronRight
                    size={32}
                    className="text-white hover:text-lg hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="absolute bg-black/60 inset-0 flex flex-col items-center justify-center top-14 gap-y-4">
                <h2 className="font-bold text-5xl text-white">{item.title}</h2>
                <p className="font-light text-xl text-white">{item.title}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className=" w-screen h-[99vh] object-center"
              />
            </div>
          )
      )}
    </div>
  );
};

export default Herobanner;
