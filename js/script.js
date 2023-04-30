function changeText(btnNum) {
    
    var par1 = document.getElementById("par1");
    var par2 = document.getElementById("par2");
    var par3 = document.getElementById("par3");
    var par4 = document.getElementById("par4");
    var title = document.getElementById("par_title");

    switch (btnNum) {
        case 1:
            title.innerHTML = "<h2> LA STORIA DI IVREA <img src='/img/logo_ivrea.png' style = 'transform: scale(0.5);'alt=''> </h2>"
            par1.innerHTML = "<img src='/img/ivrea_romana.jpg' alt=''> Ivrea è una città situata nella regione del Piemonte, nel nord Italia. La sua storia risale all'epoca romana, quando la città era una stazione sulla strada che collegava Milano a Torino.    <br> Nel corso dei secoli, Ivrea ha svolto un ruolo importante come centro commerciale e culturale della regione.";
            par2.innerHTML = "<img src='/img/napoleone.jpg' alt=''>Durante il medioevo, Ivrea fu governata da una serie di signori locali, tra cui i conti di Savoia. Nel 1800, la città fu occupata dalle truppe francesi di Napoleone Bonaparte, ma alla fine del secolo fu restituita al Regno di Sardegna.";
            par3.innerHTML = "<img src='/img/olivetti_fabbrica.jpg' alt=''>Nel XX secolo, Ivrea è diventata nota per essere la sede della famosa azienda di tecnologia Olivetti. <br> La società, fondata nel 1908, ha prodotto alcune delle prime macchine per scrivere e calcolatrici elettroniche. Olivetti ha anche sviluppato una forte cultura aziendale, costruendo case per i propri dipendenti e offrendo servizi sociali come scuole e asili nido.";
            par4.innerHTML = "<img src='/img/ivrea_oggi.jpg' alt=''> Oggi, Ivrea è una città industriale con una popolazione di circa 25.000 abitanti. La città è famosa per la sua battaglia delle arance, una festa che si tiene ogni anno durante il carnevale in cui le persone si scagliano le arance l'una contro l'altra in una sorta di guerra alimentare.";
            break;
    
        case 2:
            title.innerHTML = "<h2> LA NASCITA DELL'OLIVETTI <img src='/img/logo_olivetti_primo.png' 'alt=''> </h2>"
            par1.innerHTML = "<img src='/img/m1.jpg' alt=''>La storia della Olivetti ha inizio nel 1908, quando Camillo Olivetti fonda l'azienda ad Ivrea, in Italia. Inizialmente, l'azienda si dedica alla produzione di macchine per scrivere innovative, come la''M1'', che presentava un design ergonomico e funzionale. Grazie a questa caratteristica, la Olivetti si distingue rapidamente dalle altre aziende produttrici di macchine per scrivere dell'epoca, e diventa un'importante realtà industriale.";
            par2.innerHTML = "<img src='/img/marcello_nizzoli.jpg' alt=''>Nel corso degli anni '20 e '30, la Olivetti si espande a livello internazionale e diventa una delle principali produttrici di macchine per scrivere al mondo. Durante questo periodo, l'azienda si distingue per l'attenzione che presta al design dei propri prodotti, in particolare grazie alla collaborazione con importanti designer dell'epoca, come Marcello Nizzoli. La Olivetti è nota per il design elegante e funzionale delle sue macchine per scrivere, che diventano oggetti di desiderio per molti utenti.";
            par3.innerHTML = "<img src='/img/ww2.jpg' alt=''>Durante la Seconda Guerra Mondiale, Olivetti subisce danni e perdite a livello produttivo e umano. La produzione di macchine per scrivere meccaniche diventa cruciale, essendo un mezzo di comunicazione scritta importante in un'epoca di conflitti bellici. Nonostante le difficoltà, Olivetti mantiene un'attività produttiva costante grazie alla produzione di macchine per scrivere. Questa abilità dimostra la resilienza e la capacità di adattamento dell'azienda.";
            par4.innerHTML = "<img src='/img/calcolatrice.jpg' alt=''> Nel dopoguerra, la Olivetti si concentra sulla produzione di macchine per scrivere elettriche e meccaniche, diventando una delle maggiori realtà industriali italiane. Negli anni '50, l'azienda inizia a diversificare la sua produzione, introducendo sul mercato prodotti come calcolatrici, stampanti elettroniche e telecopiatori. Grazie a questa espansione della gamma di prodotti offerti, la Olivetti si afferma come un'importante realtà nel settore delle tecnologie dell'informazione.";
            break;
        case 3:
            title.innerHTML = "<h2> L'EVOLUZIONE DELL'OLIVETTI <img src='/img/logo_olivetti_secondo.png' style = 'transform: scale(2);'alt=''> </h2>"
            par1.innerHTML = "<img src='/img/programma_101.jpg' alt=''>Negli anni '60, Olivetti ha lanciato la Programma 101, una delle prime calcolatrici programmabili al mondo. Questo prodotto innovativo ha avuto un grande successo e ha fatto entrare Olivetti nel mercato dei computer.";
            par2.innerHTML = "<img src='/img/m20.jpg' alt=''>Negli anni '70, Olivetti ha acquisito diverse società nel settore informatico, tra cui la americana Underwood Corporation. Nel 1982, Olivetti ha lanciato il M20, un computer compatto che è stato un grande successo di vendita.";
            par3.innerHTML = "<img src='/img/telecom.jpg' alt=''>Negli anni '80, Olivetti ha continuato ad espandersi attraverso acquisizioni e fusioni. Tuttavia, la società ha iniziato a incontrare difficoltà finanziarie a causa della concorrenza crescente e della crisi economica. Nel 1997, Olivetti è stata acquisita dalla Telecom Italia e l'anno successivo è stata rinominata Olivetti Tecnost. Nel corso degli anni successivi, l'azienda si è concentrata sulla produzione di soluzioni di stampa e digitalizzazione documentale.";
            par4.innerHTML = "<img src='/img/olivetti_oggi.jpg' alt=''>Nel 2003, Olivetti Tecnost è stata acquistata dal gruppo TIM e successivamente dal Gruppo Telecom Italia. Oggi, Olivetti è una società specializzata in soluzioni di stampa e digitalizzazione documentale per il mercato aziendale.";
            break;
        case 4:
            title.innerHTML = "<h2> LA STORIA DI ARDUINO <img src='/img/arduino.jpg' alt=''> </h2>"
            par1.innerHTML = "<img src='/img/fondatori_arduino.jpg' alt=''>Arduino è nato nel 2005 come progetto di un gruppo di studenti dell'Ivrea Interaction Design Institute in Italia. Il gruppo, composto da Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino, David Mellis e Nicholas Zambetti, voleva creare uno strumento facile da usare per gli appassionati di elettronica e informatica che non avevano necessariamente una formazione tecnica avanzata.";
            par2.innerHTML = "<img src='/img/arduino_diecimila.jpg' alt=''>La prima scheda Arduino, chiamata ''Arduino Serial'' o ''Arduino Diecimila'', era basata sul microcontrollore Atmel AVR e poteva essere programmata tramite un linguaggio di programmazione simile al C++";
            par3.innerHTML = "<img src='/img/schede_arduino.jpg' alt=''>Da allora, la famiglia di schede Arduino è cresciuta, con modelli più avanzati e funzionalità aggiuntive, ma la filosofia di base rimane quella di offrire uno strumento accessibile e versatile per l'elettronica creativa e la prototipazione rapida.";
            par4.innerHTML = "<img src='/img/arduino_day.jpg' alt=''>Oggi, Arduino è diventato uno standard de facto per gli hobbisti, gli artisti, gli insegnanti e gli ingegneri che vogliono creare dispositivi interattivi e prototipi di tutti i tipi. La comunità di utenti e sviluppatori di Arduino è vasta e attiva, con progetti che spaziano dall'arte alla robotica, dalla domotica all'Internet delle cose (IoT).";
            break;
    }

}