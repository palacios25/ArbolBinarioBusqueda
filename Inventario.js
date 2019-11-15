import Articulo from "./Articulo.js";

export default class Inventario{
    constructor(){
        this.raiz = null;
    }

    agregar(articulo){
        let nuevo = new Articulo(articulo);

        if(this.raiz == null){
            this.raiz = nuevo;
            console.log(this.raiz);
        } else {
            _agregar(nuevo, this.raiz);
        }
    }

    _agregar(newArt, raiz){
        if(newArt.codigo > raiz.codigo){
            if(raiz.derecha == null){
                raiz.derecha = newArt;
                console.log("Derecha: " + this.raiz);
            } else {
                this._agregar(newArt, raiz.derecha);
            }
        } else {
            if(raiz.izquierda == null){
                raiz.izquierda = newArt;
                console.log("Izquierda: " + this.raiz);
            } else {
                this._agregar(newArt, raiz.izquierda);
            }
        }
    }

    buscar(codigo){
        this._buscar(codigo, this.raiz);
    }

    _buscar(codigo, raiz){
        if(codigo == raiz.codigo){
            console.log("Encontrado: " + raiz);
            return raiz;
        } else {
            if(codigo > raiz.codigo){
                this._buscar(codigo, raiz.derecha);
            } else {
                this._buscar(codigo, raiz.izquierda);
            }
        }
    }

    InOrder(){
        if(this.raiz == null){
            return;
        } else {
            return _InOrder(this.raiz);
        }
    }

    _InOrder(raiz){
        if(raiz.izquierda != null){
            this._InOrder(raiz.izquierda);
        } 
        console.log(raiz.codigo);
        if(raiz.derecha != null){
             this._InOrder(raiz.derecha);
        }
    }

    PreOrder(){
        if(this.raiz == null){
            return;
        } else {
            return this._PreOrder(this.raiz);
        }
    }

    _PreOrder(){
        console.log(raiz.codigo);
        if(raiz.izquierda != null){
            this._PreOrder(raiz.izquierda);
        } 
        if(raiz.derecha != null){
            this._PreOrder(raiz.derecha);
       }
    }

    PosOrder(){
        if(this.raiz == null){
            return;
        } else {
            return this._PosOrder(this.raiz);
        }
    }

    _PosOrder(){
        if(raiz.izquierda != null){
            this._PosOrder(raiz.izquierda);
        } 
        if(raiz.derecha != null){
            this._PosOrder(raiz.derecha);
       }
       console.log(raiz.codigo);   
    }
}