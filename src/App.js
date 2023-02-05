import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Products from "./containers/Products";
import CustomApps from "./containers/CustomApps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({ typography: { fontFamily: "Ubuntu" } });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="h-screen overflow-hidden">
          <Topbar />
          <div className="flex h-full">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="customApps" element={<CustomApps />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
