export default function DivCustomizavel(props){
    return(
        <div style={Object.assign({}, props.css, configuraçõesPadrãoDeEstilo(props.cor,props.largura,props.altura))} className={props.clsse}>
            {props.children}
        </div>
    )
}

function configuraçõesPadrãoDeEstilo(cor,largura,altura){
    return {
        backgroundColor: cor,
        width: largura,
        height: altura
    }
}
 