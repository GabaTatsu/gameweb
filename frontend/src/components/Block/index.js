const Block = ({ ejeX, ejeY, backgroundColor }) => {
  return (
    <div
      className="bloque"
      style={{
        left: ejeX,
        bottom: ejeY,
        backgroundColor,
      }}
    ></div>
  );
};
export default Block;
