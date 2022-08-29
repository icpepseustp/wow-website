import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Faculty } from "./components/Faculty";
import { Projects } from "./components/Projects";
import { GetReady } from "./components/GetReady";
import { KeepCalm } from "./components/KeepCalm";
import { Registration } from "./components/Registration";
import { Footer } from "./components/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Intro />
    <Faculty />
    <Projects />
    <GetReady />
    <KeepCalm />
    <Registration />
    <Footer />
  </>
);
