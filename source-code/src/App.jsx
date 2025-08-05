import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, CheckCircle, Target, Zap, TrendingUp, Users, Brain, Rocket, Star, Award, BarChart3, Clock } from 'lucide-react'
import ccanLogo from './assets/logo-nova.png'
import ewerthonJose from './assets/ewerthon_jose_v2.webp'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <img src={ccanLogo} alt="Ccan Growth" className="w-24 h-24 mx-auto mb-6 pulse-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bem-vindo ao <span className="gold-gradient">Futuro</span> do Crescimento: Onde a IA Transforma Potencial em Resultados.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Na Ccan Growth, não apenas acompanhamos o futuro; nós o criamos. Com a inteligência artificial no coração de nossas estratégias de marketing e pré-vendas, transformamos o potencial em resultados tangíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 pulse-glow"
              onClick={() => scrollToSection('historia')}
            >
              Conheça Nossa História <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection('metodologia')}
            >
              Ver Metodologia
            </Button>
          </div>
        </div>
      </section>

      {/* História e Case Section */}
      <section id="historia" className="section-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Nossa Jornada</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Trajetória que <span className="gold-gradient">Impulsiona</span> Seu Sucesso
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                A Ccan Growth nasceu da visão de que o marketing e as vendas poderiam ser mais inteligentes, mais eficientes e, acima de tudo, mais lucrativos. Desde o nosso início, dedicamo-nos a desvendar os segredos do crescimento acelerado, combinando expertise humana com o poder transformador da inteligência artificial.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                Cada desafio de nossos clientes se tornou uma oportunidade para inovar, e cada sucesso, um testemunho da nossa abordagem.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-primary w-8 h-8" />
                <span className="text-lg font-semibold">Investimento de R$1.391,99 em tráfego, retorno de R$116.500,00 no mesmo mês.</span>
              </div>
            </div>
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="text-primary" />
                  Case de Sucesso: Ewerthon José
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img src={ewerthonJose} alt="Ewerthon José" className="w-full h-auto rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <span>Investimento em Tráfego</span>
                    <Badge variant="secondary">R$1.391,99</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Retorno no Mesmo Mês</span>
                    <Badge variant="secondary">R$116.500,00</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ROI</span>
                    <Badge variant="secondary">+80x</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Nosso compromisso é com resultados mensuráveis, transformando suas metas em realidade. Convidamos você a ser o próximo capítulo em nossa história de sucesso.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metodologia de Marketing Section */}
      <section id="metodologia" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Metodologia Comprovada</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing Estratégico: <span className="gold-gradient">Funis que Convertem</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Nossa metodologia de marketing é construída sobre a premissa de que cada interação com seu público é uma oportunidade de conversão.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Funil KLT System",
                description: "Construção de autoridade e relacionamento, transformando curiosos em defensores da sua marca."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Funil de Aquisição Direta",
                description: "Estratégias agressivas e otimizadas para capturar leads qualificados e impulsionar vendas imediatas."
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Funil Quiz",
                description: "Interatividade e personalização para segmentar leads e entender suas necessidades específicas."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Funil de Social Selling",
                description: "Alavancando o poder das redes sociais para identificar e engajar prospects de alta qualidade."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Funil de Indicações",
                description: "Transformando clientes satisfeitos em promotores da sua marca através do boca a boca digital."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Otimização Contínua",
                description: "Monitoramento e ajustes constantes para maximizar a performance de todos os funis."
              }
            ].map((funil, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="text-primary mb-2">{funil.icon}</div>
                  <CardTitle className="text-xl">{funil.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{funil.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia de Pré-Vendas com IA Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Inteligência Artificial</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pré-Vendas Inteligentes: <span className="gold-gradient">A IA a Serviço da Sua Conversão</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              A fase de pré-vendas é crucial para o sucesso comercial, e na Ccan Growth, a elevamos a um novo patamar com a integração estratégica da inteligência artificial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-primary w-6 h-6" />
                  Mais Leads Qualificados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Com scripts inteligentes e automação, a IA atende mais leads e os qualifica com precisão, garantindo que apenas os mais promissores cheguem à sua equipe de vendas.</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-primary w-6 h-6" />
                  Mais Reuniões de Vendas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">A IA otimiza o agendamento e reduz o no-show, resultando em um volume significativamente maior de reuniões de vendas efetivas.</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-primary w-6 h-6" />
                  Mais Vendas e Retorno
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ao qualificar melhor os leads e garantir mais reuniões, a IA impulsiona diretamente o número de vendas e, consequentemente, o seu faturamento.</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="text-primary w-6 h-6" />
                  Repescagem Eficaz e CRM Atualizado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Leads que não converteram inicialmente são reengajados de forma inteligente, transformando oportunidades perdidas em novas vendas. A IA também atualiza seu CRM automaticamente e fornece feedback valioso para o marketing.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A inteligência artificial da Ccan Growth não é apenas uma ferramenta; é um multiplicador de resultados. Enquanto o investimento em tráfego permanece o mesmo, a IA otimiza cada etapa do funil de pré-vendas, garantindo que você obtenha muito mais do seu investimento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Resultados Tangíveis</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Que Você Ganha ao <span className="gold-gradient">Escolher a Ccan Growth</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Ao escolher a Ccan Growth, você não está apenas contratando uma agência; você está investindo em um parceiro estratégico dedicado ao seu crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Otimização do Funil de Vendas",
                description: "Reduza o ciclo de vendas e aumente a taxa de conversão com um funil mais eficiente e preditivo, impulsionado por IA."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Qualificação de Leads Superior",
                description: "Sua equipe de vendas foca apenas em leads de alta qualidade, economizando tempo e recursos, e aumentando a produtividade."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Aumento da Receita",
                description: "Estratégias de marketing e pré-vendas alinhadas e otimizadas resultam em um crescimento significativo da sua receita."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Redução de Custos",
                description: "A automação e a inteligência artificial minimizam o desperdício de recursos, otimizando o ROI das suas campanhas."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Vantagem Competitiva",
                description: "Esteja à frente da concorrência com tecnologias e metodologias de ponta que poucos dominam."
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Decisões Baseadas em Dados",
                description: "Dashboards de resultados claros e insights acionáveis permitem decisões estratégicas mais assertivas."
              }
            ].map((beneficio, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-primary/20 text-center">
                <CardHeader>
                  <div className="text-primary mb-4 flex justify-center">{beneficio.icon}</div>
                  <CardTitle className="text-xl">{beneficio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fluxo do Projeto Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Processo Transparente</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sua Jornada de <span className="gold-gradient">Crescimento</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Na Ccan Growth, acreditamos na transparência e na colaboração. Nosso fluxo de projeto é desenhado para garantir que você esteja sempre a par de cada etapa do seu crescimento.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              <div className="space-y-12">
                {[
                  {
                    day: "Dia 0",
                    title: "Início da Parceria e Fechamento",
                    description: "Onde tudo começa. Celebramos o início da nossa colaboração e damos o pontapé inicial para o seu crescimento.",
                    icon: <Rocket className="w-6 h-6" />
                  },
                  {
                    day: "Dia 1",
                    title: "Onboarding e Diagnóstico",
                    description: "Mergulhamos fundo no seu negócio. Realizamos um diagnóstico completo da sua estrutura, mercado, marketing, pré-vendas e vendas.",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    day: "Dia 1-7",
                    title: "Estruturação e Apresentação",
                    description: "Com base no diagnóstico, desenvolvemos e apresentamos a você a nova estrutura estratégica, detalhando como o marketing e a pré-vendas com IA serão implementados.",
                    icon: <Brain className="w-6 h-6" />
                  },
                  {
                    day: "Dia 7",
                    title: "Kickoff e Implementação",
                    description: "É hora de colocar o plano em ação. Iniciamos a implementação das estratégias e ferramentas, com um kickoff para alinhar todas as equipes envolvidas.",
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    day: "Dia 14+",
                    title: "Otimização Contínua e Crescimento",
                    description: "Nossa parceria não termina com a implementação. Entramos em uma fase de acompanhamento constante, otimização contínua e busca por novas oportunidades de crescimento.",
                    icon: <TrendingUp className="w-6 h-6" />
                  }
                ].map((etapa, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
                        <CardHeader>
                          <div className="flex items-center gap-2 justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                            <Badge variant="outline">{etapa.day}</Badge>
                          </div>
                          <CardTitle className="text-xl">{etapa.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{etapa.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                      {etapa.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden timeline-mobile">
              {[
                {
                  day: "Dia 0",
                  title: "Início da Parceria e Fechamento",
                  description: "Onde tudo começa. Celebramos o início da nossa colaboração e damos o pontapé inicial para o seu crescimento.",
                  icon: <Rocket className="w-5 h-5" />
                },
                {
                  day: "Dia 1",
                  title: "Onboarding e Diagnóstico",
                  description: "Mergulhamos fundo no seu negócio. Realizamos um diagnóstico completo da sua estrutura, mercado, marketing, pré-vendas e vendas.",
                  icon: <Target className="w-5 h-5" />
                },
                {
                  day: "Dia 1-7",
                  title: "Estruturação e Apresentação",
                  description: "Com base no diagnóstico, desenvolvemos e apresentamos a você a nova estrutura estratégica, detalhando como o marketing e a pré-vendas com IA serão implementados.",
                  icon: <Brain className="w-5 h-5" />
                },
                {
                  day: "Dia 7",
                  title: "Kickoff e Implementação",
                  description: "É hora de colocar o plano em ação. Iniciamos a implementação das estratégias e ferramentas, com um kickoff para alinhar todas as equipes envolvidas.",
                  icon: <Zap className="w-5 h-5" />
                },
                {
                  day: "Dia 14+",
                  title: "Otimização Contínua e Crescimento",
                  description: "Nossa parceria não termina com a implementação. Entramos em uma fase de acompanhamento constante, otimização contínua e busca por novas oportunidades de crescimento.",
                  icon: <TrendingUp className="w-5 h-5" />
                }
              ].map((etapa, index) => (
                <div key={index} className="timeline-item-mobile">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <Badge variant="outline">{etapa.day}</Badge>
                  </div>
                  <div className="timeline-content">
                    <div className="flex items-center gap-2 mb-3">
                      {etapa.icon}
                      <h3 className="font-bold text-lg text-primary">{etapa.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{etapa.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="gold-gradient">Transformar</span> Seu Negócio?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Sua próxima grande conquista começa aqui, no futuro que construímos juntos. Entre em contato e descubra como a Ccan Growth pode acelerar seu crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 pulse-glow"
                onClick={() => window.open('https://wa.me/5511974838921', '_blank')}
              >
                Iniciar Minha Jornada <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/5511974838921', '_blank')}
              >
                Agendar Conversa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={ccanLogo} alt="Ccan Growth" className="w-8 h-8" />
            <span className="font-bold text-lg">Ccan Growth</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Ccan Growth. Todos os direitos reservados. Bem-vindo ao futuro do crescimento.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


