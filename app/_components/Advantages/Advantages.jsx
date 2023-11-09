import Image from "next/image";
import s from "./advantages.module.css";
import firstSvg from "../../../public/10_let_narynke.svg";
import secondSvg from "../../../public/Individ_project.svg";
import thirdSvg from "../../../public/tochno_v_srok.svg";
import fourthSvg from "../../../public/besplat_dostavka.svg";

const Advantages = () => {
	return (
		<section className={`container ${s.advantages}`}>
			<div className="titleWrap">
				<h3 className="title">Преимущества</h3>
				<span className="yellow_line"></span>
				<p className="subTitle_italic">
					Доверьтесь профессионалам в изготовлении мебели вашей мечты
				</p>
			</div>

			<ul className={s.list}>
				<li className={s.item}>
					<div className={s.wrap}>
						<Image
							src={firstSvg}
							alt=""
							className={s.icon}
						/>
						<h4 className={s.advantages_subTitle}>
							На рынке более
							<br /> 15 лет
						</h4>
						<p className={s.text}>
							Только квалифицированные работники. Тысячи успешно реализованных
							проектов
						</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.wrap}>
						<Image
							src={secondSvg}
							alt=""
							className={s.icon}
						/>
						<h4 className={s.advantages_subTitle}>Бесплатный дизайн-проект</h4>
						<p className={s.text}>
							Опытный дизайнер создаст уникальный дизайн-проект совершенно бесплатно
						</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.wrap}>
						<Image
							src={thirdSvg}
							alt=""
							className={s.icon}
						/>
						<h4 className={s.advantages_subTitle}>Выполнение заказа точно в срок</h4>
						<p className={s.text}>
							Выполняем заказы точно в срок, указанный в договоре.
						</p>
					</div>
				</li>

				<li className={s.item}>
					<div className={s.wrap}>
						<Image
							src={fourthSvg}
							alt=""
							className={s.icon}
						/>
						<h4 className={s.advantages_subTitle}>Бесплатная доставка</h4>
						<p className={s.text}>Доставка до квартиры бесплатно.</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Advantages;
