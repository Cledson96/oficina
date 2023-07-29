import { useEffect } from "react";

export function diminuirCarrinho(itemId, add, setAdd) {
  const carrinho = localStorage.getItem("carrinho") || "[]";
  const carrinhoAtualizado = JSON.parse(carrinho);

  const itemExistente = carrinhoAtualizado.find(
    (item) => item.id === itemId.id
  );
  if (itemExistente && itemExistente.quantidade > 1) {
    itemExistente.quantidade = itemExistente.quantidade - 1;
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  setAdd(!add);
}

export function aumentarCarrinho(itemId, add, setAdd) {
  const carrinho = localStorage.getItem("carrinho") || "[]";
  const carrinhoAtualizado = JSON.parse(carrinho);

  const itemExistente = carrinhoAtualizado.find(
    (item) => item.id === itemId.id
  );
  if (itemExistente && itemExistente.quantidade < itemExistente.qtd) {
    itemExistente.quantidade = itemExistente.quantidade + 1;
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  setAdd(!add);
}

export function removerItemDoCarrinho(itemId, add, setAdd) {
  const carrinho = localStorage.getItem("carrinho") || "[]";
  const carrinhoAtualizado = JSON.parse(carrinho);

  const carrinhoFiltrado = carrinhoAtualizado.filter(
    (item) => item.id !== itemId
  );

  localStorage.setItem("carrinho", JSON.stringify(carrinhoFiltrado));
  setAdd(!add);
}

export function useCarrinhoTotal(setCar, add, setTotal, setQtd) {
  useEffect(() => {
    const carrinho = localStorage.getItem("carrinho") || [];
    let atualizado;
    try {
      atualizado = carrinho.length > 0 ? JSON.parse(carrinho) : [];
    } catch (error) {
      atualizado = [];
    }
    setCar(atualizado);
    let soma = 0;
    for (let i = 0; i < atualizado.length; i++) {
      if (
        Number(atualizado[i].promocao) > 0 &&
        Number(atualizado[i].promocao) < Number(atualizado[i].preco)
      ) {
        soma = soma + Number(atualizado[i].promocao) * atualizado[i].quantidade;
      } else {
        soma = soma + Number(atualizado[i].preco) * atualizado[i].quantidade;
      }
    }
    setTotal(soma);
    setQtd(atualizado.length);
  }, [add]);
}
