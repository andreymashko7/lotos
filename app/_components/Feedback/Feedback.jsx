import Slider from "../Slider/Slider";
import s from "./feedback.module.css";

const Feedback = () => {
	return (
		<section
			id="reviews"
			className={s.feedback}
		>
			<div className={s.bg}>
				<div className={s.container}>
					<div className={`titleWrap ${s.title_position}`}>
						<h2 className={`title ${s.text_white}`}>Отзывы</h2>
						<span className="yellow_line"></span>
						<p className={`subTitle_italic ${s.text_white}`}>
							Вот, что думают о нас наши клиенты
						</p>
					</div>
					<Slider />
				</div>
			</div>
		</section>
	);
};

export default Feedback;
