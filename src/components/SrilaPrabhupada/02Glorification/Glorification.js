import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const glorifications = [
  {
    name: "PM Narendra Modi",
    statement:
      "His Divine Grace A. C. Bhaktivedanta Swami Prabhupada is doing great work, and his books are significant. Srila Prabhupada and ISKCON took up this great responsibility of propounding Bhakti Yoga to the world. He worked to connect Bhakti Vedanta with the consciousness of the world. This was no ordinary task. He started a global mission like ISKCON at the age of about 70, when people become inactive. This is a huge inspiration for our society and for every person.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0laVIc9IBDdvK-b0YsbsaJReUImtXlbbmVch2Jl0jug&s",
  },
  {
    name: "Former PM Lal Bahadur Shastri",
    statement:
      "His Divine Grace A. C. Bhaktivedanta Swami Prabhupada is doing great work, and his books are significant contributions to the salvation of mankind.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEi8AQrGDMH2BsoYVoEmSPpm3bc9hHlmGIpT05a2oOXA&s",
  },
  {
    name: "Alfered Ford",
    statement:
      "I am eternally grateful to Srila Prabhupada for illuminating my path with the timeless wisdom of Krishna consciousness. His tireless dedication to sharing these teachings with the world has transformed countless lives, including my own. Through his guidance and example, I have found profound meaning and purpose, and I am deeply indebted to him for his boundless compassion and wisdom.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ymv_Gk9RdBV56PgigVANYbErQvoNm2A23DBPZuHGkQ&s",
  },
  {
    name: "Steve Jobs",
    statement:
      "I didn’t have a dorm room, so I slept on the floor in friends’ rooms. I returned coke bottles for the 5¢ deposits to buy food with. And I would walk the 7 miles across town every Sunday night to get one good meal a week at the Hare Krishna temple. I loved it.",
    img: "https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png",
  },
  {
    name: "CM Yogi Adityanath",
    statement:
      "I bow down crores of times to the Founder-Acharya of ISKCON His Divine Grace Bhaktivedanta Swami Srila Prabhupada on this occasion of his 125th birth anniversary celebrations. He spread the culture of Sanatan dharma all over the world based on the teachings of Lord Krishna in the Bhagavad-Gita.",
    img: "https://c.ndtvimg.com/2021-08/35lhcs7g_yogi-adityanath-afp_625x300_19_August_21.jpg",
  },
];

const Glorification = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="mt-[-110px] bg-[#e5b776] pt-48 pb-36 "
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%" }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        interval={5000}
        showThumbs={false}
        selectedItem={index}
        onChange={handleSelect}
      >
        {glorifications.map((glorification, index) => (
          <div key={index}>
            <div className="w-[97%] md:w-10/12 mx-auto px-4 md:px-6 py-6 bg-[#d17a29] gap-2 md:gap-5 flex flex-col md:flex-row items-center rounded-xl">
              <img
                src={glorification.img}
                className="h-[160px] max-w-[160px] object-cover rounded-full block"
              />
              <div>
                <p className="text-[16px] text-white text-justify">
                  {glorification.statement}
                </p>
                <p className="text-[20px] text-right font-semibold text-white">
                  - {glorification.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Glorification;
