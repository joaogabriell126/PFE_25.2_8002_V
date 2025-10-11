import Button from './components/ui/Button/Button.jsx';

function App() {
  return (
    <div>
      <h1>Exemplos de componentização do botão</h1>
      <Button variant="primary">Entre Agora</Button>
      <Button variant="alternative">Entre Agora</Button>
      <Button variant="danger">Entre Agora</Button>

      <h1>Exemplos de componentização do botão</h1>
      <Button variant="primary" size='small'>Entre Agora</Button>
      <Button variant="alternative" size='small'>Entre Agora</Button>
      <Button variant="danger" size='small'>Entre Agora</Button>
    </div>
  );
}

export default App;