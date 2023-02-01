import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchBox = ({ setSearchValue, value }) => {
  const [tempSearch, setTempSearch] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(tempSearch);
    setSearchValue(tempSearch);
  };

  return (
    <Form className="col col-sm-4 " onSubmit={handleSearchSubmit}>
      <FormControl
        className="form-control"
        value={value}
        onChange={(event) => setTempSearch(event.target.value)}
        placeholder="Type to Search..."
      ></FormControl>
    </Form>
  );
};

export default SearchBox;
