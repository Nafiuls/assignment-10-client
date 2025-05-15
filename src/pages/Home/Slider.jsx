import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import bg from "../../assets/bg.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "650px",
              width: "100%",
              position: "relative", // Important for overlay positioning
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
                zIndex: 1,
              }}
            ></div>

            {/* Content */}
            <div className="flex items-center flex-col justify-center h-full relative z-10 text-white px-4 text-center">
              <Fade direction="down">
                <h1 className="text-5xl lg:text-7xl leading-20 font-extrabold">
                  Game Reviews, Minus the Noise
                </h1>
              </Fade>
              <p className="max-w-3xl text-xl mt-5">
                "Find honest reviews, chill discussions, and the games that suit
                your vibe. Whether you're a casual player or a late-night
                grinder, we’ve built this space for you."
              </p>
              <Fade direction="up">
                <Link to={"/reviews"}>
                  <button className="btc mt-5 text-xl font-medium transition-all cursor-pointer px-10 py-2 rounded-sm">
                    Browse Reviews
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "650px",
              width: "100%",
              position: "relative", // Important for overlay positioning
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
                zIndex: 1,
              }}
            ></div>

            {/* Content */}
            <div className="flex items-center flex-col justify-center h-full relative z-10 text-white px-4 text-center">
              <Fade direction="down">
                <h1 className="text-5xl lg:text-7xl leading-20 font-extrabold">
                  "Discover Games Through the Eyes of Real Players"
                </h1>
              </Fade>
              <p className="max-w-3xl text-xl mt-5">
                At Build Chill Gamer, every review is written by someone just
                like you — a real gamer with real experiences. Whether you're
                looking for the next big hit or a cozy indie gem, our platform
                helps you explore games based on honest, straightforward
                community feedback. No fluff, just good games and chill vibes.
              </p>
              <Fade direction="up">
                <Link to={"/reviews"}>
                  <button className="btc mt-5 text-xl font-medium transition-all cursor-pointer px-10 py-2 rounded-sm">
                    Browse Reviews
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "650px",
              width: "100%",
              position: "relative", // Important for overlay positioning
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
                zIndex: 1,
              }}
            ></div>

            {/* Content */}
            <div className="flex items-center flex-col justify-center h-full relative z-10 text-white px-4 text-center">
              <Fade direction="down">
                <h1 className="text-5xl lg:text-7xl leading-20 font-extrabold">
                  "Your Chill Space to Share, Rate, and Connect"
                </h1>
              </Fade>
              <p className="max-w-3xl text-xl mt-5">
                We designed Build Chill Gamer to be your go-to spot for relaxed,
                thoughtful game reviews. Log in, leave a review, browse by genre
                or rating — all in a clean and responsive UI that keeps things
                simple. Whether you're hardcore or casual, join a community
                built for gamers who just want to play, chill, and share. Find
                honest reviews, chill discussions, and the games that suit your
                vibe. Whether you're a casual player or a late-night grinder,
                we’ve built this space for you.
              </p>
              <Fade direction="up">
                <Link to={"/reviews"}>
                  <button className="btc mt-5 text-xl font-medium transition-all cursor-pointer px-10 py-2 rounded-sm">
                    Browse Reviews
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
