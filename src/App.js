
import ThemeProvider from "./theme";
import Navbar from "./shared/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Header/>
    </ThemeProvider>
  );
}

export default App;
