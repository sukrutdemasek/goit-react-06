import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filterSlice";
import "./SearchBox.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      className="searchBox"
      type="text"
      placeholder="Search contacts"
      value={searchValue}
      onChange={handleChange}
    />
  );
}
