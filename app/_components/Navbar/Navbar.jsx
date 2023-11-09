import Image from "next/image";
import s from "./navbar.module.css";
import hero from "../../../public/bg-hero.jpg";
// import logo from "../../..//public/lot2.svg";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className={s.header_hero}>
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
						zIndex: -22
					}}
				/>
				<div className={`container ${s.navLinks}`}>
					<div className={s.logo}>
						<div className={s.logo}>Lotus</div>
					</div>
					<nav>
						<ul className={s.nav_list}>
							<li className={s.nav_item}>
								<a href="#">Католог</a>
							</li>
							<li className={s.nav_item}>
								<a href="#">Акции</a>
							</li>
							<li className={s.nav_item}>
								<a href="#">Материали</a>
							</li>
							<li className={s.nav_item}>
								<a href="#">Отзывы</a>
							</li>
							<li className={s.nav_item}>
								<a href="#">Контакти</a>
							</li>
							<li className={s.nav_item}>
								<a href="#">+38 050 000 00 00</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className={s.titleWrap}>
					<h1 className={s.title}>Корпусная мебель под заказ</h1>
					<p className={s.subTitle}>Работаем по городу и области</p>
					<div>
						<button
							type="button"
							className={s.hero_btn}
						>
							Заказать бесплатный расчет
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
