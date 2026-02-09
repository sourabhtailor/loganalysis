import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Aboutus from "./Components/aboutus/Aboutus";
import Career from "./Components/career/Career";
import HireDeveloper from "./Components/hiredeveloper/HireDeveloper";
import Contactus from "./Components/contactus/ContactUs";
import "leaflet/dist/leaflet.css";
import MobileApplication from "./Components/mobileapplication/MobileApplication";
import WebApplication from "./Components/webapplication/WebApplication";
import ItConsulting from "./Components/itconsulting/ItConsulting";
import ItStaffing from "./Components/itstaffing/ItStaffing";
import DigitalMarketing from "./Components/digitalmarketing/DigitalMarketing";
import Blog from "./Components/blog/Blog";
import DesktopApplication from "./Components/desktopapplication/DesktopApplication";
import BackToTop from "./Components/backtotop/BackToTopButton";
import Portfolio from "./Components/portfolio/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogNextPage from "./Components/BlogNextPage";
import PageNotFound from "./Components/PageNotFound";
import BlogDashboard from "./Components/BlogDashboard/BlogDashboard";
import CustomerSoftware from "./Pages/CustomSoftware";
import FullStackWebDevelopment from "./Pages/FullStackWebDevelopment";
import ItConsultingServices from "./Pages/ItConsultingServices";
import Qa from "./Pages/Qa";
import Ios from "./Pages/Ios";
import Android from "./Pages/Android";
import ReactJs from "./Pages/ReactJs";
import ReactNative from "./Pages/ReactNative";
import Hybrid from "./Pages/Hybrid";
import Flutter from "./Pages/Flutter";
import Angular from "./Pages/Angular";
import Vuejs from "./Pages/Vuejs";
import Wordpress from "./Pages/Wordpress";
import Cms from "./Pages/Cms";
import Php from "./Pages/Php";
import Laravel from "./Pages/Laravel";
import Codeigniter from "./Pages/Codeigniter";
import Invitehive from "./Components/casestudy/Invitehive";
import Kanhahometution from "./Components/casestudy/Kanhahometution";
import Ticked from "./Components/casestudy/Ticked";
import Ctrlp from "./Components/casestudy/Ctrlp";
import MadStack from "./Components/casestudy/MadStack";
import ThankYou from "./Components/Thankyou/ThankYou";

AOS.init({
  duration: 1500,
  once: true,
  mirror: false,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/career" element={<Career />} />
          <Route path="/hire-developer" element={<HireDeveloper />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/mobile-applications" element={<MobileApplication />} />
          <Route path="/web-applications" element={<WebApplication />} />
          <Route path="/it-consulting" element={<ItConsulting />} />
          <Route path="/it-staffing" element={<ItStaffing />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogNextPage />} />
          <Route
            path="/desktop-applications"
            element={<DesktopApplication />}
          />

          {/* services page */}

          <Route
            path="/services/custom-software"
            element={<CustomerSoftware />}
          />
          <Route
            path="/services/full-stack-development"
            element={<FullStackWebDevelopment />}
          />
          <Route
            path="/services/it-consulting-services"
            element={<ItConsultingServices />}
          />

          <Route path="/services/software-testing-and-qa" element={<Qa />} />

          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />

          <Route path="/services/ios" element={<Ios />} />
          <Route path="/services/android" element={<Android />} />
          <Route path="/services/react-native" element={<ReactNative />} />
          <Route path="/services/hybrid" element={<Hybrid />} />
          <Route path="/services/flutter" element={<Flutter />} />
          <Route path="/services/angular" element={<Angular />} />
          <Route path="/services/reactjs" element={<ReactJs />} />
          <Route path="/services/vuejs" element={<Vuejs />} />
          <Route path="/services/Content-management-system" element={<Cms />} />
          <Route path="/services/php" element={<Php />} />
          <Route path="/services/laravel" element={<Laravel />} />
          <Route path="/services/codeigniter" element={<Codeigniter />} />
          <Route path="/services/wordpress" element={<Wordpress />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/dashboard" element={<BlogDashboard />} />
          <Route path="/casestudy/invitehive" element={<Invitehive />} />
          <Route
            path="/casestudy/kanha-home-tutions"
            element={<Kanhahometution />}
          />
          <Route path="/casestudy/ticked" element={<Ticked />} />
          <Route path="/casestudy/ctrlp" element={<Ctrlp />} />
          <Route path="/casestudy/madstack-inovation" element={<MadStack />} />
          <Route path="/thank-you" element={<ThankYou />} />

        </Routes>
        {/* <BackToTop/> */}
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
