import Advantages from "./_components/Advantages/Advantages";
import Feedback from "./_components/Feedback/Feedback";
import Footer from "./_components/Footer/Footer";
import Gallery from "./_components/Gallery/Gallery";
import Materials from "./_components/Materials/Materials";
import Navbar from "./_components/Navbar/Navbar";
import Perform from "./_components/Perform/Perform";
import Sales from "./_components/Sales/Sales";

const page = () => {
	return (
		<>
			<Navbar />
			<main>
				<Gallery />
				<Perform />
				<Materials />
				<Advantages />
				<Sales />
				<Feedback />
			</main>
			<Footer />
		</>
	);
};

export default page;
