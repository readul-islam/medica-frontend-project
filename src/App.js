
import ThemeProvider from "./theme";
import Navbar from "./shared/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <ThemeProvider>
     
      <Navbar />
      <Header/>
    
     
     <Services/>
    
    </ThemeProvider>
  );
}

export default App;
