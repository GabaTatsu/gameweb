const ShooterProyectile = ({ ejeX, ejeY }) => {
  return (
    <div
      style={{
        position: "relative",
        left: ejeX,
        bottom: ejeY,
        width: "10px",
        height: "3px",
        backgroundColor: "black",
      }}
    ></div>
  );
};
export default ShooterProyectile;
