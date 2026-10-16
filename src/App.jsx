import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories"; 
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Navbar />
      <Profile />
      <Repositories />
      <Footer />
    </div>
  );
}
export default App;