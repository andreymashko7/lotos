import s from "./footer.module.css";
import {
	FaInstagram,
	FaFacebookSquare,
	FaViber,
	FaTelegramPlane
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`container ${s.footer_wrap}`}>
				<div>
					<address className={s.contacts}>
						<p className={s.adress}>г. Киев, пр-т Леси Украинки, 26</p>
						<a
							href="mailto:info@devstudio.com"
							className={s.adress}
						>
							info@devstudio.com
						</a>
						<a
							href="tel:380991111111"
							className={s.adress}
						>
							+38 099 111 11 11
						</a>
					</address>
				</div>
				<div className={s.social}>
					<ul className={s.list}>
						<li className={s.item}>
							<a
								href="#"
								className={s.link}
							>
								<FaInstagram className={s.icon} />
							</a>
						</li>
						<li className={s.item}>
							<a
								href="#"
								className={s.link}
							>
								<FaViber className={s.icon} />
							</a>
						</li>
						<li className={s.item}>
							<a
								href="#"
								className={s.link}
							>
								<FaFacebookSquare className={s.icon} />
							</a>
						</li>
						<li className={s.item}>
							<a
								href="#"
								className={s.link}
							>
								<FaTelegramPlane className={s.icon} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
