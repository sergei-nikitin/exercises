import {React, useState} from 'react'
import s from "./Filter.module.css"
import PropTypes from "prop-types";
import SearchIcon from '@material-ui/icons/Search';

export default function Filter(props) {
const [value, setValue] = useState("")

const handleChange = (event) => {
  const { value } = event.target;
  setValue(value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  
  if (value.trim() === "") {
  //   return toast.error("Введите категорию фото ");
  return alert('fail')
  }
  props.onSubmit(value);
  setValue("");
};
   
    return (
        <div className={s.divFilter}>
<form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
              <SearchIcon />
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            placeholder="Введите название упражнения"
            value={value}
            onChange={handleChange}
            name="value"
          />
        </form>
        </div>
    )
}

Filter.propTypes = {
    onSubmit: PropTypes.func,
}