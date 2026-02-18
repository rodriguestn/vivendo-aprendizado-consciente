import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Award,
  Heart,
  Target,
  Users,
  Sparkles,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Quote,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Star
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { CalinkaOrbital } from "@/components/about/CalinkaOrbital";
import { TeamSection } from "@/components/about/TeamSection";
import { WHATSAPP_URL } from "@/constants/whatsapp";
import calinkaPortrait from "@/assets/calinka-portrait.png";

const About = () => {
  const timeline = [
    {
      year: "2009",
      title: "Licenciatura em Letras",
      description: "Formação em Letras Português/Inglês pela Universidade Federal do Espírito Santo (UFES)",
      icon: GraduationCap,
    },
    {
      year: "2012",
      title: "Especialização em Gestão Escolar",
      description: "Pós-graduação com foco em Gestão, Orientação Educacional, Supervisão e Coordenação",
      icon: Award,
    },
    {
      year: "2014",
      title: "Extensão em Metodologias",
      description: "Aprofundamento em Metodologia do Ensino de Português e Alfabetização de Jovens e Adultos",
      icon: BookOpen,
    },
    {
      year: "2022",
      title: "Nasce a Blau Consultoria",
      description: "Início da missão de transformar empresas através da educação corporativa estratégica",
      icon: Sparkles,
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "O Ser Humano no Centro",
      description: "As empresas já valorizaram tudo, menos o ser humano agente da função. Nós colocamos as pessoas no centro de toda estratégia.",
    },
    {
      icon: Target,
      title: "Coerência Estratégica",
      description: "Quando estratégia, estrutura e educação conversam entre si, a empresa se torna mais justa, mais leve e mais competitiva.",
    },
    {
      icon: Users,
      title: "Estruturas Que Habilitam",
      description: "Estruturas educacionais não são neutras. Elas habilitam ou sabotam a estratégia. Construímos para habilitar.",
    },
    {
      icon: Lightbulb,
      title: "Educação Como Capital",
      description: "Conhecimento não é recurso — é capital humano em movimento. Empresas que aprendem primeiro, lideram.",
    },
  ];

  const credentials = [
    {
      type: "Graduação",
      title: "Licenciatura Plena em Letras – Português/Inglês",
      institution: "Universidade Federal do Espírito Santo (UFES)",
      year: "2009",
    },
    {
      type: "Pós-Graduação",
      title: "Gestão Escolar (480h)",
      institution: "FAEV - Faculdade de Vitória/ES",
      year: "2012",
      specializations: [
        "Orientação Educacional",
        "Supervisão Escolar",
        "Coordenação Pedagógica",
        "Inspeção Escolar",
        "Administração Escolar",
      ],
    },
  ];

  const extensionCourses = [
    "Metodologia do Ensino de Português",
    "Leitura e Escrita no Contexto Escolar",
    "Alfabetização e Letramento na Educação de Jovens e Adultos",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sobre a Blau | Nossa História"
        description="Conheça a história da Blau Consultoria, fundada por Calinka Rodor. Mais de 15 anos transformando empresas através da educação corporativa."
        canonical="/sobre"
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-blue-200 rounded-full text-sm font-medium mb-6">
                    <Heart className="w-4 h-4" />
                    Conheça Nossa História
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Educação como{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                      Infraestrutura Estratégica
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                    A Blau nasceu da crença de que <strong className="text-white">educação não são cursos
                      e treinamentos técnicos</strong>. É o modo como a organização traduz sua estratégia
                    em lógica operacional — produzindo conhecimento, distribuindo responsabilidades
                    e cultivando o maior patrimônio de uma empresa: o ser humano.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/diagnostico"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-semibold rounded-full hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg"
                    >
                      Conhecer o Blau Mapa
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="#historia"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
                    >
                      Nossa Jornada
                    </a>
                  </div>
                </motion.div>

                {/* Founder Image/Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    {/* Decorative quote */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-gray-900" />
                    </div>

                    <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-6">
                      "A estratégia é o hardware que sustenta o funcionamento do negócio.
                      A Educação é o software que dá precisão a esse hardware. Quando esses
                      elementos conversam, a empresa ganha vida."
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={calinkaPortrait}
                        alt="Calinka Rodor"
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                      />
                      <div>
                        <p className="text-white font-semibold text-lg">Calinka Rodor</p>
                        <p className="text-blue-200">Fundadora da Blau Consultoria</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-400">15+</p>
                        <p className="text-sm text-blue-200">Anos em Educação</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-400">50+</p>
                        <p className="text-sm text-blue-200">Empresas Atendidas</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-400">2022</p>
                        <p className="text-sm text-blue-200">Fundação Blau</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="historia" className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  <BookOpen className="w-4 h-4" />
                  Nossa História
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Da Sala de Aula à Transformação Corporativa
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Uma jornada de mais de 15 anos dedicados à educação, que culminou na criação
                  de uma consultoria com propósito: transformar empresas em verdadeiros ambientes
                  de aprendizado.
                </p>
              </motion.div>

              {/* Story with Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Photo Column */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <img
                        src={calinkaPortrait}
                        alt="Calinka Rodor - Fundadora da Blau Consultoria"
                        className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover aspect-[3/4]"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-xl shadow-lg">
                        <p className="font-bold">Calinka Rodor</p>
                        <p className="text-xs text-blue-200">Fundadora</p>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="lg:col-span-3 prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Tudo começou com uma <strong className="text-gray-900">paixão genuína por ensinar</strong>.
                      Formada em Letras pela Universidade Federal do Espírito Santo, Calinka dedicou anos
                      ao ensino, desenvolvendo uma compreensão profunda de como adultos aprendem, se motivam
                      e transformam conhecimento em ação.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      A especialização em Gestão Escolar abriu novos horizontes: não bastava ensinar bem,
                      era preciso <strong className="text-gray-900">criar sistemas que multiplicassem o aprendizado</strong>.
                      Foi ali que nasceu a visão que hoje guia a Blau: empresas podem (e devem) ser
                      ambientes onde o desenvolvimento humano acontece de forma estratégica e contínua.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      Em <strong className="text-gray-900">2022, a Blau Consultoria nasceu</strong> com uma missão clara:
                      levar a lógica das maiores escolas de negócio para dentro das empresas. Não como
                      treinamentos pontuais, mas como <strong className="text-gray-900">infraestrutura estratégica</strong> —
                      um núcleo vivo que pulsa cultura, autonomia, inovação e consistência.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      Hoje, a Blau atua como <strong className="text-gray-900">mentora de startups no programa Seedes</strong>,
                      do Governo do ES, e continua provando que quando educação se alinha à estratégia,
                      a empresa alcança um patamar de funcionamento com alta eficiência — mais justa,
                      mais leve e mais competitiva.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <span className="text-sm font-bold text-blue-600">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full items-center justify-center shadow-lg z-10">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calinka Orbital Visualization */}
        <CalinkaOrbital />

        {/* Credentials Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                <GraduationCap className="w-4 h-4" />
                Formação Acadêmica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conhecimento que Transforma
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Uma base acadêmica sólida em educação, gestão e metodologias de ensino,
                aplicada estrategicamente ao contexto empresarial.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Main Credentials */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={cred.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {cred.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cred.title}</h3>

                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{cred.institution}</span>
                      <span className="text-gray-300">•</span>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cred.year}</span>
                    </div>

                    {cred.specializations && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-700 mb-3">Especializações:</p>
                        <div className="flex flex-wrap gap-2">
                          {cred.specializations.map((spec) => (
                            <span
                              key={spec}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                            >
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Extension Courses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-amber-400" />
                  <h3 className="text-xl font-bold">Cursos de Extensão (FASE, 2014)</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {extensionCourses.map((course) => (
                    <div
                      key={course}
                      className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                    >
                      <Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-blue-100">{course}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team & Consultants */}
        <TeamSection />

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Nossos Valores
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nosso Manifesto
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Toda empresa deseja executar sua estratégia com clareza, velocidade e precisão.
                O desafio surge na travessia entre intenção e prática — e nessa travessia, um fator
                se torna decisivo: a coerência entre estratégia, estrutura e educação.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Manifesto Essence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <Quote className="w-10 h-10 text-amber-400/60 mb-6" />
                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
                    Quando a Educação é uma base bem construída, a empresa ganha vida: os papéis se encaixam,
                    os níveis fazem sentido e o sistema de gestão de pessoas passa a operar com justiça e objetividade.
                  </p>
                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
                    Se não há escola — lugar de educação — surgem distorções que comprometem
                    performance, clima e a execução estratégica. Títulos inflados, funções duplicadas,
                    papéis indefinidos. Tudo isso gera insegurança, conflitos e uma percepção
                    de injustiça que afeta diretamente engajamento e retenção.
                  </p>
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                    Profissionais de alto desempenho escolhem ambientes onde existe lógica, transparência
                    e coerência. E empresas competitivas entendem que essa coerência não surge
                    espontaneamente: ela é desenhada, revisada e continuamente mantida.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      Parceria Estratégica
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Mentora de Startups no Seedes
                  </h2>

                  <p className="text-emerald-100 text-lg mb-6 max-w-2xl">
                    A Blau Consultoria é mentora oficial no programa Seedes, iniciativa do
                    Governo do Estado do Espírito Santo que apoia o ecossistema de startups
                    e inovação.
                  </p>

                  <p className="text-emerald-100 mb-8">
                    Essa parceria reforça nosso compromisso com a educação e o desenvolvimento
                    de novos negócios, ajudando empreendedores a estruturar suas equipes e
                    criar culturas de aprendizado desde o início.
                  </p>

                  <a
                    href="https://seedes.es.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all shadow-lg"
                  >
                    Conhecer o Seedes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Pronto para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Construir Futuro?
                </span>
              </h2>

              <p className="text-xl text-blue-100 mb-10">
                Se você sente que já passou da hora de parar de "apagar incêndios"
                e começar a construir as bases do futuro com estratégia — a conversa começa aqui.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/diagnostico"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-bold rounded-full hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg text-lg"
                >
                  Conhecer o Blau Mapa
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 text-lg"
                >
                  Falar com a Blau
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">15+</p>
                  <p className="text-sm text-blue-200">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">50+</p>
                  <p className="text-sm text-blue-200">Empresas Transformadas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">95%</p>
                  <p className="text-sm text-blue-200">Satisfação dos Clientes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">100+</p>
                  <p className="text-sm text-blue-200">Líderes Formados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
