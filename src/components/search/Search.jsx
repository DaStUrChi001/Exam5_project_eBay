import React, { useState } from "react";
import "./Search.scss";
import { FiSearch } from "react-icons/fi";
import instance from "../../api/instance";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa"
import useFetchData from "../../hooks/useFetchData";

const Search = () => {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const giveSearchSuggestions = (e) => {
        setSearchValue(e.target.value)
        instance.get(`/products/?tile=${searchValue}&offset=0&limit=6`)
            .then(response => setSearchResult(response.data))
            .catch(err => console.log(err))
    }

    const selectValue = useFetchData("/categories")

    return (
        <section className="search">
            <div className="logo-wrapper">
                <img width={117} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
                <div>
                    <p>Shop by category</p>
                    <FaAngleDown />
                </div>
            </div>
            <form>
                <div className="search-wrapper">
                    <div className="search-elements">
                        <FiSearch />
                        <input onChange={giveSearchSuggestions} className="search__input" type="text" placeholder="Search for anything" />
                        {searchResult?.length > 0 && searchValue ? <div className="search-suggestions">
                            {
                                searchResult.map(searchItem =>
                                    <Link key={searchItem.id} className="search-item__link" to={`/product/${searchItem.id}`}>
                                        <span>{searchItem.title}</span>
                                    </Link>
                                )
                            }
                        </div> : <></>}
                        <select name="Categories">
                            <option value="All">All categories</option>
                            {
                                selectValue.map(categories => 
                                    <option key={categories.id} value={categories.name}>{categories.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <button className="search__btn">Search</button>
                <p>Advanced</p>
            </form>
        </section>
    )
}

export default Search