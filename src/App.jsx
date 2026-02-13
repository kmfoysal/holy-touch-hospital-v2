import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import Services from "./pages/Services";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
              <h1 className="text-6xl font-bold text-slate-200 mb-4">404</h1>
              <p className="text-xl text-slate-600">Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
