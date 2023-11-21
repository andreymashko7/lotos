"use client";

import { useLayoutEffect } from "react";
import s from "./perform.module.css";
import { FaPhoneVolume, FaTruck, FaWrench, FaThumbsUp } from "react-icons/fa6";
import { GiNothingToSay } from "react-icons/gi";
import { IoTime } from "react-icons/io5";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Perform = () => {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			"#list > li",
			{ opacity: 0, y: -50 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.2,
				duration: 1,
				scrollTrigger: {
					trigger: "#list",
					start: "top 75%",
					end: "bottom 25%",
					toggleActions: "play complete none reset"
				}
			}
		);
	}, []);

	return (
		<section className={`container ${s.perform}`}>
			<div className="titleWrap">
				<h3 className="title">Как мы выполняем проект</h3>
				<span className="yellow_line"></span>
			</div>
			<ul
				className={s.list}
				id="list"
			>
				<li className={s.item}>
					<div className={s.card_wrap}>
						<div className={s.box}>
							<FaPhoneVolume className={s.icon} />
						</div>
						<h4 className={s.subTitle}>Звонок</h4>
						<p className={s.descr}>
							Назначаете удобное Вам время для выезда дизайнера.
						</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.card_wrap}>
						<div className={s.box}>
							<GiNothingToSay className={s.icon} />
						</div>
						<h4 className={s.subTitle}>Встреча</h4>
						<p className={s.descr}>
							Составление макета, согласование дизайн-проекта и стоимости.
						</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.card_wrap}>
						<div className={s.box}>
							<IoTime className={s.icon} />
						</div>
						<h4 className={s.subTitle}>Изготовление</h4>
						<p className={s.descr}>
							Производство мебели, согласование даты доставки и сборки.
						</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.card_wrap}>
						<div className={s.box}>
							<FaTruck className={s.icon} />
						</div>
						<h4 className={s.subTitle}>Доставка</h4>
						<p className={s.descr}>Доставка элементов мебели.</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.card_wrap}>
						<div className={s.box}>
							<FaWrench className={s.icon} />
						</div>
						<h4 className={s.subTitle}>Установка</h4>
						<p className={s.descr}>Сборка и установка мебели.</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.card_wrap}>
						<div className={s.box}>
							<FaThumbsUp className={s.icon} />
						</div>
						<h4 className={s.subTitle}>Завершение</h4>
						<p className={s.descr}>
							Вы принимаете выполненную работу, подписываете акт и получаете
							гарантию. Проект завершен!
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Perform;
