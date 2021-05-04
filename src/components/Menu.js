const Menu = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              console.log(item.id);
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>{item.price}</span>
            {item.picture && (
              <img
                className="img"
                style={{ height: 150 }}
                src={item.picture}
                alt={item.title}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
