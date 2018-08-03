export default function errorApiHandler(erro) {
  if (erro.data) {
    const {
      data: { code },
      title,
      status
    } = erro;
    if (code) {
      if (code === 1) {
        alert(`Erro ${title}`);
      } else {
        const titulo = !title ? '' : title;
        alert(`Atenção ${titulo}`);
      }
    } else if (status) {
      if (status === 401) {
        alert('Não autorizado');
      } else if (status === 404) {
        alert('API não encontrada');
      } else if (erro.data instanceof Blob && status === 400) {
        alert('Ocorreu um erro ao gerar o relatório');
      } else {
        alert(`${title}`);
      }
    } else {
      alert(`Erro ${title}`);
    }
  } else {
    alert('Ocorreu um erro e não foi possível se conectar com a API');
  }
}
