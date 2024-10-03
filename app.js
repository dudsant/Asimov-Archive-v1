document.addEventListener("keypress", function(e) {

if(e.key === "Enter") {

    const btn = document.querySelector("#botao");

    btn.click();

} 

}); 

function pesquisar() {
    let section = document.getElementById('resultado-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = `
        <h2><font color = red>Você não digitou nada.</h2>
        `
        return
    }

    let resultados = '';
    let titulo = '';
    let descricao = '';
    let contexto = '';
    let influencia = '';

    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        contexto = dado.contexto.toLowerCase();
        influencia = dado.influencia.toLowerCase();
        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || contexto.includes(campoPesquisa) || influencia.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class = "descricao-meta">${dado.descricao}<br><br>${dado.contexto}<br><br>${dado.influencia}</p>
                <a href = ${dado.link} target ="_blank">Clique aqui para comprar a obra pela Amazon.</a>
            </div>
        `;
        }
    }
    if (!resultados) {
        resultados = '<h2><font color = red>Nenhum resultado encontrado.</h2>'
    }
    
    section.innerHTML = resultados
} 
