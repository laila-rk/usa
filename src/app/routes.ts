import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TheBrittany from "./pages/TheBrittany";
import Events from "./pages/Events";
import Awards from "./pages/Awards";
import Gallery from "./pages/Gallery";
import BecomeMember from "./pages/BecomeMember";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "the-brittany", Component: TheBrittany },
      { path: "events", Component: Events },
      { path: "awards", Component: Awards },
      { path: "gallery", Component: Gallery },
      { path: "become-a-member", Component: BecomeMember },
      { path: "contact", Component: Contact },
    ],
  },
]);
