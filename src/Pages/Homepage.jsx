import Navbar from "@/Navbar";
import MainContent from "@/MainContent";
import Footer from "@/Footer";
import Infos from "@/Infos";
import Pricing from "@/Pricing";
import Contactus from "@/Contactus";

function Homepage() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Pricing />
      <Footer />
    </div>
  );
}
export default Homepage;
