import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, EffectCoverflow, Navigation } from "swiper";

const card = (props) => {
const info =[
    {
        name: "Sherlock Holmes1",
        position: "Software Developer1",
        img:"https://pbs.twimg.com/media/EO6aUKzX4AUEFFX.jpg",
        company:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" ,
        testimonials:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Sherlock Holmes2",
        position: "Software Developer2",
        img:"https://pbs.twimg.com/media/EO6aUKzX4AUEFFX.jpg",
        company:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" ,
        testimonials:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Sherlock Holmes3",
        position: "Software Developer3",
        img:"https://pbs.twimg.com/media/EO6aUKzX4AUEFFX.jpg",
        company:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" ,
        testimonials:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Sherlock Holmes4",
        position: "Software Developer4",
        img:"https://pbs.twimg.com/media/EO6aUKzX4AUEFFX.jpg",
        company:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" ,
        testimonials:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Sherlock Holmes5",
        position: "Software Developer5",
        img:"https://pbs.twimg.com/media/EO6aUKzX4AUEFFX.jpg",
        company:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" ,
        testimonials:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Sherlock Holmes6",
        position: "Software Developer6",
        img:"https://pbs.twimg.com/media/EO6aUKzX4AUEFFX.jpg",
        company:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" ,
        testimonials:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

  return (
    <div>
      <h1 className="text-center text-gray-700 font-semibold text-4xl mt-16">
        Sample Testimonials
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {info.map((member, i) => (
          <SwiperSlide>
            <div
              key={`member${i}`}
              className="h-auto w-[400px]   rounded-lg bg-gray-800 shadow-lg px-5 mt-36 mx-auto pb-10 transition ease-in-out hover:scale-105 transform -translate-y-2"
            >
              <div className="w-full pt-1 mt-36 ">
                <div className="overflow-hidden rounded-full border-4 border-full transition duration-300 ease-in-out transform hover:scale-110 border-yellow-400 w-24 h-24 -mt-16 mx-auto shadow-lg">
                  {/* <a href={linkedin ? linkedin : null} target="_blank" rel="noreferrer"> */}
                  <img src={member.img} alt="name" />
                  {/* </a> */}
                </div>
              </div>
              <div className="mt-4 ">
                <p className="text-xl font-primary text-blue-500 font-bold text-center">
                  {member.name}
                </p>
                <p className="text-md font-secondary text-gray-300 text-center mt-2">
                  {member.position}
                </p>
                <img
                  src={member.company}
                  alt="company name"
                  className="scale-50"
                />
              </div>
              {/* <div className="h-48 w-48 text-center">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"/>
      </div> */}

              {/* <div className="-mt-3"> */}

              <div className="overflow-y-auto h-48">
                <p className="text-md font-secondary text-gray-300 text-left  sm:mx-2 ">
                  {member.testimonials}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default card;
