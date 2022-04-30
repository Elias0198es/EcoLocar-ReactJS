import React from "react";
import { Home } from "./pages/home";
import { PagesRoutes } from "./routes/router";
import { AuthProvider } from "./context/auth"


function App() {
  return (
    <AuthProvider>
      <PagesRoutes />
    </AuthProvider>
  )
}

export default App;
