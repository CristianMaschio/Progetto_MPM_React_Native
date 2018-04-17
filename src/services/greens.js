export const greens = [
  {
    name: "Pomodoro",
    picture:
      "https://vitoathome.files.wordpress.com/2015/04/pianta-pomodorini.jpg?w=256&h=256&crop=1",
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
    literGround: "22 l.",
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
      "https://cdn3-pahlsmarket.netdna-ssl.com/wp-content/uploads/2017/08/Lettuce-e1502140947554.jpg",
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
    literGround: "8 l.",
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
  }
];
