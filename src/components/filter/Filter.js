import s from "./Filter.module.css"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    return (
        <div className={s.divFilter}>
            <input
            className={s.inpFilter}
            placeholder="Введите название упражнения"
            name="filter"
            type="text"
            value={value}
            onChange={(event) => dispatch(changeFilter(event.target.value))}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    changeFilter: PropTypes.func,
}