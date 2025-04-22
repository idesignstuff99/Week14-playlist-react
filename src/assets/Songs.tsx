type SongsProps = {
    id: number,
    artist: string,
    name: string,
    plays?: string,
}
export default function Songs(props: SongsProps) {
    const { id, artist, name, plays, setPlaylist, playlist } = props;
    return(
        <div className="card-body">
        {/* <p className="card-text">{ id }</p> */}
        <p className="card-text">{ id }</p>
        <h5 className="card-title">{ artist }</h5>
        <p className="card-text">{ name }</p>
        <p className="card-text">{ plays }</p>
        <button className="btn btn-primary m-1" onClick={
          ()=>  setPlaylist([...playlist,{id, artist, name, plays}])
        }type="button">Add</button>
        </div>
    )
}