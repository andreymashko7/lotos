"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
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
				pagination={{ clickable: true }}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className={s.swiper}
			>
				<SwiperSlide>{slide(firstSlide)}</SwiperSlide>
				<SwiperSlide>{slide(secondSlide)}</SwiperSlide>
				<SwiperSlide>{slide(thirdSlide)}</SwiperSlide>
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
