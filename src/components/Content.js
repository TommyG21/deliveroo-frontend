import Menu from "./Menu";

const Content = ({ data }) => {
  return (
    <div>
      {data.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <div key={index}>
              <h3>{category.name}</h3>
              <Menu data={category.meals} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default Content;
