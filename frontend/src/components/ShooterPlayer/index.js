const ShooterPlayer = ({ ejeX, ejeY }) => {
  return (
    <div
      style={{
        position: "relative",
        left: ejeX,
        bottom: ejeY,
        width: "120px",
        height: "190px",
        backgroundColor: "black",
      }}
    ></div>
  );
};
export default ShooterPlayer;
