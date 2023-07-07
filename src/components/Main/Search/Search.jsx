import React from "react";

const Search = ({ setSeacrh }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    setSeacrh(event.target.setSearch.value)
  }

  return(
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Ex: Bulbasaur" />
          <button>Seacrh</button>
        </form>
      </section>
    </>
  )
};

export default Search;