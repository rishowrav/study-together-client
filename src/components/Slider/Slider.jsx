// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#E35353",
          "--swiper-pagination-color": "#E35353",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#FF6F6159,#9656A1B3),url('/img/slider1.jpg')] h-[700px] bg-cover bg-center `}
          >
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold  text-white capitalize  mx-auto w-4/5">
                Rustic Stoneware
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                Our rustic stoneware collection is an exciting range of handmade
                tableware and accessories. We have taken the simplicity and
                authenticity of studio style pottery, to create a range that is
                affordable for home
              </p>
              <div className="space-x-4">
                <button className="btn btn-lg border-[3px] font-bold hover:bg-white hover:border-white hover:text-[#FF6F61]  border-white bg-transparent text-white">
                  Study Together Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#FF6F6159,#9656A1B3),url('/img/slider2.jpg')] h-[700px] bg-cover bg-center ">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Porcelain Patterned Wall & Floor Tile
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                The field tile offers a modern twist to classic old-world
                European elegance. In muted black and chalky white tones, this
                unique patterned tile features a star constructed of geometric
                shapes at its center
              </p>
              <div className="space-x-4">
                <button className="btn btn-lg border-[3px] font-bold hover:bg-white hover:border-white hover:text-[#FF6F61]  border-white bg-transparent text-white">
                  Study Together Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#FF6F6159,#9656A1B3),url('/img/slider3.jpg')] h-[700px] bg-cover bg-center ">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Keilson Ceramic Pot Planter
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                The Keilson Ceramic Pot Planter is a stylish vessel for indoor
                plants, crafted with durable ceramic material, enhancing any
                home decor.
              </p>
              <div className="space-x-4">
                <button className="btn btn-lg border-[3px] font-bold hover:bg-white hover:border-white hover:text-[#FF6F61]  border-white bg-transparent text-white">
                  Study Together Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
