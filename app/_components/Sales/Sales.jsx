import s from "./sales.module.css";

const Sales = () => {
	return (
		<section
			className={s.sales}
			id="sales"
		>
			<div className={s.sales_wrap}>
				<div className={s.left_side}>
					<p className={s.sales_text}>
						Постоянным клиентам <br />
						10% скидка на заказ
					</p>
					<p className={s.discount}>
						10 <br />
						СКИ
					</p>
				</div>
				<div className={s.right_side}>
					<p className={`${s.discount} ${s.right_discount}`}>
						% <br />
						ДКИ
					</p>
					<p className={`${s.sales_text} ${s.right_text}`}>
						При заказе двух комплектов
						<br />
						мебели предоставляется
						<br />
						10% скидка на второй комплект
					</p>
				</div>
			</div>
		</section>
	);
};

export default Sales;
