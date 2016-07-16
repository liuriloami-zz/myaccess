use projetovestibular
db.dropDatabase()
db.users.insert([
{
    _id: 1,
    token: 'sha1$9dae7dd8$1$7d3ff138dbbe6a7d313b62927499092b251c55d3',
    name: "Liuri Loami",
    email: "liuriloami@gmail.com",
    type: "ADMIN"
},
{
    _id: 2,
    token: 'sha1$5662a8b0$1$536eb1ed8c873e4bbf8604f320943a98d2bbe24b',
    name: "Rinaldo Rolandi",
    email: "marketing@paginapopular.com.br",
    type: "TRIAL",
    expiredate: new Date(2016, 0, 31).toISOString()
},
{
    _id: 3,
    token: 'sha1$b45fc306$1$be0c6c98d4859d103052ce1dc29da4418deadc32',
    name: "Anna Brandão",
    email: "annaflaviaz@hotmail.com",
    type: "OK",
    expiredate: new Date(2016, 3, 16).toISOString()
},
{
    _id: 4,
    token: 'sha1$10cd91b7$1$18f2622d626cd18d59d06a9e4a2ef651927e0df9',
    name: "Girselia Ruyz",
    email: "girseliaruyz@hotmail.com",
    type: "EXPIRED",
    expiredate: new Date(2016, 0, 16).toISOString()
}])

db.categories.insert([{ _id: 1, slug: "portugues", name: "Português", parent: null },
    { _id: 2, slug: "literatura", name: "Literatura", parent: "portugues" },
    { _id: 3, slug: "redacao", name: "Redação", parent: "portugues" },
    { _id: 4, slug: "matematica", name: "Matemática", parent: null },
    { _id: 5, slug: "algebra", name: "Álgebra", parent: "matematica" },
    { _id: 6, slug: "geometria-plana", name: "Geometria Plana", parent: "matematica" },
    { _id: 7, slug: "geometria-analitica", name: "Geometria Analítica", parent: "matematica" },
    { _id: 8, slug: "trigonometria", name: "Trigonometria", parent: "matematica" },
    { _id: 9, slug: "fisica", name: "Física", parent: null },
    { _id: 10, slug: "cinematica", name: "Cinemática", parent: "fisica" },
    { _id: 11, slug: "mecanica", name: "Mecânica", parent: "fisica" },
    { _id: 12, slug: "termologia", name: "Termologia", parent: "fisica" },
    { _id: 13, slug: "eletrostatica", name: "Elestrostática", parent: "fisica" },
    { _id: 14, slug: "eletrodinamica", name: "Eletrodinâmica", parent: "fisica" },
    { _id: 15, slug: "ondas", name: "Ondas", parent: "fisica" },
    { _id: 16, slug: "quimica", name: "Química", parent: null },
    { _id: 17, slug: "quimica-geral", name: "Química Geral", parent: "quimica" },
    { _id: 18, slug: "quimica-inorganica", name: "Química Inorgânica", parent: "quimica" },
    { _id: 19, slug: "quimica-organica", name: "Química Orgânica", parent: "quimica" },
    { _id: 20, slug: "fisico-quimica", name: "Físico Química", parent: "quimica" },
    { _id: 21, slug: "biologia", name: "Biologia", parent: null },
    { _id: 22, slug: "biologia-celular", name: "Biologia Celular", parent: "biologia" },
    { _id: 23, slug: "ecologia", name: "Ecologia", parent: "biologia" },
    { _id: 24, slug: "genetica", name: "Genética", parent: "biologia" },
    { _id: 25, slug: "botanica", name: "Botânica", parent: "biologia" },
    { _id: 26, slug: "zoologia", name: "Zoologia", parent: "biologia" },
    { _id: 27, slug: "fisiologia-animal", name: "Fisiologia Animal", parent: "biologia" },
    { _id: 28, slug: "historia", name: "História", parent: null },
    { _id: 29, slug: "historia-geral", name: "História Geral", parent: "historia" },
    { _id: 30, slug: "historia-brasil", name: "História do Brasil", parent: "historia" },
    { _id: 31, slug: "geografia", name: "Geografia", parent: null },
    { _id: 32, slug: "geografia-geral", name: "Geografia Geral", parent: "geografia" },
    { _id: 33, slug: "geografia-brasil", name: "Geografia do Brasil", parent: "geografia" },
    { _id: 34, slug: "ingles", name: "Inglês", parent: null },
])

db.contents.insert([
    { _id: 1, created_at: new Date(2016,0,1), slug: "trovadorismo", name: "O Trovadorismo", category: "literatura", locked: false, content: cat('trovadorismo.md') },
    { _id: 2, created_at: new Date(2016,1,2), slug: "poesia-palaciana", name: "A Poesia Palaciana", category: "literatura", locked: false, content: cat('poesia-palaciana.md') },
    { _id: 3, created_at: new Date(2016,0,11), slug: "gil-vicente", name: "Gil Vicente", category: "literatura", locked: true, content: cat('gil-vicente.md') },
    { _id: 4, created_at: new Date(2016,0,7), slug: "fale-conosco", name: "Fale Conosco", page: true , content: ""},
    { _id: 5, created_at: new Date(2016,1,24), slug: "politica-de-privacidade", name: "Política de Privacidade", page: true , content: ""},
    { _id: 6, created_at: new Date(2016,1,22), slug: "quem-somos", name: "Quem Somos", page: true , content: ""},
    { _id: 7, created_at: new Date(2016,1,11), slug: "termos-de-uso", name: "Termos de Uso", page: true , content: ""},
])

db.exams.insert([
    { _id: 1, slug: "enem-2015", name: "ENEM 2015", locked: false },
    { _id: 2, slug: "fuvest-2015", name: "Fuvest 2015", locked: true },
    { _id: 3, slug: "fuvest-2014", name: "Fuvest 2014", locked: true },
])

db.exercises.insert([
        {   _id: 1,
        exam: "fuvest-2015", 
    content: "trovadorismo",
    categories: [ "portugues", "literatura" ],
    text: ["Assinale a afirmação falsa:"],
            alternatives: [
                "A cultura portuguesa, no século XII, conciliava três matrizes contraditórias: a católica, a islâmica e a hebraica.",
                "A cultura católica, técnica e literariamente superior às culturas islâmica e hebraica, impôs-se naturalmente desde os primórdios da formação de Portugal.",
                "A expulsão dos mouros e judeus e a Inquisição foram os aspectos mais dramáticos da destruição sistemática que a cultura triunfante impôs às culturas opostas.",
                "O judeu Maimônides e o islamista Averróis são expressões do que as culturas dominadas produziram de mais significativo na Península Ibérica.",
                "Pode-se dizer que a cultura portuguesa esteve desde seu início assentada na diversidade e na contradição, do que resultaram alguns de seus traços positivos (miscibilidade, aclimatabilidade etc.) e negativos (tendência ao ceticismo quanto a idéias, desconfiança etc."
            ],
    correct: 0
        },
        {   _id: 2,
        exam: "fuvest-2015",
    content: "trovadorismo",
    categories: [ "portugues", "literatura" ],
    text: ["Assinale a afirmação falsa sobre as cantigas de escárnio e mal dizer:"],
            alternatives: [
                "A principal diferença entre as duas modalidades satíricas está na identificação ou não da pessoa atingida.",
                "O elemento das cantigas de escárnio não é temático, nem está na condição de se omitir a identidade do ofendido. A distinção está no retórico do “equívoco”, da ambigüidade e da ironia, ausentes na cantiga de maldizer.",
                "Os alvos prediletos das cantigas satíricas eram os comportamentos sexuais (homossexualidade, adultério, padres e freiras libidinosos), as mulheres (soldadeiras, prostitutas, alcoviteiras e dissimuladas), os próprios poetas (trovadores e jograis eram freqüentemente ridiculardizados), a avareza, a corrupção e a própria arte de trovar.",
                "As cantigas satíricas perfazem cerca de uma quarta parte da poesia contida nos cancioneiros galego- portugueses. Isso revela que a liberdade da linguagem e a ausência de preconceito ou censura (institucional, estética ou pessoal) eram componentes da vida literária no período trovadoresco, antes de a repressão inquisitorial atirá-las à clandestinidade.",
                "Algumas composições satíricas do Cancioneiro Geral e algumas cenas dos autos gilvicentinos revelam a sobrevivência, já bastante atenuada, da linguagem livre e da violência verbal dos antigos trovadores."
            ],
    correct: 1
        },
        {   _id: 3,
        exam: "fuvest-2014",
    content: "trovadorismo",
    categories: [ "portugues", "literatura" ],
    text: ["Assinale a alternativa incorreta a respeito do Trovadorismo em Portugal:"],
            alternatives: [
                "Durante o Trovadorismo, ocorreu a separação entre poesia e a música.",
                "Muitas cantigas trovadorescas foram reunidas em livros ou coletâneas que receberam o nome de cancioneiros.",
                "Nas cantigas de amor, há o reflexo do relacionamento entre o senhor e vassalo na sociedade feudal: distância e extrema submissão.",
                "Nas cantigas de amigo, o trovador escreve o poema do ponto de vista feminino.",
                "A influência dos trovadores provençais é nítida nas cantigas de amor galego-portuguesas."
            ],
    correct: 2
        },
        {   _id: 4,
        exam: "fuvest-2015",
    content: "trovadorismo",
    categories: [ "portugues", "literatura" ],
    text: ["Sobre as principais características do Trovadorismo, estão corretas:",
                "I. Primeiro movimento literário da língua portuguesa, o Trovadorismo surgiu em um período no qual a escrita era pouco difundida, por esse motivo, os poetas transmitiam suas poesias oralmente, na maioria das vezes cantando-as.",
                    "II. Foi marcado pela transição do mundo medieval para o mundo moderno, conduzindo as artes ao Renascimento cultural. Na literatura, deu-se a consolidação da prosa historiográfica, do teatro e da poesia palaciana.", 
                    "III. Os primeiros textos da literatura portuguesa receberam o nome de cantigas, tradicionalmente divididas em cantigas de amor, de amigo, escárnio e maldizer, representadas por nomes como Dom Duarte, Dom Dinis, Paio Soares de Taveirós, João Garcia de Guilhade, Aires Nunes, entre outros.",
                    "IV. Inspirado na cultura clássica greco-latina, o Trovadorismo foi marcado pela introdução de novos gêneros literários, entre eles os romances de cavalaria e a literatura de viagens.ddd",
                    "V. Os poetas do Trovadorismo pertenciam à nobreza ou ao clero e, além da letra, criavam também a música das composições que executavam para o seleto público das cortes."],
            alternatives: [
                "III e IV.",
                "I, II e V.",
                "III, IV e V.",
                "I, III e V.",
                "Apenas III"
            ],
    correct: 3
        }
    ])

