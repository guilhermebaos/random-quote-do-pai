const rawQuotes = `
(1, 'Passados 10 minutos da hora, mais ninguém entra!\n'),
(2, 'Isto vai doer, mas eu estou aqui para que doa menos.\n'),
(3, 'Estou a ver que trouxe a capa preservativa ... (tira o trabalho da mica), deixe estar que eu gosto mais ao natural.\n'),
(4, 'Você está aí impávida e serena, que nem freira do Convento de Arouca.\n'),
(5, 'Estou farto disto. Um tipo agora quer é ver mulheres nuas.\n'),
(6, 'Aising? Ising! Em Roma, sê Romano.\n'),
(7, 'Sino? Você não deve gostar mesmo da sua mãe. Então você não sabe que isso é Senosoidal?\n'),
(8, 'Quem não usa a Técnica do Apagador, não é boa pessoa.\n'),
(9, 'A Técnica do Apagador permite-nos reflectir sobre reflecções feitas anteriormente.\n'),
(10, 'É Lagrangeano, não é Lagrangiano. O tipo chamava-se Lagrange e não Lagrangi.\n'),
(11, 'O Professor é como um Pai e às vezes, uma Mãe.\n'),
(12, 'As tipas andam de relationship em relashionship. Aquilo é falta de Pai.\n'),
(13, 'Se não souberem fazer, venham ter comigo que eu ilumino-vos, nem que para isso tenha que trazer um lanterna.\n'),
(14, 'Aquela treta da onda e da partícula, um tipo ainda vai ver o que é. Aquilo é como a história da Flatland. Os tipos da Flatland viviam e viam em 2D, por isso só viam partes das coisas em 3D. Se fosse um cilindro, os tipos viam um círculo, ou uma elipse.\n'),
(15, 'Sou Físico, e agora? Agora está é bom para ir para a praia.\n'),
(16, 'Não comeces o mês de Abril com desconfianças.\n'),
(17, 'Fazer contas provoca disfunção erétil.\n'),
(18, 'Físico que é físico só percebe de molas.\n'),
(19, 'Físico que é físico faz sempre um boneco.\n'),
(20, 'física conceptual? Você... você é poeta.\n'),
(21, 'Porquê que está a escrever a azul? Nem todos aqui são azuis. Nem toda a gente é necessariamente de sangue real.\n'),
(22, 'Aqui vale tudo. Até arrancar olhos. Desde que...seja bem feito, evidentemente.\n'),
(23, 'Não há bom vinho do Porto sem bom barril. E não há boa vida sem vinho do Porto.\n'),
(24, 'e você a dar-lhe. Escreva direito. Ai jesus...ai...eu ainda vou acabar a trabalhar num ATL.\n'),
(25, 'Você tem de fazer bem o boneco. Se o boneco ficar mal, depois não vai compreender o exercício.\n'),
(26, 'Um bocadinho de carga... Cria um bocadinho de campo.\n'),
(27, 'Há três tipos de alunos...os que sabem matemática, os que não sabem matemática e os que querem ser felizes. Você claramente não é o terceiro.\n'),
(28, 'O homem pode ser velho, mas com um berbequim consegue fazer tudo.\n'),
(29, 'Eu sou uma boa mãe. Dou por igual a todos os filhos.\n'),
(30, 'A física é só contas, e quem disser o contrário vê demasiado discovery channel.\n'),
(31, 'Deixe-se de fantasias, que isto aqui não é a guerra das estrelas!\n'),
(32, 'Um bocadinho é um deltinha e um bocadão é um deltão.\n'),
(33, 'Primeiro faz o boneco, depois vem a física e só depois a matemática. Isso não é matemática. Isso são contas.\n'),
(34, 'A menina é que tem um professor de categoria. Isto nem em Cambridge nem no MIT.\n'),
(35, 'Como vê, vai ter que sentar-se no meu colo.\n'),
(36, 'A conta é grande? Não há problema, termina amanhã. Mas faz.\n'),
(37, 'Coice de mula que se preze, segue a distribuição de Poisson.\n'),
(38, 'Uma das vantagens de ser professor é poder dizer: e por simetria...\n'),
(39, 'O que é preciso é encontrar uma boa( )zona!\n'),
(40, 'Sim... porque para ir a fundo... também convém ter tamanho.\n'),
(41, 'Se você está com problemas de existência e unicidade não está no sítio certo! Isso é no outro departamento! (aponta para o Departamento de matemática).\n'),
(42, 'Mas vocês não precisam de saber o nome disto...a não ser que queiram mostrar que sabem... o que... é diferente de saber.\n'),
(43, 'O nosso estudo fica-se por aqui...e já vai dar muita reprovação.\n'),
(44, 'Não basta a gente andar à chuva e molhar-se... há que a sentir... Bob Marley.\n'),
(45, 'Portanto... estou eu aqui todo porreiro da Silva a apanhar Sol...\n'),
(46, 'Qualquer criança de 4 meses compreende isto.\n'),
(47, 'Hão-de reparar que estas portas fecham-se sozinhas. Ora... não há corrente de ar... e a inteligência dos alunos também não está em expansão.\n'),
(48, 'Aprender é uma coisa, ensinar é outra. Há 2 lados da corda. Se os dois lados não puxam... a corda não estica.\n'),
(49, 'Isso é um estimulante. Espero que não tenha sido por causa do varão.\n'),
(50, 'Sempre me quis parecer que as meninas de física são caladinhas... mas lá fora são terríveis.\n'),
(51, 'Há um jogo de sedução entre o professor e o aluno. O professor resolve os exercícios de uma maneira sofisticada, para mostrar que sabe muito, e o aluno observa, absorve a gloriosidade e pensa \"quero ser como o meu Pai\".\n'),
(52, 'Este trabalho é herdeiro do pedantismo intelectual característico de artigos científicos.\n'),
(53, 'Vamos criar um operador à la mecânica quântica, Ô, com o chapéu. Hein? Já estão a aprender umas coisas...\n'),
(54, 'Normalmente não se faz a coisa assim. Podíamos dizer que no infinito a dependência vai ter de ser 1/r, cortar todos estes termos e chegar logo a solução - resolver a coisa à la Landau, um físico Russo...\n'),
(55, 'A terra é gorda na cintura... como acontece a muita boa gente e nao basta dzer que as gorduras vao todas para o brasil.\n'),
(56, 'Aqui estamos a resolver a coisa de maneira que qualquer burro faz isto (quer dizer, coitados dos burros, que até são inteligentes), mas tem de ser. Têm de aprender assim primeiro para mais tarde poderem fazer como o Landau.\n'),
(57, 'Está sorridente...? Estou a ver que está a gostar da performance.\n'),
(58, 'Você deve gostar muito de mim para me tentar impressionar dessa forma...\n'),
(59, 'A sua mãe não sou. Seu pai também não. Quer dizer... acho eu. Vai ter Mecânica Analítica no próximo semestre?\n'),
(60, 'Este trabalho é herdeiro do pedantismo intelectual característico de artigos científicos.\n'),
(61, 'Isto tem de ser servido homeopaticamente, às colherzinhas.\n'),
(62, 'Isso aí é jardinagem.\n'),
(63, 'Pode parecer elementar, mas no final vou ter de pagar as vacas ao dono na mesma. Não há almoços grátis!\n'),
(64, 'Mas cuidado... se fizermos isto, as equações de Euler vão ter um traumatismo craniano.\n'),
(65, 'Vou arrancar a porta, levá-la para casa e vendê-la...vale uns cobres. Até porque hoje em dia isto está... não é...\n'),
(66, 'Enquanto o aluno for tratado como o cliente que tem sempre razão... não funciona. Isto aqui NÃO é um serviço. E mesmo que fosse... o serviço paga-se... sim...\n'),
(67, 'Não se paga à entrada... paga-se à saída! Sim... tal como nas discotecas...não é...\n'),
(68, 'Vamos resolver isto em grupo. Mas é em grupo mesmo, não é em grupos do Facebook.\n'),
(69, 'Este integral não está definido, mas eles não nos pedem para primitivar, pedem-nos para integrar, o que significa que isto aqui é um número. E é aí que entra o Python. Sim... é para isso que o Python foi feito.\n'),
(70, 'Desde quando é que o campo magnético trabalha? O campo magnético é como eu, não faz nenhum!\n'),
(71, 'Você é um sonhador. Você sonha demasiado alto. Mas como bem sabe... quanto mais alto... maior é a queda. Não quer mudar de curso?\n'),
(72, 'O cliente tem de ser bem servido, se não queixa-se.\n'),
(73, 'Vocês perderam uma boa oportunidade de aprender isto. É no que estas aulas se traduzem - na perda de boas oportunidades para aprender. Mas pronto, um gajo tem de sobreviver.\n'),
(74, 'Vamos lá, não tenha medo. Eu estou aqui.\n'),
(75, 'Então tiveram Comunicação em Ciência... e não comunicam?!\n'),
(76, 'Não concordo consigo. Não... isso é a maneira burra de resolver o exercício. Isso aí é para formar eletricistas. Físicos... não.\n'),
(77, 'Pois... os brasileiros gostam muito de seduzir. Nós... nem tanto.\n'),
(78, 'Isto da selecção natural... É assim mais fuzzy, não é assim tão crispy, tem de haver margem para a biodiversidade.\n'),
(79, 'As bananas da Madeira são pequenas, mas são as mais saborosas.\n'),
(80, 'Você só apaga à direita? Não me diga que é de esquerda... não sei se a comissão parlamentar permite essas apagadelas tendenciosas.\n'),
(81, 'Isso não é assim que se diz. Isso é abrasileirado. Hmpf... os brasileiros... a criarem um dialecto que só eles conseguem perceber.\n'),
(82, 'Você não é só um engenheiro! Você é um engenheiro da física! O melhor engenheiro!\n'),
(83, 'Com que então prometeram-me sereias... E É ISTO QUE ME VEM PARAR À REDE...\r\n'),
(84, 'Vocês lembram-se do problema da aula anterior? Não se lembram?... eu tenho assim tantos dons encantatórios... que adormeço qualquer um...\n'),
(85, 'O exterior é um reservatório infinito... não aquece nem arrefece. Quando vão tomar um banho ao mar, ele não muda de temperatura. Pode mudar de cor, mas ISSO É OUTRO FENÓMENO...\n'),
(86, 'O teorema de Carnot é como o remédio de flor... cura tudo, seja onde for.\n'),
(87, 'Vamos passar ao problema 8... nem vale a pena perguntar se querem vir ao quadro ou não...\n'),
(88, 'E isto é um raciocínio linear... se não percebeu, ou não estudou... OU NÃO ESTÁ AQUI A FAZER NADA... não há terceira hipótese.\n'),
(89, 'A física é que é o difícil... a matemática são só uns bocadinhos... há que fazer render o peixe. *começa a cantar o hino nacional*\n'),
(90, 'Teorema de Stokes... teorema de Gauss... é tudo a mesma mer-coisa.\n'),
(91, 'Eu agora estou a trabalhar para os inquéritos pedagógicos...\n'),
(92, 'Isto é quase teoria das cordas...sabe calcular, mas não sabe o que é... é aquela velha máxima: quem não tem cão, caça com gato.\n'),
(93, 'Uma conta é um algoritmo, não é um raciocínio... e esta, hein? Uma conta até o Google faz.\n'),
(94, 'No ano passado tive um aluno que era poeta... a falar-me de física conceptual e fantasias assim...\n'),
(95, 'A resistência no início estava muda... no final saiu calada...\n'),
(96, 'Mas isso não interessa, isso são números... você olha para uma árvore e vê números? Números são uma coisa que não existe, só na nossa cabeça... tudo uma cambada de esquizofrénicos.\n'),
(97, 'Isto é como na engenharia... primeiro faça a coisa à ferreiro... depois faça a coisa à meio ferreiro.\n'),
(98, 'Não é para dar banho ao cão, mas é para dar banho ao chumbo.\n'),
(99, 'Os francess são latinos disfarçados.\n'),
(100, 'Deus não é brasileiro... eu gosto muito de picanha mas Deus não é brasileiro.\n'),
(101, 'Fórmulas? Quais fórmulas? Isto está para aqui uma central de comunicações desgraçada.\n'),
(102, 'É bastante improvável ir num avião com uma bomba. É por isso que eu levo sempre uma bomba comigo, porque ir num avião com duas bombas é ainda mais improvável.\n'),
(103, 'Isto não é fast mecânica analítica, é slow mecânica analítica.\n'),
(104, 'Bem meu caro, na vida nada é fácil, só no Facebook.\n'),
(105, 'Este curso anda a ficar Tiplerizado...\n'),
(106, 'Os engenheiros é que são os nabos... NÃO, ALIÁS, nós é que somos os inteligentes!'\n),
(107, 'Eu não sou pago para pensar, sou pago para fazer problemas. \n'),
(108, 'Como eu gosto de café e não de descafeinado, vou fazer as contas com a cafeína toda. \n'),
(109, 'A soma de todos os bocadinhos dá o quê? DÁ O BOCADÃO! \n'),
(110, 'O limite não existe em física e quem disser o contrário... epá, deixai-o dizer... \n'),
(111, 'As contas boas são as contas onde a gente não tem de fazer contas. \n'),
(112, '...só não vos mudam as fraldas porque se não era... era demasiado óbvio. \n'),
(113, 'Aprender é como ir à casa de banho, é um processo pessoal e intransmissível. \n'),
(114, 'Isto aqui é psicoterapia, aqui está tudo certo. Você diga o que lhe vem na alma. \n'),
(115, 'Contas qualquer burro faz. Se quiser eu assino, podem por no Facebook. \n'),
(116, 'Se existe tem nome. \n'),
(117, 'Eu só faço perguntas inocentes. \n'),
(118, 'Se na aula anterior tínhamos corda suficiente para nos enforcarmos, desta vez não temos. \n'),
`.split('\n')

const quotes = []
rawQuotes.forEach((q, index) => {
    if (index % 2 == 1) {
        let start = q.indexOf(", '") + 3
        quotes.push(q.slice(start))
    }
})

const target = document.getElementById('quote')

target.innerText = quotes[Math.floor(Math.random() * quotes.length)]
