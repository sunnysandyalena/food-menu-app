import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";

const Filter = ({category, id}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div key={id} className="container">
            <h3 onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</h3>
        </div>
    )
}

export default Filter;