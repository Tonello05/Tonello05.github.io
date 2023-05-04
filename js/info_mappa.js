function changeText(btnNum, btn_name) {

    var title = document.getElementById("info_title")
    var par = document.getElementById("par")
    var btn = document.getElementById(btn_name)

    btn.classList.remove("clicked")
    btn.offsetWidth
    btn.classList.add("clicked")
    title.classList.remove("animate")
    title.offsetWidth
    title.classList.add("animate")
    par.classList.remove("animate")
    par.offsetWidth
    par.classList.add("animate")


    switch (btnNum) {
        case 1:
            title.innerHTML = "<h2 id = 'info_title'>Cappella di Sant'Antonio<img src='/img/mappa/1-S-Antonio.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>La chiesa di S. Antonio di Monte Petroso si trova sulla collina a nord di Ivrea. Nel santuario, un tempo un ospedale, morì Taddeo McCarthy, vescovo Irlandese di ritorno da Roma sulla Via Francigena (1492).</p>"
            break;
        case 2:
            title.innerHTML = "<h2 id = 'info_title'>Castello delle quattro torri<img src='/img/mappa/2-Castello_delle_Quattro_Torri_Ivrea.jpg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Sulla parte alta di Ivrea, risale al XIV secolo. La torre a nord-ovest fu distrutta da un fulmine caduto sul deposito delle munizioni (1676). Ora il castello è in via di restauro.</p>"
            break;
        case 3:
            title.innerHTML = "<h2 id = 'info_title'>Duomo o Cattedrale di Santa Maria<img src='/img/mappa/3-Santa-Maria.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Situato vicino al Castello, fu fatto erigere da Warmondo Arborio e conserva ancora numerose parti originali (l’abside semicircolare e i due alti campanili a pianta quadrata).</p>"
            break;
        case 4:
            title.innerHTML = "<h2 id = 'info_title'>Teatro Giacosa<img src='/img/mappa/4-Teatro-Giacosa.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Nel centro della città, fu progettato dall'architetto Maurizio Storero (1829). Il teatro prende il nome da Giuseppe Giacosa, noto drammaturgo nato vicino ad Ivrea. Fu inaugurato il 5 luglio 1834 e poi restaurato nel 1958 e nel 1999.</p>"
            break;
        case 5:
            title.innerHTML = "<h2 id = 'info_title'>Museo Civico Pier Alessandro Garda<img src='/img/mappa/5-Museo-civico.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Su Piazza Ottinetti, piazza porticata del centro storico, si affaccia il Monastero di Santa Chiara, del XIV secolo. È stato restaurato e riaperto nel 2004 grazie alla donazione della signora Lucia Guelpa.</p>"
            break;
        case 6:
            title.innerHTML = "<h2 id = 'info_title'>Anfiteatro Romano<img src='/img/mappa/6-anfiteatro.jpg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Edificato in età Flavia in un'area già occupata da una villa suburbana, fu portato alla luce all'inizio del 1955. Alcuni reperti trovati durante gli scavi sono ora al Museo Garda.</p>"
            break;
        case 7:
            title.innerHTML = "<h2 id = 'info_title'>La Serra o Unità Residenziale Est<img src='/img/mappa/7-la-serra.jpg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Realizzata dagli architetti Igino Cappai e Pietro Mainardis tra il 1968 e il 1971, è un edificio polifunzionale commissionato dalla Olivetti. Nei lavori di costruzione fuori trovati dei resti romani, oggi visibili al pubblico.</p>"
            break;
        case 8:
            title.innerHTML = "<h2 id = 'info_title'>Il Campanile di Santo Stefano<img src='/img/mappa/8-campanile-santo-stefano.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>All'estremità orientale dei giardini pubblici, oggi si presenta come una torre; in realtà era il campanile di una complesso abbaziale (1041). Il monastero rimase efficiente fino al 1489 e, successivamente, fu demolito.</p>"
            break;
        case 9:
            title.innerHTML = "<h2 id = 'info_title'>Tecnologic@mente<img src='/img/mappa/9-Tecnologic@mente.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>È un museo ed un laboratorio. Il museo narra la storia della Olivetti, mentre il laboratorio è rivolto alle scuole superiori per stimolare la creatività e la sperimentazione.</p>"
            break;
        case 10:
            title.innerHTML = "<h2 id = 'info_title'>Municipio<img src='/img/mappa/10-municipio.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Progettato dall’ingegner Giovanni Battista Borra (1758), è la sede del Comune. Sulla torre campanaria si vede la pianta della canapa da cui probabilmente trae il nome il Canavese, area di cui Ivrea è il capoluogo.</p>"
            break;
        case 11:
            title.innerHTML = "<h2 id = 'info_title'>Lo Stadio della Canoa<img src='/img/mappa/11-stadio-canoa.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Si trova su fiume Dora Baltea. È uno dei pochi impianti sportivi fluviali in europa collocati in pieno centro cittadino ed è sede di gare molto importanti.</p>"
            break;
        case 12:
            title.innerHTML = "<h2 id = 'info_title'>Il Borghetto<img src='/img/mappa/12-borghetto.jpg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Oltre il ponte, sulla sponda destra della Dora, è un piccolo agglomerato di case che nel medioevo erano botteghe e attività artigianali.</p>"
            break;
        case 13:
            title.innerHTML = "<h2 id = 'info_title'>Stazione<img src='/img/mappa/13-stazione.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>La stazione entrò in funzione il 5 novembre 1858, con l’attivazione della tratta Caluso–Ivrea della linea per Aosta. Ventisette anni dopo, venne attivata il tratto Ivrea–Donnas e il 5 luglio dell’anno successivo venne attivata l’ultimo tratto Donnas–Aosta.</p>"
            break;
        case 14:
            title.innerHTML = "<h2 id = 'info_title'>Passerella<img src='/img/mappa/14-passerella.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>La realizzazione della passerella pedonale sulla Dora Baltea,  ricopre  un ruolo strategicamente importante  per la città. Agevola il collegamento tra la città storica e l’area ex Montefibre, sede di importanti servizi per i cittadini, tra i quali  il tribulale, le scuole e  il poliambulatorio. Fornisce l’occasione per la riqualificazione della sponda sinistra della Dora Baltea con la creazione di un percorso verde.</p>"
            break;
        case 15:
            title.innerHTML = "<h2 id = 'info_title'>Fabbrica di mattoni rossi<img src='/img/mappa/15-fabbrica.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>La “Fabbrica dei Mattoni Rossi” è il primo edificio Olivetti in Ivrea. Progettato dall’ingegnere Camillo Olivetti nel 1896, l’edificio ospitò in seguito la sua società  di macchine da scrivere di recente fondazione (1908). Durante i successivi trent’anni, lo sviluppo dell’azienda rese necessario costruire nuove estensioni di fabbrica lungo Via Jervis (poi Via Castellamonte). Nel 1936 fu costruito un grande edificio lineare con una struttura in cemento armato. Quindi furono fatti quattro ampliamenti della fabbrica: l’aggiunta di un nuovo piano e una nuova estensione posteriore (1937-1939), la costruzione di un nuovo edificio, lungo 130 metri, con facciate continue in vetro. (1939-1940)</p>"
            break;
        case 16:
            title.innerHTML = "<h2 id = 'info_title'>Chiesa di San Bernardino<img src='/img/mappa/16-san-bernardino.jpeg' alt=''></h2>"  
            par.innerHTML = "<p id = 'par'>Si trova nella zona denominata “Il Convento”, un tempo dimora della famiglia di Camillo Olivetti. Il convento fu costruito ta il 1455 e il 1465 per testimoniare la visita del Santo senese in Ivrea. Al suo interno ospita gli affreschi rinascimentali del pittore Gian Martino Spanzotti, che rappresentano la Vita e la Passione di Cristo.</p>"
            break;
    
    }

}