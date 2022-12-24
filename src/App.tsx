import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppContainer, AppHome, CreateAccount, Home, HomeContainer, Notes, SignIn, NotePad, Favorite, SharedNote } from "./view";
import "./assets/style/style.css"
import { UserAuthProvider, NoteContextProvider } from "./contexts/index";
function App() {
  return (
    <div className="App">
      <UserAuthProvider>
      <NoteContextProvider>
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
            <Route path="/app/note-pad/:id"  element={<NotePad />}></Route>
            <Route path="/app/favorite"  element={<Favorite />}></Route>
            <Route path="/app/shared-note"  element={<SharedNote />}></Route>
            </Route>
          </Routes>
        </Router>
        </NoteContextProvider>
      </UserAuthProvider>

    </div>
  );
}

export default App;
