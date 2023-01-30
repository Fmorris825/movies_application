const SearchBox = ({ setSearchValue, value }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to Search..."
      ></input>
    </div>
  );
};

export default SearchBox;
