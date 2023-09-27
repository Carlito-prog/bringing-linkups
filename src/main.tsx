import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import OurMIssion from "./Page/OurMIssion";
// import TheDilemma from "./Page/TheDilemma";
// import OurSolution from "./Page/OurSolution";
// import ContactUs from "./Page/ContactUs";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/solution",
//         element: <OurSolution />,
//       },
//       {
//         path: "/dilemma",
//         element: <TheDilemma />,
//       },
//       {
//         path: "our-mission",
//         element: <OurMIssion />,
//       },
//       {
//         path: "/contact",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
