import { unmountComponentAtNode } from "react-dom"

export function criarContainerNoDom(container){
    container = document.createElement("div");
    container.setAttribute("id","container")
    document.body.appendChild(container);
}


export function desmontarContainer(container){
    container = document.getElementById('container')
    document.body.removeChild(container)
}