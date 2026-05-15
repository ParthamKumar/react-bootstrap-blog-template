import '../styles/pages-css/home.css';
import MainSlideShow from '../components/MainSlideShow';
import MainContent from '../components/MainContent';
import Architecture from '../components/Architecture';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import Workflow from '../components/Workflow';
import Challenges from '../components/Challenges';
import FutureEnhancements from '../components/FutureEnhancements';
import Conclusion from '../components/Conclusion';
import HomeContact from '../components/contactus/HomeContact';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div>
            <MainSlideShow/>
            <MainContent/>
            <Architecture/>
            {/* <Features/> */}
            <TechStack/>
            <Workflow/>
            <Challenges/>
            <FutureEnhancements/>
            <Conclusion/>
            <HomeContact/>
            <Footer/>
        </div>
    );
}

export default Home;
