import Button from './components/ui/Button/Button.jsx';
import Modal from './components/ui/Modal/Modal.jsx';
import Textarea from './components/ui/Textarea/Textarea.jsx';

  function App() {
    return (
      <div>
        <h1>Exemplos de componentização do botão - Grande</h1>
        <Button variant="primary">Entre Agora</Button>
        <Button variant="alternative">Entre Agora</Button>
        <Button variant="danger">Entre Agora</Button>

        <h1>Exemplos de componentização do botão - médio</h1>
        <Button variant="primary" size='medium'>Entre Agora</Button>
        <Button variant="alternative" size='medium'>Entre Agora</Button>
        <Button variant="danger" size='medium'>Entre Agora</Button>

        <h1>Exemplos de componentização do botão - Pequeno</h1>
        <Button variant="primary" size='small'>Entre Agora</Button>
        <Button variant="alternative" size='small'>Entre Agora</Button>
        <Button variant="danger" size='small'>Entre Agora</Button>

        {/* <Modal>Tem certeza que deseja remover essa vaga permanentemente?</Modal> */}

        {/* Usando o componente Textarea */}
        <Textarea
          label="Sua Mensagem"
          name="mensagem" // O 'name' deve ser igual à chave no estado 'formData'
          placeholder="Digite sua mensagem aqui..."
          rows={6}
        />
      </div>
    );
  }

export default App;