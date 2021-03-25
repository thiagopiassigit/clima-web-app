import DivCustomizavel from '../index'
import UtilitarioDom from '../../../recursos/testes/UtilitariosDom'
import {desmontarContainer, criarContainerNoDom} from '../../../recursos/testes/funçõesPadrãoDeTeste'

beforeEach(() => criarContainerNoDom())
afterEach(() => desmontarContainer())

describe("Testando Div customizavel", () => {

    it("parametro cor", () => {

        const componente = UtilitarioDom.renderizar(<DivCustomizavel cor="red" />)
        expect(componente.style.backgroundColor).toBe("red")

    })

    it("parametro largura", () => {
    
        const componente = UtilitarioDom.renderizar(<DivCustomizavel largura="100px" />)
        expect(componente.style.width).toBe("100px")

    })

    it("parametro altura", () => {
    
        const componente = UtilitarioDom.renderizar(<DivCustomizavel altura="100px" />)
        expect(componente.style.height).toBe("100px")

    })

    it("parametro css", () => {

        const css = {
            boxShadow: '0 0 0 10px black'
        }
    
        const componente = UtilitarioDom.renderizar(<DivCustomizavel css={css} />)        
        expect(componente.style.boxShadow).toBe(css.boxShadow)

    })

    it("parametro classe", () => {
    
        const componente = UtilitarioDom.renderizar(<DivCustomizavel classe="teste" />)
        expect(componente.className).toBe("teste")

    })

})