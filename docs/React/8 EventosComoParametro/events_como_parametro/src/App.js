import react from "react";
import Planet from "./components/planet";
import "./App.css";

function App() {
  return (
    <div className="content">
      <h1>Planet List:</h1>
      <hr />
      <div>
        <Planet
          name="Marte"
          description="lorem ipsum... description...lorem ipsum... description...lorem ipsum... description...lorem ipsum... description..."
          img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/420px-OSIRIS_Mars_true_color.jpg"
        />
      </div>

      <Planet
        name="Mercurio"
        description="lorem ipsum... description...lorem ipsum... description...lorem ipsum... description...lorem ipsum... description..."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />
    </div>
  );
}

export default App;
