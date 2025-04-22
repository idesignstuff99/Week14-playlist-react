import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import PlaylistView from "./PlaylistView";
import { useState } from "react";

const songsData = [
  { id: 0, artist: "OIIA", name: "W&W", plays: "177M"},
  { id: 1, artist: "Crusade", name: "Gabry Ponte", plays: "38M"},
  { id: 2, artist: "Push up", name: "F4ST", plays: "27M"},
  { id: 3, artist: "I'll Fly With You", name: "Jovani & Chris Clone", plays: "32M"},
  { id: 4, artist: "I Don't Want To Wait", name: "David Guetta & One Republic", plays: "17M"}
]

export default function App() {
  const [ playlist, setPlaylist ] = useState([])
  console.log(playlist);
  return (
  <div className="d-flex flex-column vh-100">
    <Toolbar/>
    <div className="d-flex flex-grow-1">
    <Sidebar songs={songsData} setPlaylist={setPlaylist} playlist={playlist}/>
    <PlaylistView playlist={playlist} setPlaylist={setPlaylist}/>
    </div>
    </div>
  )
}