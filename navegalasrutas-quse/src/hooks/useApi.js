import { menu } from "../assets/data.js";

export function useApiMenu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menu);
    }, 1000);
  });
}

export function useApiList(categoria) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const listaPlatos = menu.find(item => item.tipo === categoria)?.platos;
      resolve(listaPlatos);
    }, 1000);
  });
}

export function useApiDetail(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const plato = menu
        .flatMap(item => item.platos)
        .find(plato => plato.nombre === nombre);
      resolve(plato);
    }, 1000);
  });
}
