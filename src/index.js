function calcularConta() {
  const numeroMesa = parseInt(document.getElementById('numeroMesa').value);
  const numeroPessoas = parseInt(document.getElementById('numeroPessoas').value);
  const valorTotal = parseFloat(document.getElementById('valorTotal').value);
  const metodoPagamento = document.getElementById('metodoPagamento').value;
  const resultadoDiv = document.getElementById('resultado');

  // Validação dos campos
  if (isNaN(numeroMesa) || numeroMesa <= 0) {
      alert("Por favor, insira um número válido para a mesa.");
      return;
  }
  if (isNaN(numeroPessoas) || numeroPessoas <= 0) {
      alert("Por favor, insira um número válido de pessoas.");
      return;
  }
  if (isNaN(valorTotal) || valorTotal < 0) {
      alert("Por favor, insira um valor válido para a conta.");
      return;
  }

  // Cálculo do valor final da conta e do valor por pessoa
  let valorConta = valorTotal;
  let descontoAplicado = false;

  if (metodoPagamento === "pix" || metodoPagamento === "dinheiro") {
      valorConta *= 0.9;  // Aplica 10% de desconto
      descontoAplicado = true;
  }

  const valorPorPessoa = valorConta / numeroPessoas;

  // Exibindo o resultado
  resultadoDiv.innerHTML = `
      <p>Número da mesa: ${numeroMesa}</p>
      <p>Número de pessoas: ${numeroPessoas}</p>
      <p>Método de pagamento: ${metodoPagamento}</p>
      <p>Desconto aplicado: ${descontoAplicado ? "Sim (10%)" : "Não"}</p>
      <p>Valor final da conta: R$ ${valorConta.toFixed(2)}</p>
      <p>Valor a ser pago por pessoa: R$ ${valorPorPessoa.toFixed(2)}</p>
  `;
}
