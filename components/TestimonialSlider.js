// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// next image
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-800 to-purple-900 text-white group">
            
            {/* avatar */}
            <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                width={80}
                height={80}
                alt={testimonial.name}
                className="object-cover"
              />
            </div>

            {/* message */}
            <p className="text-sm mb-4">{testimonial.message}</p>

            {/* name & position */}
            <div className="flex flex-col items-center">
              <div className="font-bold">{testimonial.name}</div>
              <div className="text-xs">{testimonial.position}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
