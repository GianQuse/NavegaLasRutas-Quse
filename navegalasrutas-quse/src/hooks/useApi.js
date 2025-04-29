import { useEffect, useState } from "react";
import { menu } from "../assets/data.js";

export function useApi () {
    const [items, setItems] = useState([]);

    const cargaMenu = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(menu);
        }, 3000);
      });
    };

    useEffect(() => {
        cargaMenu().then((detalles) => setItems(detalles));
      }, []);

    return items;
}