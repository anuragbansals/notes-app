import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./screens/landingPage";
import LoginScreen from "./screens/loginScreen";
import MyNotes from "./screens/myNotes";
import CreateNote from "./screens/singleNote/createNote";
import SingleNote from "./screens/singleNote/singleNote";

function App() {
  const [search, setSearch] = useState("");

  return (
    // <Provider>
      <BrowserRouter>
        {/* <Header setSearch={(s) => setSearch(s)} /> */}
        <main>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/myNotes" Component={MyNotes} />
            <Route path="/login" component={LoginScreen} />
            {/* <Route path="/register" component={RegisterScreen} /> */}
            {/* <Route
              path="/mynotes"
              component={({ history }) => (
                <MyNotes search={search} history={history} />
              )}
            /> */}
            {/* <Route path="/note/:id" component={SingleNote} />
            <Route path="/createnote" component={CreateNote} />; */}
            {/* <Route path="/profile" component={ProfileScreen} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
