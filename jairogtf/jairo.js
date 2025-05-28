// Dados iniciais
const estadoJogo = {
    dinheiro: 1000000,
    corridaAtual: 1,
    pilotos: [
      { nome: "Felipe Massa", equipe: "Ferrari", contrato: 17 },
      { nome: "Lewis Hamilton", equipe: "McLaren", contrato: 17 },
      { nome: "Kimi Räikkönen", equipe: "Ferrari", contrato: 17 },
      { nome: "Fernando Alonso", equipe: "McLaren", contrato: 17 }
    ],
    estatisticas: [],
    patrocinadores: []
  };
  
  const historicoTemporadas = [];
  const titulosPilotos = {};
  const titulosEquipes = {};
  
  function abrirCorrida() {
    const piloto = estadoJogo.pilotos[Math.floor(Math.random() * estadoJogo.pilotos.length)];
    const posicao = Math.ceil(Math.random() * 8);
    const premio = 50000 * (9 - posicao);
  
    estadoJogo.dinheiro += premio;
    estadoJogo.estatisticas.push({
      corrida: estadoJogo.corridaAtual,
      piloto: piloto.nome,
      equipe: piloto.equipe,
      posicao,
      premio,
      pontos: posicao <= 8 ? 9 - posicao : 0
    });
  
    estadoJogo.corridaAtual++;
    if (estadoJogo.corridaAtual > 17) {
      novaTemporada();
    }
  
    document.getElementById("dinheiro").innerText = estadoJogo.dinheiro.toLocaleString();
    document.getElementById("numero-corrida").innerText = estadoJogo.corridaAtual;
  
    document.getElementById("tela-conteudo").innerHTML = `<p>Corrida ${estadoJogo.corridaAtual - 1} concluída!<br> ${piloto.nome} (${piloto.equipe}) chegou em ${posicao}º lugar. Prêmio: $${premio.toLocaleString()}</p>`;
  }
  
  function novaTemporada() {
    const pilotosClassificados = {};
    const equipesClassificadas = {};
    const vitoriasPilotos = {};
    const pontosPilotos = {};
  
    estadoJogo.estatisticas.forEach(e => {
      pilotosClassificados[e.piloto] = (pilotosClassificados[e.piloto] || 0) + (e.pontos || 0);
      equipesClassificadas[e.equipe] = (equipesClassificadas[e.equipe] || 0) + (e.pontos || 0);
      vitoriasPilotos[e.piloto] = (vitoriasPilotos[e.piloto] || 0) + (e.posicao === 1 ? 1 : 0);
      pontosPilotos[e.piloto] = (pontosPilotos[e.piloto] || 0) + (e.pontos || 0);
    });
  
    const classificacaoPilotos = Object.entries(pilotosClassificados)
      .map(([nome, pontos]) => ({ nome, pontos }))
      .sort((a, b) => b.pontos - a.pontos);
  
    const classificacaoEquipes = Object.entries(equipesClassificadas)
      .map(([nome, pontos]) => ({ nome, pontos }))
      .sort((a, b) => b.pontos - a.pontos);
  
    const campeaoPiloto = classificacaoPilotos[0]?.nome;
    const campeaEquipe = classificacaoEquipes[0]?.nome;
  
    if (campeaoPiloto) titulosPilotos[campeaoPiloto] = (titulosPilotos[campeaoPiloto] || 0) + 1;
    if (campeaEquipe) titulosEquipes[campeaEquipe] = (titulosEquipes[campeaEquipe] || 0) + 1;
  
    const maisVitorias = Object.entries(vitoriasPilotos).sort((a, b) => b[1] - a[1])[0];
    const maisPontos = Object.entries(pontosPilotos).sort((a, b) => b[1] - a[1])[0];
  
    historicoTemporadas.push({
      temporada: historicoTemporadas.length + 1,
      estatisticas: [...estadoJogo.estatisticas],
      dinheiroFinal: estadoJogo.dinheiro,
      classificacaoPilotos,
      classificacaoEquipes,
      campeaoPiloto,
      campeaEquipe,
      recordes: {
        maisVitorias,
        maisPontos
      }
    });
  
    estadoJogo.corridaAtual = 1;
    estadoJogo.estatisticas = [];
    estadoJogo.patrocinadores = [];
    estadoJogo.pilotos.forEach(p => p.contrato = 17);
    document.getElementById("numero-corrida").innerText = estadoJogo.corridaAtual;
    abrirCorrida();
  }
  
  function mostrarHistorico() {
    let html = `<h2>Histórico de Temporadas</h2>`;
    historicoTemporadas.forEach(t => {
      html += `<h3>Temporada ${t.temporada}</h3>`;
      html += `<p>Dinheiro final: $${t.dinheiroFinal.toLocaleString()}</p>`;
      if (t.campeaoPiloto && t.campeaEquipe) {
        html += `<p>🏆 Campeão: <strong>${t.campeaoPiloto}</strong></p>`;
        html += `<p>🏁 Equipe campeã: <strong>${t.campeaEquipe}</strong></p>`;
      }
      if (t.recordes) {
        html += `<p>🥇 Mais vitórias: ${t.recordes.maisVitorias[0]} (${t.recordes.maisVitorias[1]} vitórias)</p>`;
        html += `<p>📊 Mais pontos: ${t.recordes.maisPontos[0]} (${t.recordes.maisPontos[1]} pts)</p>`;
      }
      html += `<ul>`;
      t.estatisticas.forEach(e => {
        html += `<li>Corrida ${e.corrida}: ${e.piloto} (${e.equipe}) - ${e.posicao}º lugar - $${e.premio.toLocaleString()}</li>`;
      });
      html += `</ul>`;
  
      html += `<h4>Classificação dos Pilotos</h4>`;
      html += `<ol>`;
      t.classificacaoPilotos.forEach(p => {
        html += `<li>${p.nome} - ${p.pontos} pts</li>`;
      });
      html += `</ol>`;
  
      html += `<h4>Classificação das Equipes</h4>`;
      html += `<ol>`;
      t.classificacaoEquipes.forEach(e => {
        html += `<li>${e.nome} - ${e.pontos} pts</li>`;
      });
      html += `</ol>`;
    });
  
    html += `<h3>🏆 Títulos Acumulados</h3><h4>Pilotos</h4><ul>`;
    for (let piloto in titulosPilotos) {
      html += `<li>${piloto}: ${titulosPilotos[piloto]} título(s)</li>`;
    }
    html += `</ul><h4>Equipes</h4><ul>`;
    for (let equipe in titulosEquipes) {
      html += `<li>${equipe}: ${titulosEquipes[equipe]} título(s)</li>`;
    }
    html += `</ul><button onclick="abrirCorrida()">Voltar</button>`;
  
    document.getElementById("tela-conteudo").innerHTML = html;
  }
  