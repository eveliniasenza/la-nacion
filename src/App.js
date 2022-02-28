import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Notes from './components/Note';
import MostRelevant from './components/MostRelevant';
import Opinion from './components/Opinion';
import Home from './components/Home';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="most-relevant" element={<MostRelevant />} />
          <Route path="note" element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));