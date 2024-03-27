import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
	  {/* <NotFound/> */}
    </>
  );
}

export default App;
