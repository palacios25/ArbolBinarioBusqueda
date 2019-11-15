import Inventario from "./Inventario.js";
import Articulo from "./Articulo.js";

let inventario = new Inventario();

    document.querySelector("#btnRegistrar").addEventListener("click", () => {
      let form = document.querySelector("#form");

       {
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = document.querySelector("#precio").value;
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;


        let objArticulo = {
          codigo : codigo,
          nombre : nombre,
          precio : precio,
          cantidad : cantidad,
          descripcion : descripcion
        };

        let articulo = new Articulo(objArticulo);

        inventario._addToTable(articulo);
      }

      form.classList.add();
    });

    document.querySelector("#btnInOrder").addEventListener("click", () =>{
        inventario.InOrder();
    });
    
    document.querySelector("#btnPreOrder").addEventListener("click", () =>{
        inventario.PreOrder();
    });
    
    document.querySelector("#btnPosOrder").addEventListener("click", () =>{
        inventario.PosOrder();
    });
    
    document.querySelector("#btnBuscar").addEventListener("click", () =>{
        let Buscar = document.querySelector("#Buscar").value;
    
        inventario.buscar(Buscar);
    });
