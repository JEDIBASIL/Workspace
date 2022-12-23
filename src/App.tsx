import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppContainer, AppHome, CreateAccount, Home, HomeContainer, Notes, SignIn, NotePad } from "./view";
import "./assets/style/style.css"
import { UserAuthProvider } from "./contexts/Auth";
function App() {
  return (
    <div className="App">
      <UserAuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeContainer />}>
                <Route index element={<Home />}></Route>
                <Route path="/create-account" element={<CreateAccount />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
            </Route>

            <Route path="/app" element={<AppContainer />}>
            <Route index  element={<AppHome />}></Route>
            <Route path="/app/notes"  element={<Notes />}></Route>
            <Route path="/app/note-pad"  element={<NotePad />}></Route>
            </Route>
          </Routes>
        </Router>
      </UserAuthProvider>

    </div>
  );
}

export default App;
