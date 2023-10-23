import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hompage from "./pages/Homepage/Hompage";
import WebTesting from "./pages/Services/WebTesting";
import AppTesting from "./pages/Services/AppTesting";
import ApiTesting from "./pages/Services/ApiTesting";
import About from "./pages/About us/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Terms from "./pages/Terms/Terms";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import Blog from "./pages/Blogs_Folder/Blog";
import Scan from "./pages/Scan_Page/Scan";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/webtesting" element={<WebTesting />} />
        <Route path="/apptesting" element={<AppTesting />} />
        <Route path="/apitesting" element={<ApiTesting />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/freeScan" element={<Scan />} />
      </Routes>
    </div>
  );
}

export default App;
