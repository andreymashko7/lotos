"use client";
import Image from "next/image";
import s from "./navbar.module.css";
import hero from "../../../public/bg-hero.jpg";

import Link from "next/link";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";

const Navbar = () => {
	const root = useRef();

	const btnAnimation = () => {
		const messageBtn = gsap
			.timeline({
				defaults: { duration: 0.1 },
				repeat: -1,
				repeatDelay: 4
			})
			.to("#hero_btn", { rotate: 5 })
			.to("#hero_btn", { rotate: -5 })
			.to("#hero_btn", { rotate: 5 })
			.to("#hero_btn", { rotate: 0 });

		return messageBtn;
	};

	useLayoutEffect(() => {
		gsap
			.timeline()
			.fromTo(
				"#title",
				{ opacity: 0, scale: 0 },
				{ opacity: 1, scale: 1, duration: 1.5 }
			)
			.fromTo(
				"#hero_btn",
				{ opacity: 0, y: -250 },
				{ opacity: 1, duration: 1.5, y: 0, ease: "back.out(1.7)" }
			)
			.add(btnAnimation, { delay: 2 });
	}, []);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {}, root);

		return () => ctx.revert();
	}, []);
	return (
		<header
			className={s.header_hero}
			id="root"
		>
			<div className={s.bg_wrap}>
				<Image
					src={hero}
					alt="furniture"
					placeholder="blur"
					quality={100}
					fill
					priority
					sizes="100vw"
					style={{
						objectFit: "fill",
						position: "absolute",
						zIndex: -10
					}}
				/>
				<div className={`container ${s.navLinks}`}>
					<div className={s.logo}>
						<div className={s.logo}>Lotus</div>
					</div>
					<nav>
						<ul
							className={s.nav_list}
							// ref={root}
						>
							<li className={s.nav_item}>
								<a href="#catalog">Католог</a>
							</li>

							<li className={s.nav_item}>
								<a href="#sales">Акции</a>
							</li>

							<li className={s.nav_item}>
								<a href="#materials">Материали</a>
							</li>

							<li className={s.nav_item}>
								<a href="#reviews">Отзывы</a>
							</li>

							<li className={s.nav_item}>
								<a href="#contacts">Контакти</a>
							</li>

							<li className={s.nav_item}>
								<a href="#">+38 050 000 00 00</a>
							</li>
						</ul>
					</nav>
				</div>

				<div
					className={s.titleWrap}
					// ref={root}
				>
					<h1
						className={s.title}
						id="title"
					>
						Корпусная мебель под заказ
					</h1>
					<p className={s.subTitle}>Работаем по городу и области</p>
					<Link
						href="/login"
						className={s.hero_btn}
						id="hero_btn"
					>
						Заказать бесплатный расчет
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
