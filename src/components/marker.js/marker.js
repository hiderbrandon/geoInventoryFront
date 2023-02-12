function Marker({ longitude, latitude }) {
  return (
    <div
      className="marker"
      style={{
        left: longitude,
        top: latitude,
        transform: `translate(-50%, -100%)`
      }}> 
      </div>
  );
}

export default Marker;