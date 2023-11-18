import { useDispatch, useSelector } from "react-redux";
import { updateCurrentItems } from "../store/itemsSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const chooseCategory = (props) => {
    console.log(props);
    dispatch(updateCurrentItems(props));
  };
  return (
    <div className="categories" id="categories">
      {categories.map((e) => (
        <div
          className="categories__item"
          key={e.key}
          onClick={() => chooseCategory(e.key)}
        >
          {e.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
