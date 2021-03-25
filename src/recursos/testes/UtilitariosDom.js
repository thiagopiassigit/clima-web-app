import { render } from "react-dom";
import { act } from "react-dom/test-utils";

export default {

    primeiroFilho(elemento){
        return elemento.children[0]
    },

    renderizar(componente){

        act(() => {
            render(componente,document.getElementById('container'))
        })

        return this.obterComponenteTestado()
    },

    obterContainerDeTeste(){
        return document.getElementById('container')
    },

    obterComponenteTestado(){
        return this.primeiroFilho(this.obterContainerDeTeste())
    }

}