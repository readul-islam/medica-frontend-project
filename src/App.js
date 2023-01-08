
import ThemeProvider from "./theme";
import Navbar from "./shared/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./shared/Footer";

function App() {
  return (
    <ThemeProvider>
     
      <Navbar />
      <Header/>
     <Services/>
     <Footer/>
    
     
    
    </ThemeProvider>
  );
}

export default App;
