"use client";
import Image from "next/image";
import s from "./materials.module.css";
import ldsp from "../../../public/ldsp.jpg";
import colors from "../../../public/cvet.jpg";
import furniture from "../../../public/furnitura.jpg";
import brands from "../../../public/proizvoditeli.png";

const Materials = () => {
	return (
		<section
			id="materials"
			className={`container ${s.materials}`}
		>
			<div className={s.materials_wrap}>
				<div className={s.left_side}>
					<div className="titleWrap">
						<h3 className="title">Цветовые решения</h3>
						<span className="yellow_line"></span>

						<p className={s.descr}>
							Мы предложим Вам сотни цветовых решений и порекомендуем лучшие варинты,
							соответствующие интерьеру помещения. Кухонные фасады (дверцы шкафов)
							могут быть изготовлены из следующих материалов:
						</p>
					</div>
					<div className={s.list_wrap}>
						<Image
							src={ldsp}
							alt="colors of ldsp"
						/>

						<ul className={s.list}>
							<li className={s.item}>ЛДСП EGGER</li>
							<li className={s.item}>МДФ + пластик</li>
							<li className={s.item}>МДФ + краска</li>
							<li className={s.item}>Стекло в профиле</li>
							<li className={s.item}>Массив и Эмаль</li>
							<li className={s.item}>МДФ в пленке</li>
						</ul>
					</div>
				</div>
				<div>
					<Image
						className={s.colors}
						src={colors}
						width={530}
						alt="kitchen colors"
					/>
				</div>
			</div>

			<div className={`${s.materials_wrap}  ${s.reverse}`}>
				<div className={s.left_side}>
					<div className="titleWrap">
						<h3 className="title">Выбор фурнитуры</h3>
						<span className="yellow_line"></span>

						<p className={s.descr}>
							Мы предложим оптимальный вариант фурнитуры, соответствующий бюджету,
							который Вы готовы выделить на кухню. Возможны любые решения эконом и
							премиум класса от ведущих европейских производителей, таких как:
						</p>
					</div>
					<Image
						src={brands}
						alt="furniture brands"
					/>
					<p className={s.text}>
						<strong>
							Только надежная и качественная фурнитура способна обеспечить
							функциональность кухни в полной мере!
						</strong>
					</p>
				</div>
				<div>
					<Image
						src={furniture}
						className={s.colors}
						width={530}
						priority
						alt="furniture"
					/>
				</div>
			</div>
		</section>
	);
};

export default Materials;
