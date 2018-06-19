export const greens = [
  {
    name: "Pomodoro",
    picture:
      "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a1d4952cb9ecb722b2bf16deda6d9cb&auto=format&fit=crop&w=750&q=80",
    description:
      "Dal pomodoro a ciliegina fino al cuore di bue, dal classico pomodoro da salsa agli stravaganti pomodori neri, parliamo di una verdura che non stufa mai, per via delle sue numerose varietà e dei mille utilizzi che trova in cucina. La soddisfazione di mangiare un pomodoro colto direttamente dalla propria pianta ripagherà di tutto il lavoro agricolo, vediamo quindi come coltivare al meglio questo ortaggio in un orto biologico.",
    climate:
      "Adattabile a condizioni di clima molto variabile preferendo quello temperato-caldo. Nel periodo invernale si alleva in serra. Temperature sotto i 5°C compromettono la crescita.",
    sun: "Abbondante",
    tempMin: "5°",
    tempMax: "34°",
    distancePlants: "30-40 cm",
    distanceFiles: "70-80 cm",
    ground:
      "Il pomodoro può essere coltivato in ogni tipo di suolo preferendo quelli ricchi di sostanza organica, irrigui, neutri, drenanti e a medio impasto nei quali si avranno i risultati migliori.",
    literGround: "22 l",
    fertilization:
      "Apportare almeno 20 giorni prima del trapianto e incorporare nel terreno del concime organico (letame fermentato maturo, compost) e/o concimi minerali a lenta cessione con azoto, fosforo e potassio in rapporto equilibrato.",
    waterSupply:
      "Si consiglia, per una migliore gestione e un risparmio idrico, l'impianto a goccia con manichetta forata magari gestito da un elettrovalvola temporizzata da collegare al rubinetto. Questo sistema consente di annaffiare a intervalli regolari e non bagna la vegetazione riducendo le problematiche fitosanitarie. Evitare squilibri idrici. Innaffiare nelle ore più fresche preferibilmente al mattino.",
    difficulty: 1.3,
    intercropping: [
      "Aglio",
      "Carote",
      "Cavoli",
      "Cicoria",
      "Insalate da taglio",
      "Lattuga",
      "Mais",
      "Menta",
      "Porri",
      "Prezzemolo",
      "Ravanelli",
      "Rape",
      "Sedano",
      "Spinaci"
    ],
    badIntercropping: ["Cetrioli", "Finocchi", "Patate", "Piselli"],
    seeding: {
      howOutdoors:
        "Se si volesse mettere i semi direttamente in campo ed evitare di dover spostare la pianta si dovrà preparare un letto di semina fine e livellato, dove interrare i semi a poca profondità (circa mezzo centimetro), disposti secondo il sesto d’impianto scelto. Mettere a dimora questa coltura nell’orto può essere conveniente solo per chi si coltiva in zone a clima molto mite, sulla costa e nell’Italia meridionale, dove c’è freddo per tutto marzo è meglio ricorrere al semenzaio.",
      howIndoors:
        "Il vantaggio del semenzaio è la possibilità di anticipare il momento della semina anche di due mesi, inoltre trapiantare piantine già nate evita il rischio di lasciare spazi vuoti nei filari dell’orto, in caso alcuni semi non dovessero germinare. Questo ortaggio si semina usando contenitori alveolati o vasetti, da riempire con terriccio adatto alla semina, magari arricchito da humus di lombrico. Il seme si pone sulla superficie e si copre con un velo di terra, per poi compattare leggermente premendo il terriccio con i polpastrelli delle dita. Sia che si semini all’aperto sia che lo si faccia in semenzaio è importante bagnare subito, e anche nei giorni seguenti con quotidiana regolarità: fino a che la pianta non avrà sviluppato il suo apparato radicale non dovrà mai mancargli l’acqua.",
      depth: "0,3 cm",
      temperatureGermination: "15°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 2,
        mag: 1,
        giu: 1,
        lug: 0,
        ago: 0,
        set: 0,
        ott: 0,
        nov: 0,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 0,
        set: 0,
        ott: 0,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how:
        "Dalla semina in semenzaio si passa poi in vaso, fino allo stadio di prefioritura. A questo punto si può trapiantare, a patto che le temperature minime siano di almeno 10 gradi. I fiori hanno bisogno di minimo 13 gradi per allegare, altrimenti c’è una cascola senza frutto. Il trapianto in fase di prefioritura, quando le piante sono alte circa 30 cm, permette di disporre le piantine con i fiori rivolti all’esterno dell’aiuola, così tutti i fiori emergeranno da quel lato e sarà molto comoda la raccolta.",
      indoors: {
        gen: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        mag: 3,
        giu: 3,
        lug: 2,
        ago: 1,
        set: 0,
        ott: 0,
        nov: 0,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 0,
        mar: 1,
        apr: 3,
        mag: 3,
        giu: 2,
        lug: 1,
        ago: 0,
        set: 0,
        ott: 0,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Lattuga",
    picture:
      "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575ab31da5060592c7e9797d1f269f35&auto=format&fit=crop&w=667&q=80",
    description:
      "Le lattughe sono piante della famiglia delle composite, sono molto diffuse negli orti famigliari. Si tratta di un’insalata che si coltiva come pianta annuale, evitando che vada in seme, per raccogliere le foglie quando sono ancora tenere, buone da mangiare crude.",
    climate:
      "Sono ortaggi ottimali per essere coltivati a primavera e autunno e soffrono durante i mesi estivi. Il range di temperatura varia dai 5-24° max",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "La lattuga è poco esigente, potendo scegliere meglio una terra sciolta, fertile e drenante, ma non ci sono particolari richieste in termini di suolo.",
    literGround: "8 l",
    fertilization:
      "Concima gli ortaggi tre settimane dopo averli trapiantati all'aperto. Usa un impasto di erba medica o di fertilizzante a lento rilascio ricco di azoto, che permette alla verdura di crescere forte e rapidamente.",
    waterSupply:
      "Le foglie larghe dell’insalata traspirano molto e per questo motivo si consigliano irrigazioni frequenti. I momenti di maggior fabbisogno di acqua sono subito dopo il trapianto e quando si forma il cespo. L’annaffiatura serale previene molte malattie funginee come la bremia, bisogna evitare di bagnare le foglie e di irrigare durante i momenti di grande caldo.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "La semina avviene dentro a dei vasetti",
      howOutdoors:
        "La semina in campo avviene rispettando circa 35cm di distanza tra le piante, mettendo 2-3 semi a un centimetro di profondità",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how:
        "Durante il trapianto, tenere fuori dal terreno il gambo della lattuga. Questo permetterà al cespo che si sviluppa lateralmente di stare sopraelevato, evitando di favorire marciumi dovuti allo schiacciarsi di foglie sul terreno.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Ravanelli",
    picture:
      "https://images.unsplash.com/photo-1490072978022-b167e41f8e6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84e86eb131ad4946b2dbfc893d5acbd5&auto=format&fit=crop&w=500&q=60",
    description:
      "Amet magna et exercitation laboris sint. Duis quis consequat cillum aliqua et. Exercitation consectetur mollit laborum sunt reprehenderit officia elit mollit minim laboris magna.",
    climate:
      "Quis esse dolor magna aute aute nulla cillum Lorem aute tempor do amet sint. Pariatur incididunt eiusmod enim sint voluptate sunt esse veniam aliquip officia cillum. Nisi ex ut amet dolor nulla. Tempor ullamco exercitation pariatur duis ipsum reprehenderit commodo esse ad ex reprehenderit. Lorem duis incididunt aliqua sit excepteur qui elit incididunt.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Aute est dolore cupidatat quis consectetur aute amet quis nisi tempor non. Enim deserunt do laborum aliquip et do consequat qui exercitation et sunt ullamco eiusmod. Velit officia ipsum amet fugiat tempor duis in cupidatat exercitation irure consequat deserunt aliqua eiusmod. Commodo enim excepteur elit sit duis cupidatat officia cupidatat nisi irure ullamco. Excepteur ut sit ex qui occaecat exercitation aute.",
    literGround: "8 l",
    fertilization:
      "Do nostrud nulla ut officia anim ullamco officia dolore proident mollit magna dolore. Esse adipisicing est consequat cupidatat cupidatat deserunt deserunt sint. Sunt est incididunt quis proident Lorem quis veniam pariatur sunt proident id. Proident non qui in veniam. Adipisicing voluptate non duis Lorem et adipisicing Lorem nulla. Tempor deserunt culpa cupidatat incididunt veniam consequat mollit nisi occaecat.",
    waterSupply:
      "Ut nisi tempor eu commodo laborum. Tempor pariatur veniam exercitation aliquip laboris ea veniam et incididunt ullamco voluptate. Veniam ipsum do tempor duis magna in deserunt sint eiusmod anim. Exercitation ex ex esse pariatur dolor ea anim nisi. Pariatur non qui minim enim veniam excepteur voluptate id.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Tempor non ex laborum elit laborum. Dolore eu irure dolor laborum nisi consectetur ut. Qui minim sit deserunt pariatur qui ea labore cillum. Aliqua ea enim minim pariatur aliqua ipsum reprehenderit. Dolore nulla aute nisi excepteur qui eu incididunt ad.",
      howOutdoors:"Labore culpa non adipisicing enim eiusmod elit culpa et ullamco id Lorem deserunt voluptate ea. Exercitation cillum nulla excepteur reprehenderit officia culpa ullamco ipsum aliquip. Minim amet id laborum dolore. Dolor reprehenderit reprehenderit velit magna officia qui ipsum velit occaecat consequat anim id irure. Consequat minim laborum labore quis.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Et deserunt deserunt nulla amet. Proident mollit nostrud ex magna elit nulla esse. Quis occaecat tempor ullamco excepteur commodo amet irure et laboris commodo. Cupidatat adipisicing labore ut cillum nisi officia consequat deserunt minim reprehenderit. Occaecat elit est exercitation sunt ut esse.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Carciofi",
    picture:
      "https://images.unsplash.com/photo-1518735869015-566a18eae4be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b72594e5adbf608030d2ddfd86ed42bc&auto=format&fit=crop&w=500&q=60",
    description:
      "Tempor nostrud sunt elit cupidatat consequat id aliqua ex. Sint magna magna reprehenderit qui. Ipsum Lorem enim Lorem magna.",
    climate:
      "Qui laboris nostrud cupidatat duis ex proident. Enim sit officia fugiat ullamco anim tempor aute duis. Aliquip Lorem anim amet nisi non occaecat.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Dolor ipsum nisi qui veniam occaecat nostrud pariatur ad. Occaecat Lorem est veniam incididunt laboris elit irure cillum sunt nostrud. Nulla consequat aliquip occaecat elit consequat ad aliqua deserunt proident ipsum labore amet. Non deserunt dolor nisi ex eiusmod labore amet exercitation sit esse eiusmod cupidatat dolor.",
    literGround: "8 l",
    fertilization:
      "Voluptate esse cillum qui sit sit nisi exercitation laborum reprehenderit occaecat reprehenderit aute commodo quis. Minim labore reprehenderit anim laborum. Amet commodo pariatur tempor aliquip aliquip deserunt officia do. Sunt mollit cupidatat id veniam pariatur qui incididunt eu labore elit est enim.",
    waterSupply:
      "Anim qui aliqua pariatur est dolore eu deserunt aliqua ipsum proident. Incididunt in aliquip eiusmod excepteur consectetur eiusmod culpa velit tempor culpa laborum nulla id esse. Irure nostrud magna magna occaecat id duis. Ad quis consequat cillum culpa anim ullamco aliquip.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Sit dolor aute excepteur occaecat consequat aute. Qui labore non eiusmod officia occaecat deserunt aliqua. Commodo esse nostrud anim exercitation ut. Incididunt incididunt duis dolore nulla pariatur id cupidatat velit elit adipisicing. Id enim ut ullamco pariatur consectetur cupidatat est laboris deserunt consectetur incididunt fugiat reprehenderit. Nostrud amet et laboris amet dolor elit tempor occaecat irure irure aute ad sint veniam. Eu commodo mollit officia velit id sit aliquip sint commodo occaecat.",
      howOutdoors:"Ipsum qui dolore aliquip fugiat dolore officia. Velit Lorem qui nisi labore ullamco reprehenderit dolor ex mollit dolore labore ullamco. Enim consectetur in quis nostrud officia proident aute pariatur nisi cillum do. Occaecat aute do magna ipsum. Laboris nostrud officia cupidatat consectetur sunt fugiat quis ullamco enim velit ad. Incididunt cupidatat nulla anim ad Lorem.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Lorem Lorem pariatur dolore fugiat elit elit veniam dolor amet. Dolore elit id sit culpa pariatur exercitation ea occaecat fugiat magna. Sit reprehenderit voluptate occaecat ipsum ad quis laboris tempor. Anim in id sit sunt culpa excepteur in.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Peperoni",
    picture:
      "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00d0cc93bf094f399eaeaaf8b8ac4db4&auto=format&fit=crop&w=500&q=60",
    description:
      "Magna mollit in exercitation quis eu. Exercitation ut et esse cupidatat dolor ad. Consectetur quis excepteur esse sint et.",
    climate:
      "Occaecat dolore excepteur reprehenderit esse esse labore eu sint mollit proident. Tempor excepteur consequat aliquip eu consectetur aliquip irure. Cillum consectetur id esse in elit. Esse nisi aliquip elit nostrud consectetur voluptate qui sint Lorem amet fugiat reprehenderit.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Cillum anim mollit velit minim anim adipisicing id fugiat aliqua deserunt adipisicing. Amet consequat est est minim aliqua. Laboris ut tempor irure in excepteur consectetur aliquip.",
    literGround: "8 l",
    fertilization:
      "Et consectetur eu quis eu excepteur ullamco mollit eiusmod aliquip ipsum. Cupidatat deserunt ea ex tempor occaecat dolor velit amet. Consequat non dolor ad voluptate enim ea fugiat officia consequat nulla labore ad. Est aliqua adipisicing reprehenderit veniam excepteur excepteur. Reprehenderit veniam magna adipisicing occaecat incididunt.",
    waterSupply:
      "Consectetur ad tempor culpa proident dolor proident consequat aute. Lorem Lorem exercitation laboris sint reprehenderit duis enim pariatur laboris do. Ea dolore id nostrud in in minim veniam aliquip. Do cillum amet aliquip id eiusmod dolor elit excepteur sit ea dolor eiusmod ex id. Sit ullamco eiusmod pariatur sit laborum sint non anim.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Veniam incididunt laborum cillum in incididunt veniam qui adipisicing commodo labore ut excepteur. Enim consequat adipisicing veniam sint consequat voluptate nisi id ex. Et labore amet elit adipisicing veniam enim aliqua culpa eiusmod est. Aliqua dolore magna sit incididunt.",
      howOutdoors:"Ad duis occaecat adipisicing ad exercitation. Cillum cupidatat officia ea consequat. Laboris aliquip esse incididunt reprehenderit aliquip pariatur fugiat deserunt id labore pariatur. Do sunt reprehenderit voluptate cupidatat enim incididunt qui eiusmod est voluptate commodo nulla. Cupidatat adipisicing cillum dolor quis elit aute enim nostrud. Ullamco Lorem esse consectetur aute ad nostrud duis commodo nulla aliqua tempor qui.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Ea irure dolor esse non laboris non. Sit exercitation adipisicing reprehenderit pariatur ex eu cupidatat nostrud sint minim. Eiusmod ex ex excepteur non do nostrud magna nisi officia nulla occaecat ullamco enim. Officia est elit officia consectetur dolor laboris occaecat. Dolore tempor nulla magna cupidatat exercitation ullamco nostrud adipisicing qui dolor aute nostrud reprehenderit velit. Id dolor enim aliquip velit deserunt tempor commodo elit consectetur dolore nisi esse ad. Quis tempor sunt anim Lorem veniam occaecat aliquip laboris nisi excepteur quis eiusmod.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Fagiolini",
    picture:
      "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8693ae1d312dc76c15a94f9ae16ddadd&auto=format&fit=crop&w=500&q=60",
    description:
      "Deserunt incididunt eiusmod consectetur aliquip dolor non dolore deserunt elit fugiat sint. Consectetur ipsum pariatur non et quis aute consequat culpa eiusmod eu pariatur irure. Ad sint magna culpa occaecat amet elit voluptate ipsum commodo laborum officia.",
    climate:
      "Tempor sint in laborum nostrud qui eu consequat in qui do. Ut esse cillum deserunt mollit eu fugiat excepteur et. Proident esse excepteur ea exercitation sint. In excepteur consectetur pariatur consequat ex sunt commodo non. Voluptate id anim nostrud duis commodo. Est tempor proident sint ea. Aliqua ullamco laboris reprehenderit duis incididunt ipsum nisi.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Fugiat est duis nostrud laboris veniam eiusmod consectetur adipisicing. Labore occaecat exercitation eu do fugiat deserunt eiusmod quis aliqua aliquip duis Lorem. Incididunt qui labore mollit enim excepteur eu aute officia. Velit eu dolore aliquip amet. Pariatur occaecat sint incididunt dolor deserunt reprehenderit ad dolor aute nulla. Ipsum exercitation pariatur cillum aute irure officia amet qui duis officia amet in sunt et.",
    literGround: "8 l",
    fertilization:
      "Minim laboris et sit do occaecat. Sit voluptate ut non voluptate pariatur qui excepteur aliquip eiusmod reprehenderit proident eiusmod esse. Laboris qui reprehenderit mollit laboris sunt reprehenderit sint in excepteur dolor adipisicing in irure aliqua. Elit quis cillum voluptate officia duis. Deserunt dolor Lorem reprehenderit commodo. Irure aliquip Lorem ipsum laborum consectetur aute laborum Lorem elit culpa voluptate fugiat nisi.",
    waterSupply:
      "Elit dolor laboris deserunt sint ipsum elit cupidatat ex deserunt laboris est sint excepteur. Occaecat laboris velit qui irure consequat minim nisi. Fugiat reprehenderit labore id incididunt nostrud officia commodo aliqua non veniam nulla sunt tempor cupidatat. Consequat dolor nisi labore sunt velit proident adipisicing aliqua. Sit quis ex non qui.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Quis excepteur aliqua tempor commodo mollit cillum commodo laboris minim adipisicing irure aliqua proident. Anim elit voluptate nostrud nulla duis pariatur Lorem magna magna. Occaecat non excepteur cillum qui aliqua pariatur officia enim. Sint cillum reprehenderit nisi id tempor incididunt nisi non duis occaecat ipsum ad aliqua do. Sint cupidatat elit labore excepteur minim dolor commodo. Elit ullamco consequat nostrud sint id ad laboris. Sit commodo velit nostrud exercitation commodo elit tempor officia sit voluptate aliqua eiusmod nostrud deserunt.",
      howOutdoors:"Commodo ex dolore ut laborum in ullamco cillum non reprehenderit laborum. Qui eiusmod tempor minim sint adipisicing dolore veniam excepteur culpa do cillum. Officia nostrud mollit voluptate excepteur aliquip. Magna magna nulla aliqua velit sint. Qui aliquip eu reprehenderit laborum est aliquip ut eiusmod. Duis deserunt elit nostrud quis culpa pariatur commodo. Aliquip et ipsum sint esse aute magna irure adipisicing ex consectetur amet deserunt.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Id esse eu sunt Lorem est dolor ea aliqua labore occaecat eu aliqua. Aute duis ipsum velit cillum laborum eiusmod do sunt enim. Qui proident ad et veniam deserunt irure adipisicing proident cillum veniam exercitation anim aliqua. Est ut velit adipisicing nisi elit est. Ex cillum qui minim proident officia sunt nostrud sint velit proident consectetur incididunt exercitation.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Cavolfiore",
    picture:
      "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56c732599bb90344b9659ac71f3a7060&auto=format&fit=crop&w=500&q=60",
    description:
      "In culpa cillum do aliqua commodo eiusmod commodo anim et dolore voluptate. Elit tempor nulla minim est ad ea et velit exercitation ad deserunt dolor ipsum. Eu proident fugiat sit consectetur sit ea pariatur. Proident commodo esse sint ea cupidatat incididunt esse velit consectetur eiusmod.",
    climate:
      "Reprehenderit exercitation amet magna ad officia sunt nostrud deserunt qui incididunt tempor ullamco. Incididunt ullamco aliquip do eu fugiat id. Cillum voluptate officia labore laborum in sint enim.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Sit officia aliquip sunt quis labore eu nostrud consectetur proident. Velit enim consequat fugiat culpa exercitation non non non est eiusmod incididunt sit sint. Dolor ea anim sunt adipisicing sit dolore. Ullamco ad proident tempor ea do ea nisi. Aliqua laborum sint irure cupidatat aliqua. Ullamco esse commodo eiusmod elit. Occaecat nostrud eiusmod nulla veniam exercitation commodo eu duis.",
    literGround: "8 l",
    fertilization:
      "Proident cupidatat sunt duis fugiat sint nisi elit cillum proident anim. Officia velit reprehenderit aliqua eu non duis esse nisi ea consequat. Veniam anim officia esse officia culpa qui amet voluptate pariatur. Ullamco aliquip consectetur id officia anim excepteur excepteur ea laborum excepteur deserunt sint.",
    waterSupply:
      "Sit id et veniam sint esse aliqua sunt cillum aute. Cillum aliqua ullamco est cillum voluptate proident incididunt eu nulla fugiat. Cupidatat reprehenderit proident velit nulla et ipsum dolore. Ullamco consequat incididunt exercitation culpa anim incididunt sit sunt amet ipsum magna. Reprehenderit ea commodo pariatur incididunt enim. Lorem eu laboris nostrud mollit duis elit reprehenderit magna non Lorem qui non. Tempor amet labore officia id nulla culpa in reprehenderit est consequat laboris cupidatat mollit.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Id exercitation deserunt nisi culpa exercitation pariatur dolore eiusmod quis amet. Elit ullamco sit dolor consequat labore sit eu veniam velit officia velit. Aliquip sunt anim eiusmod qui occaecat aute in sit do dolor. Dolore nisi sit eu voluptate officia laboris laboris. Duis proident excepteur adipisicing ea adipisicing cupidatat.",
      howOutdoors:"Exercitation nulla eu cupidatat laboris id. Commodo amet tempor ullamco eiusmod ullamco ullamco sunt. Nostrud eiusmod exercitation mollit sunt. Duis proident Lorem quis id enim adipisicing in veniam commodo quis magna aliquip commodo. Aliquip commodo voluptate nisi incididunt. Excepteur laborum elit aute eu velit ullamco voluptate nulla ex in fugiat. Consectetur labore dolor elit aute fugiat Lorem dolor dolor sint consectetur.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Ut ad pariatur adipisicing eu ad fugiat fugiat voluptate cupidatat eu proident aute ut reprehenderit. Dolor nulla irure deserunt veniam anim in laborum laborum. Ex officia proident tempor Lorem velit anim ut dolor sint labore mollit sit.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Carote",
    picture:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=511257539a29da05735d3b1244e980f4&auto=format&fit=crop&w=500&q=60",
    description:
      "Duis dolore elit Lorem consectetur sint id. Sunt esse et in incididunt nulla adipisicing velit reprehenderit aliquip laborum sunt do. Pariatur laboris fugiat elit do deserunt sint voluptate quis ea ad reprehenderit. Id incididunt deserunt laboris enim exercitation enim irure consectetur aliquip exercitation ex. Labore ea nostrud sunt ipsum. Sunt sunt ex aute nostrud adipisicing ex commodo officia dolore enim.",
    climate:
      "Non cupidatat duis consectetur non enim laborum mollit nisi Lorem est. Officia in velit elit sit. Ut nostrud laborum incididunt ad magna officia aliquip minim voluptate. Eu aute aliquip mollit amet officia do ullamco nostrud dolor. Ut voluptate nostrud id esse eu nostrud eu laborum excepteur occaecat eiusmod culpa veniam cupidatat. Officia sit ut eiusmod velit aliquip et.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Laboris irure veniam pariatur laboris laboris pariatur voluptate fugiat elit mollit eiusmod. In incididunt sit deserunt do sint. Occaecat dolore ipsum cillum non. Nulla est eiusmod proident consequat aliqua quis et irure ullamco amet exercitation. Elit exercitation esse mollit eiusmod. Occaecat id incididunt non et et voluptate in.",
    literGround: "8 l",
    fertilization:
      "Nostrud cupidatat cillum excepteur consectetur nisi dolore. Sunt ut officia aliquip enim do dolor tempor. Qui duis proident deserunt aute elit incididunt amet anim tempor. Dolor id eiusmod proident officia officia elit eiusmod consectetur dolore minim nulla irure ea enim. Quis tempor occaecat sint reprehenderit dolore nisi duis dolor.",
    waterSupply:
      "Reprehenderit exercitation aute in minim anim. In in officia nulla cupidatat. Tempor aliqua do nostrud fugiat sunt aliquip quis non eu ipsum minim cillum velit exercitation. Amet ipsum Lorem ex in pariatur velit laboris amet consequat id voluptate commodo consequat.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Elit deserunt adipisicing ipsum voluptate magna adipisicing ut eiusmod anim nulla. Qui ut Lorem anim nisi Lorem adipisicing nulla esse excepteur aliqua exercitation cillum. Ea velit do adipisicing voluptate reprehenderit excepteur consequat commodo nulla deserunt esse. Nulla dolore eiusmod proident est.",
      howOutdoors:"Ut pariatur aliquip labore nostrud ea in dolore. Commodo Lorem pariatur laboris et aliqua ut ex laboris. Nulla eu aute commodo elit enim sint. Lorem anim proident occaecat anim. Incididunt reprehenderit ipsum ad cillum aute proident magna tempor fugiat ut ea voluptate aute enim. Anim sunt ut ipsum consectetur occaecat excepteur incididunt commodo amet.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Nulla nisi sint duis ex quis mollit est consectetur irure ex Lorem elit est. Do sint nulla amet proident commodo voluptate sit est id mollit proident ut aliqua. Aliqua sit reprehenderit excepteur nisi exercitation sit eu sunt voluptate et dolor ullamco irure. Reprehenderit laboris enim aliquip ipsum. Dolore non labore sit Lorem tempor culpa.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Cipolla",
    picture:
      "https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5499a29ac288e408f3feddd2924c57ba&auto=format&fit=crop&w=500&q=60",
    description:
      "Et laborum cupidatat anim labore officia fugiat. Lorem laborum dolore enim reprehenderit nulla reprehenderit nulla cupidatat occaecat minim. Labore commodo sint adipisicing culpa commodo aliquip ullamco laborum dolor ipsum ullamco. Non laborum cupidatat sit reprehenderit esse enim exercitation enim ipsum minim eiusmod labore. Culpa labore enim exercitation minim exercitation irure enim nostrud in eiusmod eiusmod ea. Nostrud commodo minim elit occaecat nisi officia elit ut sint ex laborum.",
    climate:
      "Excepteur officia fugiat tempor nostrud aliquip enim nisi dolore minim dolore. Culpa fugiat irure eu ad voluptate ut. Reprehenderit id in reprehenderit ex aliqua est. Officia veniam nulla labore deserunt. Elit ipsum deserunt id qui mollit. Labore sint reprehenderit sunt velit cupidatat ea dolor nostrud.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Eu quis ullamco aute commodo culpa id est incididunt est in id sint officia. Exercitation reprehenderit ad voluptate commodo eu ea. Minim commodo consequat est qui deserunt eiusmod ex reprehenderit. Et ad excepteur ipsum commodo pariatur. Aute aliquip commodo id qui eiusmod adipisicing. Aute laboris id nulla deserunt sunt amet voluptate eiusmod eu Lorem aute laborum. Eiusmod tempor aliquip ex amet exercitation anim cillum consequat.",
    literGround: "8 l",
    fertilization:
      "Anim dolor ut reprehenderit aute adipisicing pariatur. Labore labore aute commodo culpa anim laboris nulla dolore non ipsum do nostrud irure. Quis occaecat reprehenderit proident do est laboris anim qui. Ad excepteur ullamco aute elit proident commodo excepteur labore sint nulla.",
    waterSupply:
      "Aliquip elit sint dolore esse cupidatat occaecat dolore enim sit in reprehenderit adipisicing. Do adipisicing pariatur consectetur occaecat mollit quis sunt est excepteur amet tempor. Ullamco ullamco adipisicing minim do nostrud magna excepteur ad magna laboris esse veniam officia ea. Occaecat sint dolor dolore duis commodo. Mollit pariatur qui quis voluptate aliquip magna magna consequat ut cillum eiusmod aute aute. Et ea eu est anim ad.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Excepteur esse est nulla duis dolor anim culpa. Veniam irure voluptate nulla aliquip est. Minim Lorem consequat amet velit velit in nisi irure ad non eu. Quis non reprehenderit in mollit anim aliqua labore veniam excepteur.",
      howOutdoors:"Veniam dolor occaecat occaecat officia occaecat. Non ullamco nulla labore dolor mollit adipisicing. Consectetur dolore elit commodo mollit. Do officia nostrud ipsum culpa pariatur ullamco qui ipsum in aliquip. Eiusmod voluptate do esse anim esse exercitation deserunt excepteur velit amet ea.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Eu enim eu commodo laborum deserunt occaecat sint proident officia eu. Officia excepteur mollit aliqua eu ipsum quis amet aliqua mollit amet dolor cupidatat. Irure eu eiusmod aliquip velit aute. Quis est esse duis labore ut laboris adipisicing commodo ea officia. Officia consectetur eu velit consectetur adipisicing laborum consequat.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Aglio",
    picture:
      "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?ixlib=rb-0.3.5&s=c9985523b954176b68c00dc124eec28f&auto=format&fit=crop&w=500&q=60",
    description:
      "Enim voluptate irure ea dolor excepteur nisi occaecat minim labore laboris. Est labore aliquip aute qui dolore enim veniam esse incididunt veniam. Anim adipisicing non nostrud officia veniam sint ex consequat nulla sit reprehenderit.",
    climate:
      "Sunt velit mollit mollit magna aute tempor. Voluptate dolor consequat magna consectetur duis velit fugiat et sint. Est eiusmod quis officia non reprehenderit. Sint dolor laborum amet cillum qui commodo reprehenderit exercitation aute officia sint culpa. Labore ut id officia ut voluptate mollit proident commodo laborum duis aute est. Nulla occaecat anim consequat laboris ut adipisicing in occaecat pariatur esse in excepteur. Non non est officia esse cillum amet nulla voluptate pariatur do do.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Proident sunt officia esse do quis ipsum amet laboris magna veniam ex pariatur ipsum. Ut excepteur do sit laboris aliqua nostrud laborum pariatur aliqua laborum consequat magna esse laboris. Id veniam non nostrud veniam eiusmod consectetur. Laborum nisi exercitation fugiat esse est mollit labore nisi culpa commodo. Mollit esse occaecat adipisicing quis excepteur ex amet. Sit officia cupidatat ullamco commodo enim enim dolor cupidatat ullamco deserunt ipsum Lorem aliquip aliqua. Deserunt in eu do irure veniam duis sint ut tempor eiusmod.",
    literGround: "8 l",
    fertilization:
      "Et do officia cupidatat magna reprehenderit anim cillum quis. Duis fugiat duis non id est laborum ullamco aute non consectetur ea. Esse ex enim cupidatat deserunt tempor elit dolore incididunt incididunt excepteur dolor officia adipisicing. Exercitation minim magna excepteur proident incididunt minim tempor consequat eu irure mollit magna. In sint duis do fugiat velit elit minim nostrud do anim cillum.",
    waterSupply:
      "Adipisicing do commodo dolore minim laborum enim duis deserunt. Ad ipsum ea deserunt magna labore commodo pariatur anim. Reprehenderit minim velit sit excepteur laborum. Tempor ullamco eu deserunt minim do do dolore.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Sunt cupidatat irure pariatur consectetur incididunt sint non nisi. Amet ipsum aute velit officia eu id consectetur ea excepteur. Ullamco reprehenderit consequat tempor anim minim deserunt magna qui proident do pariatur deserunt in irure. Sit fugiat Lorem duis ullamco fugiat ad proident nisi irure anim nostrud. Ad proident nostrud quis officia ipsum cupidatat ipsum aute duis velit consequat proident quis. In quis proident tempor id.",
      howOutdoors:"Culpa non deserunt magna duis ullamco minim consequat tempor magna. Sint ea ullamco exercitation cillum sunt sit magna sint consectetur voluptate laboris ullamco velit. Ipsum nostrud irure sunt eu dolore reprehenderit sit. Aliquip labore sunt velit ex aliquip incididunt. Elit occaecat minim ullamco cupidatat proident minim. Irure nostrud ut non incididunt. Id reprehenderit enim deserunt fugiat.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Consectetur aute ad veniam Lorem magna dolore cillum dolore non. Dolore officia nulla cillum aute culpa eiusmod labore. Tempor nostrud fugiat labore eiusmod culpa. Tempor aliqua eiusmod adipisicing laborum laborum enim aute commodo duis labore nulla.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Basilico",
    picture:
      "https://images.unsplash.com/photo-1508595165502-3e2652e5a405?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=101b05ab2e2cd6351c7b6eda588fcdb5&auto=format&fit=crop&w=500&q=60",
    description:
      "Duis aliqua elit pariatur officia non nostrud. Pariatur id quis non mollit aute ea consequat eu laborum dolore qui dolore. Aliquip minim dolore consequat tempor aliqua minim voluptate enim incididunt qui adipisicing. Amet in consequat proident irure consectetur velit aute exercitation aliqua non nisi. Consectetur adipisicing aliqua aliquip id consequat ipsum exercitation dolor.",
    climate:
      "Veniam ad dolor et proident est ex pariatur adipisicing nisi officia eu. Et veniam enim veniam adipisicing in eiusmod sunt incididunt excepteur est do. Eiusmod tempor et sunt mollit nostrud ad nulla nostrud ipsum id exercitation velit.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Irure minim nulla aute ipsum anim. Ipsum amet ex laboris qui est adipisicing officia velit esse reprehenderit qui elit. Irure proident adipisicing nostrud labore. Pariatur anim aute cillum quis occaecat id velit sint ad cillum. Incididunt eu enim reprehenderit eiusmod nostrud velit consequat. Elit deserunt adipisicing ea est ea aliqua aliqua aliquip. Sit pariatur amet consectetur adipisicing incididunt occaecat quis mollit laboris.",
    literGround: "8 l",
    fertilization:
      "Consectetur nulla consectetur nostrud eiusmod duis ad. In aute nisi id id deserunt minim nostrud qui ea. Adipisicing dolor pariatur laboris sit esse nisi proident sunt irure tempor enim laborum. Adipisicing fugiat occaecat laboris ea. Sit nisi cupidatat commodo magna cupidatat commodo in commodo amet.",
    waterSupply:
      "Occaecat nostrud laboris nulla officia ut quis qui ea fugiat aute in quis ea. Eu exercitation tempor in in amet ea eiusmod id minim nostrud. Id ea consequat irure laboris cupidatat adipisicing sit quis dolore ex. Magna Lorem et ex exercitation laboris dolor voluptate. Exercitation exercitation eu quis reprehenderit duis aliquip.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Consequat Lorem irure et est occaecat aute voluptate laboris nisi occaecat sint aliquip eu. Eu adipisicing irure magna consectetur non cupidatat laborum id laborum sit tempor amet aute. Et Lorem exercitation dolore qui do sint exercitation tempor adipisicing minim.",
      howOutdoors:"Irure est incididunt elit cillum est velit veniam dolore esse id laboris et consectetur. Pariatur exercitation anim minim anim enim mollit dolor do in enim incididunt non excepteur officia. Cillum adipisicing ipsum do proident pariatur. Esse sint reprehenderit magna occaecat esse qui commodo esse adipisicing consequat esse eiusmod. Aliquip esse aliquip sint magna eu eu esse et ut.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Laborum laborum non qui non. Quis sunt consectetur velit est dolore nisi veniam amet aute dolor. Voluptate laboris ad do sit irure. Et Lorem fugiat esse cillum nostrud non dolor laboris. Velit ullamco dolor dolor nostrud irure reprehenderit irure et incididunt nostrud aliqua officia excepteur. Sint do voluptate Lorem qui commodo laboris velit consectetur voluptate.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  },

  {
    name: "Prezzemolo",
    picture:
      "https://images.unsplash.com/photo-1526229221446-d32809f71e92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18733e20b77e258fb76b67d89f1d692e&auto=format&fit=crop&w=500&q=60",
    description:
      "Qui nulla minim ad et sint quis dolore nisi occaecat aliqua id reprehenderit ex aute. Ipsum irure aute consectetur esse ipsum dolore quis magna pariatur minim. Dolor consectetur esse fugiat amet anim deserunt. Officia eiusmod dolor ut ipsum sit sint ut consequat eiusmod proident excepteur sit. Fugiat culpa id ipsum consequat. Cupidatat mollit enim sint mollit minim laboris aliquip tempor ea.",
    climate:
      "Id officia consequat proident pariatur est ipsum labore magna enim elit in nisi minim. Duis cupidatat aute magna id fugiat nulla. Et commodo cupidatat do velit nulla culpa ullamco sunt ad et. Aute est excepteur enim aliquip deserunt aliqua consectetur irure ut elit. Labore consequat ex ipsum pariatur nulla. Do anim sunt ut velit anim magna aliquip tempor officia. Do eu ut nisi commodo.",
    sun: "Media",
    tempMin: "5°",
    tempMax: "20°",
    distancePlants: "25-35 cm",
    distanceFiles: "40-50 cm",
    ground:
      "Reprehenderit Lorem sunt magna officia ad sunt. Nulla voluptate culpa incididunt occaecat quis et laborum ullamco. Commodo quis voluptate laborum proident deserunt exercitation dolore laborum do velit. Officia cupidatat sit sit quis occaecat eiusmod proident cupidatat. Id elit excepteur consectetur Lorem aute pariatur veniam minim qui eu qui mollit cillum. Esse ullamco quis aute do commodo et qui ut fugiat. Deserunt non sunt sint consequat eiusmod proident pariatur exercitation proident duis.",
    literGround: "8 l",
    fertilization:
      "Minim voluptate ullamco dolore ex commodo. Mollit excepteur mollit est laboris pariatur do. Dolore Lorem eu cupidatat ipsum non aliqua et consectetur cillum consequat aute do. Labore dolor commodo et enim fugiat culpa nulla est et.",
    waterSupply:
      "Eu est id ad commodo labore eiusmod excepteur ut magna consectetur aute ipsum aliquip tempor. Et dolore veniam ea pariatur non consequat labore dolore incididunt ut commodo enim veniam qui. Adipisicing magna reprehenderit minim officia minim aliqua in cupidatat non ad pariatur. In proident eu tempor esse irure est aliqua ea cillum do tempor ullamco. Et qui in et enim sit deserunt proident eiusmod magna do laboris Lorem.",
    difficulty: 1.9,
    intercropping: [
      "Aneto",
      "Asparagi",
      "Cavoli",
      "Rapa",
      "Cetrioli",
      "Cicoria",
      "Cipolle",
      "Fagioli rampicanti",
      "Finocchi",
      "Fragole",
      "Mais",
      "Menta",
      "Piselli",
      "Pomodori",
      "Porri",
      "Rabarbaro",
      "Ravanelli",
      "Rape",
      "Scorzanera"
    ],
    badIntercropping: ["Prezzemolo", "Sedano"],
    seeding: {
      howIndoors: "Eiusmod exercitation pariatur fugiat ut minim eiusmod sit esse. Proident ad nulla in labore elit quis velit laborum sint anim. Anim nostrud dolore mollit nulla cupidatat consequat est incididunt sunt aliqua dolor anim. Sint sint enim aliqua excepteur qui minim exercitation reprehenderit do mollit aliquip dolor laboris anim. Voluptate sunt dolor enim irure. Do tempor magna cillum mollit duis exercitation commodo veniam in.",
      howOutdoors:"Sunt amet irure occaecat consectetur officia. Nulla aliquip incididunt mollit est consectetur sint veniam fugiat aliqua ex proident sit. Do est sint dolor anim in qui deserunt. Aliquip et fugiat enim mollit esse culpa ex culpa. Sit exercitation non adipisicing excepteur.",
      depth: "0,1 cm",
      temperatureGermination: "10°",
      indoors: {
        gen: 1,
        feb: 3,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 1,
        ott: 0,
        nov: 0,
        dic: 1
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 2,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 2,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    transplant: {
      how: "Sint ut consectetur eiusmod officia ea. Reprehenderit officia culpa sint irure nostrud id sint nisi officia deserunt irure Lorem consequat. Sunt ipsum cillum exercitation elit proident deserunt duis amet. Cupidatat dolore sint proident sit. Aliquip sunt dolore Lorem dolor ex culpa exercitation nisi cillum nisi exercitation dolor reprehenderit.",
      indoors: {
        gen: 1,
        feb: 2,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 1,
        set: 3,
        ott: 2,
        nov: 1,
        dic: 0
      },
      outdoors: {
        gen: 0,
        feb: 1,
        mar: 3,
        apr: 3,
        mag: 3,
        giu: 1,
        lug: 0,
        ago: 2,
        set: 3,
        ott: 1,
        nov: 0,
        dic: 0
      }
    },
    harvest: 30
  }
];
