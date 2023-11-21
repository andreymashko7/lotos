"use client";
import Image from "next/image";
import s from "./cardImage.module.css";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CardImage = ({ data, attr }) => {
	return (
		<div className={s.galleryWrap}>
			<ul
				className={
					attr === "home" ? `${s.galleryList}` : `${s.galleryList} ${s.commercial}`
				}
			>
				{data &&
					data.map((el) => (
						<li
							key={el.photo}
							className={
								attr === "home" ? `${s.gallery_item}` : `${s.item_commercial} `
							}
						>
							<a
								href="#"
								className={s.gallery_link}
								id="link"
							>
								<Image
									src={el.photo}
									alt={el.photo}
									fill
									sizes="100%"
									style={{
										objectFit: "fill"
									}}
								/>
								<button
									type="button"
									className={s.gallery_btn}
								>
									{el.descr}
								</button>
							</a>
						</li>
					))}
			</ul>
		</div>
	);
};

export default CardImage;
