import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Container() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch(currentPage){
      case('Contact'):
        return <Contact />;
      case('Portfolio'):
        return <Portfolio />;
      case('Resume'):
        return <Resume />;
      default:
        return <About />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main
        className="container-fluid p-0"
      >
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}