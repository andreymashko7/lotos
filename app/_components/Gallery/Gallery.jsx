import s from "./gallery.module.css";

import CardImage from "../CardImage/CardImage";
import data from "../../_data/gallery.json";

const Gallery = () => {
	return (
		<section className={`container ${s.gallery} `}>
			<div className="titleWrap">
				<h2 className="title">Какие работы мы выполняем</h2>
				<span className="yellow_line"></span>
				<p className="subTitle_italic">
					Отправьте заявку и мы вышлем Вам каталог или закажите индивидуальный проект
				</p>
			</div>

			<CardImage
				data={data.home}
				attr="home"
			/>

			<div className={s.decor_wrap}>
				<div className={s.decor_line}></div>
			</div>

			<CardImage data={data.commercial} />
		</section>
	);
};

export default Gallery;
