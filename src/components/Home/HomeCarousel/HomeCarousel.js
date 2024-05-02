import { Carousel } from "rsuite";

const imageUrls = [
  "/Home/HomeCarousel/diwali_2023.jpg",
  "/Home/HomeCarousel/Kamada_Ekadashi_24.jpg",
  "/Home/HomeCarousel/Nav_varsha_2024.jpg",
  "/Home/HomeCarousel/SahdevSpecial(BAV)class.jpg",
];

const HomeCarousel = () => (
  <div className="h-[75vh] pb-5 md:h-screen w-full flex items-center md:justify-center flex-col">
    <span className="md:hidden text-4xl text-[#ff7a29]">Events Calender</span>
    <Carousel autoplay className="custom-slider mt-8">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className="w-full h-[100%]"
          style={{ backgroundColor: "#f3f4f6 !important" }}
        >
          <img
            src={imageUrl}
            className="object-contain w-full h-full"
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default HomeCarousel;
