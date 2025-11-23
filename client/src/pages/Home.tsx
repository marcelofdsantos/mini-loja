import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const versions = [
    {
      id: "01-css-global",
      title: "CSS Global",
      description: "Estilização com CSS Global e variáveis CSS (Custom Properties)",
      path: "/01-css-global",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "02-css-modules",
      title: "CSS Modules",
      description: "Estilização com CSS Modules para escopo automático",
      path: "/02-css-modules",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "03-tailwind",
      title: "Tailwind CSS",
      description: "Estilização com Tailwind CSS (utility-first approach)",
      path: "/03-tailwind",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "04-styled-components",
      title: "styled-components",
      description: "Estilização com styled-components (CSS-in-JS)",
      path: "/04-styled-components",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            🛍️ E-commerce Styling Versions
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore a mesma tela de e-commerce implementada em 4 técnicas diferentes de estilização CSS.
            Cada versão demonstra as vantagens, desvantagens e melhores práticas de cada abordagem.
          </p>
        </div>

        <div className="mb-8">
          <Link href="/store">
            <a className="group block">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl border-2 border-green-400 hover:border-green-300 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-1 p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-green-100 transition-colors">
                  🏪 Loja Unificada
                </h2>
                <p className="text-green-100 mb-4">Veja todas as 4 técnicas em uma única página com abas</p>
                <div className="flex items-center justify-center gap-2 text-white group-hover:gap-3 transition-all font-semibold">
                  <span>Acessar Loja</span>
                  <ExternalLink size={20} />
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {versions.map((version) => (
            <Link key={version.id} href={version.path}>
              <a className="group block h-full">
                <div className="h-full bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-1">
                  <div className={`h-32 bg-gradient-to-r ${version.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {version.title}
                    </h2>
                    <p className="text-slate-400 mb-4">{version.description}</p>
                    <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                      <span className="font-semibold">Visualizar</span>
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">📋 Recursos Implementados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Navbar fixa com logo, toggle de tema e badge do carrinho</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Grid responsivo (1/2/3/4 colunas conforme breakpoint)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Cards de produto com imagem, título, rating e preço</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Dark mode com persistência em localStorage</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Botões com variantes (solid, outline, ghost)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Estados (hover, focus, disabled, loading)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Skeleton loader com shimmer animation</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Acessibilidade (WCAG AA, navegação por teclado)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Animações suaves (150-250ms)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Lazy loading de imagens</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Loja unificada com abas para alternar técnicas</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">🔍 Comparação de Técnicas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-white">Aspecto</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">CSS Global</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">CSS Modules</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">Tailwind</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">styled-components</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4">Escopo</td>
                  <td className="py-3 px-4">Global</td>
                  <td className="py-3 px-4">Componente</td>
                  <td className="py-3 px-4">Global</td>
                  <td className="py-3 px-4">Componente</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4">Conflitos</td>
                  <td className="py-3 px-4">Possíveis</td>
                  <td className="py-3 px-4">Impossíveis</td>
                  <td className="py-3 px-4">Improvável</td>
                  <td className="py-3 px-4">Impossível</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4">Type-Safety</td>
                  <td className="py-3 px-4">Não</td>
                  <td className="py-3 px-4">Sim</td>
                  <td className="py-3 px-4">Não</td>
                  <td className="py-3 px-4">Sim</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4">Bundle Size</td>
                  <td className="py-3 px-4">Pequeno</td>
                  <td className="py-3 px-4">Pequeno</td>
                  <td className="py-3 px-4">Médio</td>
                  <td className="py-3 px-4">Médio</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Dinâmico</td>
                  <td className="py-3 px-4">Sim</td>
                  <td className="py-3 px-4">Limitado</td>
                  <td className="py-3 px-4">Limitado</td>
                  <td className="py-3 px-4">Sim</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
