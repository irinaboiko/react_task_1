import PropTypes from "prop-types";

const AsyncOperationPageLayout = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

AsyncOperationPageLayout.propTypes = {};

export default AsyncOperationPageLayout;
