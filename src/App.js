import "./App.css";
import { Viewer, GeoJsonDataSource } from "resium";
import { Color } from "cesium";
import { denver } from "./denver";

function App() {
  return (
    <Viewer full>
      <GeoJsonDataSource show={true} data={denver} markerColor={Color.RED} />
    </Viewer>
  );
}

export default App;
