import React from "react";
import "./App.css";
import BookingCalendar from "./components/BookingCalendar";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BookingCalendar />
      </div>
    </ThemeProvider>
  );
}

export default App;
