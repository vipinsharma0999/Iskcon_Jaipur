import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const GlassPainting = () => {
  return (
    <>
      <div
        className="relative text-center bg-cover bg-center-top bg-fixed z-1 h-[115vh] lg:h-screen"
        style={{
          backgroundImage:
            "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9C9GOOoz7_3rnXkBx00Lt_Y3g8YOjtdfBx0nC23KDezKtUixGrZhQMRs6i1TPYyp3f_RtT667I-uEIPdf-RV9XNK0EnFUGlvd9zR9uD4zS1VBC72oK19k_71JnHKJFf6ewc0JjfKm4Gg/s1600/Lord+Krishna+playing+flute+stained+glass+window+vedic+art+gallery+-+ISKCON+Jaipur%252C+Rajasthan.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-[#d17a29]/40 to-red-400/30 text-white">
          <div className="w-full sm:w-11/12 bg-black/60">
            <h1
              className={`${dancing.className} pb-4 xl:text-7xl sm:text-5xl text-[2.5rem] pt-2`}
            >
              Windows To The Spiritual World
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-5 2xl:py-8">
              <img
                src="https://www.iskconjaipur.com/uploads/9/8/1/1/9811407/9788135_orig.jpg"
                className="h-[200px] sm:h-[300px] xl:h-[400px]"
              />
              <div className="max-w-[900px] p-3">
                <p className="text-justify text-sm xl:text-lg hidden sm:block">
                  Jaipur's renowned artistry inspired us to create a temple that
                  not only serves devotees but also enlightens people worldwide
                  about Vedic Culture through Art. Thus, we present the
                  <b className="text-gray-200">
                    "Windows to the Spiritual World Gallery,"
                  </b>
                  featuring fifty-two stained glass windows— the world's largest
                  display of its kind. The initial twelve windows will be eleven
                  feet high and four feet wide, followed by forty windows at
                  twelve feet high and six feet wide.
                </p>
                <p className="text-justify xl:text-lg text-sm mb-0 hidden sm:block">
                  Master Artist Mr. Colin Greenwood, inspired by his encounter
                  with His Divine Grace Srila Prabhupada in 1972, has taken
                  residence at the Sri Sri Giridhari Dauji Mandir to fulfill his
                  dream of creating exceptional stained glass artistry. He is
                  setting up his studio and arranging specialized materials to
                  bring this vision to life. This project not only aims to
                  delight devotees but also to revive interest in stained glass
                  as an art form, inspiring people from all walks of life with
                  the beauty and depth of Vedic Culture.
                </p>
                <p className="sm:hidden block text-justify">
                  Inspired by Jaipur's artistry, our temple, the "Windows to the
                  Spiritual World Gallery," showcases Vedic Culture through
                  fifty-two stained glass windows—the world's largest display of
                  its kind. Initial windows stand at eleven feet high and four
                  feet wide, followed by forty windows at twelve feet high and
                  six feet wide. Master Artist Mr. Colin Greenwood, inspired by
                  Srila Prabhupada in 1972, resides at Sri Sri Giridhari Dauji
                  Mandir to create exceptional stained glass artistry, reviving
                  interest in the craft and inspiring others with the beauty of
                  Vedic Culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassPainting;
