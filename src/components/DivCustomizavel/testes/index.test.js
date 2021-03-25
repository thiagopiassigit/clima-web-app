import DivCustomizavel from '../index'
import UtilitarioDom from '../../../recursos/testes/UtilitariosDom'
import { criarContainerNoDom, desmontarContainer } from './funçõesPadrãoDeTeste'

beforeEach(() => criarContainerNoDom())
afterEach(() => desmontarContainer())

describe("Testando Div customizavel", () => {

    it("parametro cor", () => {

        const componente = UtilitarioDom.renderizar(<DivCustomizavel cor="red" largura="100px" altura="100px" />)
        expect(componente.style.backgroundColor).toBe("red")

    })

    it("parametro largura", () => {
    
        const componente = UtilitarioDom.renderizar(<DivCustomizavel cor="red" largura="100px" altura="100px" />)
        expect(componente.style.width).toBe("100px")

    })

    it("parametro altura", () => {
    
        const componente = UtilitarioDom.renderizar(<DivCustomizavel cor="red" largura="100px" altura="100px" />)
        expect(componente.style.height).toBe("100px")

    })

})