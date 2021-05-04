const Hero = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <img
        className="img"
        style={{ height: 200 }}
        src={data.picture}
        alt={data.name}
      />
    </div>
  );
};

export default Hero;
