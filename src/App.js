import { BrowserRouter } from "react-router-dom"; 
import MainPage from "./pages/main";
import MyForm from "./pages/main1";

function App() { 
  return ( 
    <BrowserRouter> 

      {/* <MyForm/> */}
      <MainPage/>
    </BrowserRouter> 
  ); 
} 

export default App;