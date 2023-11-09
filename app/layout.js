import { Ubuntu, Open_Sans, Raleway } from "next/font/google";
import "./_styles/globals.css";

export const ubuntu = Ubuntu({
	weight: ["400", "500", "700"],
	style: ["normal", "italic"],
	variable: "--font-ubuntu",
	subsets: ["latin"],
	display: "swap"
});

export const open_sans = Open_Sans({
	weight: ["300", "400", "600"],
	subsets: ["latin"],
	variable: "--font-open_sans",
	display: "swap"
});

export const raleway = Raleway({
	weight: ["400", "600"],
	subsets: ["latin"],
	variable: "--font-raleway",
	display: "swap"
});
export const metadata = {
	title: "Lotus furniture",
	description: "custom-made furniture from tm lotus"
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="rus"
			className={`${ubuntu.variable} ${open_sans.variable} ${raleway.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
