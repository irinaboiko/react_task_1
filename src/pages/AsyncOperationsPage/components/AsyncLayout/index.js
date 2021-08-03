import { CircularProgress, Backdrop } from "@material-ui/core";

const AsyncOperationPageLayout = ({
  pokemons,
  handleGoToPokemonDetails,
  isLoading,
}) => {
  return (
    <div>
      <Backdrop open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <div>
        {pokemons.map((pokemon) => {
          return (
            <div
              key={pokemon.name}
              onClick={() => {
                handleGoToPokemonDetails(pokemon.name);
              }}
            >
              {pokemon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsyncOperationPageLayout;
