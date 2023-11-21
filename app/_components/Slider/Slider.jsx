"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
	Autoplay
} from "swiper/modules";
import "swiper/css/bundle";

import data from "../../_data/feedback.json";
import s from "./slider.module.css";

export default function Slider() {
	const { firstSlide, secondSlide, thirdSlide } = data;

	return (
		<>
			<Swiper
				cssMode={true}
				navigation={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
				loop={true}
				style={{
					"--swiper-pagination-color": "#FFBA08",
					"--swiper-pagination-bullet-inactive-color": "#ccc",
					"--swiper-pagination-bullet-inactive-opacity": "1",
					"--swiper-pagination-bullet-horizontal-gap": "6px"
				}}
			>
				<SwiperSlide>{slide(firstSlide)}</SwiperSlide>
				<SwiperSlide>{slide(secondSlide)}</SwiperSlide>
				<SwiperSlide>{slide(thirdSlide)}</SwiperSlide>
				<div className="swiper-custom-pagination" />
			</Swiper>
		</>
	);
}

function slide(slide) {
	return (
		<div className={s.comment}>
			{slide.map((com) => (
				<div
					className={s.comment_wrap}
					key={com.body}
				>
					<div className={s.clientname}>{com.name}</div>
					<div className={s.text}>{com.body}</div>
					<span className={s.date_time}>{com.date}</span>
				</div>
			))}
		</div>
	);
}
