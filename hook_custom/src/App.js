import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innetText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  //verificação inicial de quando "data" está como null
  if (data)
    return (
      <div>
        <p>Preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
