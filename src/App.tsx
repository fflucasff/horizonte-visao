import { useState } from 'react'
import Formulario from './Formulario'
import {
  abertura,
  atendimentos,
  clinica,
  duvidas,
  jornada,
  navegacao,
  refrativa,
  rodape,
  tecnologia,
} from './conteudo'

export default function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="topo-interno">
          <a className="marca" href="#topo">
            <Simbolo />
            <span>
              <span className="marca-texto">
                {clinica.nome} <em>{clinica.sobrenome}</em>
              </span>
              <span className="marca-descritor">{clinica.descritor}</span>
            </span>
          </a>

          <nav className="nav-topo" aria-label="Seções do site">
            {navegacao.map((i) => (
              <a key={i.id} href={`#${i.id}`}>
                {i.rotulo}
              </a>
            ))}
          </nav>

          <a className="botao" href="#avaliacao">
            Solicitar avaliação
          </a>

          <button
            className="menu-botao"
            onClick={() => setMenu((a) => !a)}
            aria-expanded={menu}
            aria-controls="menu-movel"
          >
            {menu ? 'Fechar' : 'Menu'}
          </button>
        </div>

        <nav
          className={`menu-movel${menu ? ' aberto' : ''}`}
          id="menu-movel"
          aria-label="Seções do site"
        >
          {navegacao.map((i) => (
            <a key={i.id} href={`#${i.id}`} onClick={() => setMenu(false)}>
              {i.rotulo}
            </a>
          ))}
          <a href="#avaliacao" onClick={() => setMenu(false)}>
            Solicitar avaliação
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="abertura" id="topo">
          <div className="abertura-grade">
            <div>
              <p className="medida">{abertura.medida}</p>
              <h1>{abertura.titulo}</h1>
              <p className="abertura-texto">{abertura.texto}</p>
              <div className="abertura-acao">
                <a className="botao" href="#avaliacao">
                  {abertura.chamada}
                </a>
              </div>
            </div>

            <div className="abertura-figura">
              <AlvoDeFoco />
              <p className="figura-legenda">
                Representação dos eixos medidos na avaliação: curvatura,
                espessura e comportamento da luz.
              </p>
            </div>
          </div>
        </section>

        <section className="secao" id="atendimentos">
          <div className="cabeca">
            <h2>{atendimentos.titulo}</h2>
            <p>{atendimentos.intro}</p>
          </div>

          <div className="atendimentos">
            {atendimentos.itens.map((i) => (
              <article className="atendimento" key={i.nome}>
                <h3>{i.nome}</h3>
                <p>{i.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao-neve" id="refrativa">
          <div className="interno secao">
            <div className="cabeca">
              <h2>{refrativa.titulo}</h2>
              <p>{refrativa.intro}</p>
            </div>

            <div className="criterios">
              {refrativa.criterios.map((c) => (
                <article className="criterio" key={c.titulo}>
                  <svg className="criterio-marca" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#c3ccc8" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="5.5" fill="none" stroke="#1f6655" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="1.8" fill="#1f6655" />
                  </svg>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </article>
              ))}
            </div>

            <p className="aviso-destaque">{refrativa.aviso}</p>
          </div>
        </section>

        <section className="secao-escura" id="jornada">
          <div className="interno secao">
            <div className="cabeca">
              <h2>{jornada.titulo}</h2>
            </div>

            <ol className="passos">
              {jornada.passos.map((p) => (
                <li className="passo" key={p.numero}>
                  <p className="passo-numero">{p.numero}</p>
                  <h3>{p.titulo}</h3>
                  <p className="passo-tempo">{p.tempo}</p>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao" id="tecnologia">
          <div className="cabeca">
            <h2>{tecnologia.titulo}</h2>
            <p>{tecnologia.intro}</p>
          </div>

          <div className="exames">
            {tecnologia.itens.map((e) => (
              <article className="exame" key={e.nome}>
                <h3>{e.nome}</h3>
                <div>
                  <p className="exame-pergunta">{e.pergunta}</p>
                  <p>{e.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="secao-neve" id="duvidas">
          <div className="interno secao">
            <div className="cabeca">
              <h2>Dúvidas frequentes</h2>
            </div>
            <Duvidas />
          </div>
        </section>

        <section className="secao" id="avaliacao">
          <div className="form-grade">
            <div className="form-lateral">
              <div className="cabeca" style={{ marginBottom: 20 }}>
                <h2>Solicitar uma avaliação</h2>
              </div>
              <p>
                Conte o motivo da procura. A equipe retorna com os horários
                disponíveis, o valor da consulta e a orientação sobre o que
                levar.
              </p>
              <ul className="form-lista">
                <li>
                  <Marcador />
                  <span>A consulta inicial não exige preparo nem jejum</span>
                </li>
                <li>
                  <Marcador />
                  <span>
                    Nos exames de avaliação a pupila é dilatada, então não é
                    possível dirigir na volta
                  </span>
                </li>
                <li>
                  <Marcador />
                  <span>
                    A resposta sobre elegibilidade para cirurgia vem depois dos
                    exames, nunca antes
                  </span>
                </li>
              </ul>
            </div>

            <Formulario />
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-interno">
          <p className="rodape-marca">
            {clinica.nome} {clinica.sobrenome}
          </p>
          <p>{rodape.avisoMedico}</p>
          <p>{rodape.aviso}</p>
        </div>
      </footer>

      <div className="acao-fixa">
        <a className="botao" href="#avaliacao">
          Solicitar avaliação
        </a>
      </div>
    </>
  )
}

function Simbolo() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="#1c1f1e" strokeWidth="2" />
      <circle cx="16" cy="16" r="7.5" stroke="#1f6655" strokeWidth="2" />
      <circle cx="16" cy="16" r="2.4" fill="#1f6655" />
      <path d="M2 16h5M25 16h5" stroke="#1c1f1e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Marcador() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ marginTop: 3 }}>
      <circle cx="10" cy="10" r="8.5" stroke="#c3ccc8" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.4" fill="#1f6655" />
    </svg>
  )
}

/** Composição própria: anéis concêntricos com eixos de medida. */
function AlvoDeFoco() {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Diagrama de anéis concêntricos representando os eixos medidos na avaliação"
    >
      <defs>
        <radialGradient id="h1">
          <stop offset="0%" stopColor="#2e8b74" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#2e8b74" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="150" fill="url(#h1)" />
      {[150, 122, 94, 66, 38].map((r, i) => (
        <circle
          key={r}
          cx="160"
          cy="160"
          r={r}
          fill="none"
          stroke={i === 2 ? '#1f6655' : '#c3ccc8'}
          strokeWidth={i === 2 ? 2.2 : 1.2}
          strokeDasharray={i % 2 === 1 ? '4 6' : undefined}
        />
      ))}
      <circle cx="160" cy="160" r="12" fill="#1f6655" />
      <line x1="10" y1="160" x2="310" y2="160" stroke="#1c1f1e" strokeWidth="1" opacity="0.35" />
      <line x1="160" y1="10" x2="160" y2="310" stroke="#1c1f1e" strokeWidth="1" opacity="0.35" />
      <circle cx="254" cy="160" r="5" fill="#b8841f" />
      <text x="248" y="186" fontSize="12" fontFamily="Manrope, sans-serif" fill="#636a68">
        eixo
      </text>
    </svg>
  )
}

function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(null)

  return (
    <div className="duvidas">
      {duvidas.map((item, i) => {
        const expandida = aberta === i
        return (
          <div className="duvida" key={item.pergunta}>
            <h3>
              <button
                className="duvida-botao"
                aria-expanded={expandida}
                aria-controls={`duvida-${i}`}
                onClick={() => setAberta(expandida ? null : i)}
              >
                {item.pergunta}
                <span className="sinal" aria-hidden="true">
                  {expandida ? '−' : '+'}
                </span>
              </button>
            </h3>
            {expandida && (
              <div className="duvida-resposta" id={`duvida-${i}`}>
                {item.resposta}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
