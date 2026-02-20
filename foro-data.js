// Database of authentic and simulated forum content
window.forumData = {
    'D+AACHEN01': {
        title: 'Foro Aachen - RWTH',
        messages: [
            {
                user: 'Juan Trujillo', avatar: 'J', date: 'Hace 2 años', badge: 'PREGUNTA', badgeClass: 'badge-pregunta',
                body: 'Buenas, el año que viene estaré estudiando en Aachen y no conozco a nadie q vaya a ir tambien. Si somos un par estaría bien hacer un grupo y ver temas como el alojamiento o q hacer por allí.',
                replies: [
                    { user: 'Eu Pulido', text: 'Buenas, que año es el que vas estar allí 24/25?' },
                    { user: 'Juan Trujillo', text: 'Estaré el 24/25, que me equivoqué al hacer el otro grupo' },
                    { user: 'Jesús Pereira', text: 'Hola buenas, yo voy el curso entero a Aachen, el 24/25, pasadme el enlace a mi también!!' }
                ]
            }
        ]
    },
    'D+BERLIN02': {
        title: 'Foro Berlín - TU/HU',
        messages: [
            {
                user: 'Leyre Gavira', avatar: 'L', date: 'Hace 1 año', badge: 'PRÁCTICAS', badgeClass: 'badge-pregunta',
                body: '¡Hola! Soy Leyre y me voy a hacer prácticas de agosto a enero a Berlin, ¿alguien más que esté esos meses?',
                replies: [
                    { user: 'Lucía Merino', text: 'Hola Leyre! Yo voy a estar en Berlín todo el verano incluido casi todo el mes de agosto.' }
                ]
            }
        ]
    },
    'I+BOLOGNA01': {
        title: 'Foro Bolonia - UNIBO',
        messages: [
            {
                user: 'Javier Olozaga', avatar: 'J', date: 'Hace 1 año', badge: 'PREGUNTA', badgeClass: 'badge-pregunta',
                body: 'Holaa, el curso que viene voy a hacer el primer cuatri de informática en Bolonia casi seguro y me gustaría saber si me va a ser muy difícil, para saber si elegirla o no. ¿Alguien de ingeniería sabe qué tal la dificultad en italiano?',
                replies: [
                    { user: 'Marco T.', text: 'La ingeniería en la UNIBO es prestigiosa pero exige bastante. Si vas en italiano, prepárate el lenguaje técnico antes de ir.' }
                ]
            }
        ]
    },
    'I+ROMA01': {
        title: 'Foro Roma - Sapienza/Tor Vergata',
        messages: [
            {
                user: 'Rafa Contreras', avatar: 'R', date: 'Hace 1 año', badge: 'DUDAS', badgeClass: 'badge-pregunta',
                body: 'Buenas! Soy Rafa, de Jaén, y estudio el máster de industriales en Sevilla. El curso que viene (25-26) estaré en Roma de Erasmus. ¿Hay grupo de WhatsApp o alguien sabe algo de convalidaciones?',
                replies: [
                    { user: 'Sara P.', text: '¡Hola Rafa! Yo también soy de la ETSI. Para convalidaciones en Roma habla con el coordinador, suelen ser flexibles pero hay que llevarlo todo firmado.' }
                ]
            }
        ]
    },
    'F+PARIS062': {
        title: 'Foro París - Sorbonne/Nanterre',
        messages: [
            {
                user: 'Julia Llorente', avatar: 'J', date: 'Hace 1 año', badge: 'COMUNIDAD', badgeClass: 'badge-pregunta',
                body: '¿Gente que vaya a París en el curso 25/26? Me gustaría ir conociendo gente antes de llegar.',
                replies: [
                    { user: 'Julia M', text: '¡Yo voy a París para el curso 25/26!' },
                    { user: 'Laura Burgos', text: '¡Hola! Aquí está el grupo de españoles activo.' }
                ]
            }
        ]
    },
    'I+MILANO02': {
        title: 'Foro Milán - PoliMi/Bicocca/Statale',
        messages: [
            {
                user: 'diego ormaeche', avatar: 'D', date: 'Hace 2 años', badge: 'PREGUNTA', badgeClass: 'badge-pregunta',
                body: '¿Alguna persona que vaya a ir a Milán de Erasmus el curso de 2024-2025!!??',
                replies: [
                    { user: 'Cristóbal Delgado', text: '¡Yo voy el curso que viene a Milán también!' },
                    { user: 'María Rodríguez', text: 'Hola, yo también voy el año que viene a Milán a la universidad de Biccoca.' }
                ]
            }
        ]
    },
    'I+NAPOLI01': {
        title: 'Foro Nápoles - Federico II/L\'Orientale',
        messages: [
            {
                user: 'Marta Martinez', avatar: 'M', date: 'Hace 1 año', badge: 'FARMACIA', badgeClass: 'badge-pregunta',
                body: 'Holaaa soy Marta. El año que viene me voy de erasmus el curso entero a Nápoles a la universidad Federico II. ¿Hay algún grupo?',
                replies: [
                    { user: 'Admin US', text: '¡Hola Marta! Nápoles es un destino increíble para Farmacia.' }
                ]
            }
        ]
    }
};

// Generic simulated messages to avoid empty forums for the other 94 destinations
const simulatedPool = [
    {
        user: 'Carlos Ruiz', avatar: 'C', badge: 'ALOJAMIENTO', badgeClass: 'badge-pregunta',
        body: 'Hola! Alguien sabe de alguna residencia barata o zona para buscar piso? No quiero que me pille el toro con los precios.',
        replies: [
            { user: 'Elena M.', text: 'Busca en grupos de FB del año pasado, suelen dejar los contactos de los caseros allí.' }
        ]
    },
    {
        user: 'Ana Belén', avatar: 'A', badge: 'DUDAS', badgeClass: 'badge-pregunta',
        body: '¿Qué tal el nivel de inglés/idioma local en la universidad? ¿Son muy estrictos con los Erasmus o levantan un poco la mano?',
        replies: [
            { user: 'Pedro US', text: 'Depende mucho de la facultad, pero en general si ven que te esfuerzas suelen ayudarte bastante.' }
        ]
    },
    {
        user: 'Sergio G.', avatar: 'S', badge: 'FIESTA', badgeClass: 'badge-pregunta',
        body: '¿Hay mucha vida nocturna por aquí? He oído que los martes y jueves son los días fuertes para salir.',
        replies: [
            { user: 'Lucía F.', text: '¡Siiii! Hay un par de locales que se llenan de españoles siempre.' }
        ]
    },
    {
        user: 'Marta V.', avatar: 'M', badge: 'TRANSPORTE', badgeClass: 'badge-respuesta',
        body: 'Consejo: Sacaros el abono de transporte mensual nada más llegar, os ahorráis una pasta y funciona de maravilla.',
        replies: []
    }
];

// Function to populate the rest of the 101 destinations if not present
function populateAllDestinations() {
    const ids = [
        'D+BRAUNSC01', 'D+DARMSTA01', 'D+DRESDEN02', 'D+ESSEN04', 'D+HAMBURG03', 'D+HILDESH02', 'D+KARLSRU01', 'D+KONSTAN2', 'D+MUNCHEN02', 'D+MUNSTER02', 'D+REGENSB02', 'D+STUTTGA01',
        'AR+UBA', 'A+INNSBRUCK+08', 'A+WIEN+02', 'B+BRUXEL+04', 'B+GENT+01', 'B+LIEGE+01', 'B+MONS+21', 'BR+BRASILIA', 'BR+DO+CEARA', 'BR+FEDEPERNAMBUCO', 'BR+FUNDACAO', 'BG+SOFIA04',
        'CA+ETSMONTREAL', 'CA+POLYMONTREAL', 'CH+LUZERN14', 'CHI+BEIHANG', 'CHI+BEIJINGTECNOL', 'CHI+CHITALCA', 'CHI+CONCEPCION', 'CHI+UCHILE', 'CHI+UNAP', 'CHICENTRAL',
        'CZ+BRNO01', 'CZ+PARDUB01', 'CZ+PRAHA10', 'G+ATHINE02', 'G+THESSAL01', 'H+BUDAPES02', 'INDITMADRAS', 'IRDUBLIN44', 'IRLCORK01', 'M+CUAUHTEMOC', 'M+TECMONTERR',
        'N+TRONDHE01', 'PE+SANPABLO', 'RO+BUCURES43', 'S+LULEA01', 'SF+LAPPEEN01', 'SK+KOSICE03', 'TR+ISTANBU04', 'TR+KAYSERI04', 'U+MONTEVIDEO', 'U+ORT',
        'I+ANCONA01', 'I+BARI05', 'I+BERGAMO01', 'I+CATANIA01', 'I+ENNA01', 'I+FERRARA01', 'I+FIRENZE01', 'I+GENOVA01', 'I+PADOVA01', 'I+PALERMO01', 'I+PARMA01', 'I+PISA01', 'I+TORINO02', 'I+VITERBO01',
        'F+AUBIERE04', 'F+CHAMBER01', 'F+GIF-YVE03', 'F+GRENOBL22', 'F+LEVALLO01', 'F+LILLE14', 'F+LYON01', 'F+LYON11', 'F+NANTES07', 'F+PARIS468', 'F+POITIER05', 'F+ST-ETIE06', 'F+TOULOS18', 'F+TOULOUS16',
        'PL+KIELCE01', 'PL+KRAKOW02', 'PL+POZNAN02', 'PL+WROCLAW02', 'P+COVILHA+01', 'P+LISBOA109', 'P+PORTO02', 'P+PORTO05'
    ];

    ids.forEach((id, index) => {
        if (!window.forumData[id]) {
            const cityName = id.split('+')[1] || id;
            window.forumData[id] = {
                title: 'Foro: ' + cityName,
                messages: [
                    {
                        user: 'Admin US', avatar: 'US', date: 'Hoy', badge: 'BIENVENIDA', badgeClass: 'badge-respuesta',
                        body: '¡Bienvenidos al foro de ' + cityName + '! Este es un espacio simulado con preguntas frecuentes para ayudaros.',
                        replies: []
                    },
                    simulatedPool[index % simulatedPool.length],
                    simulatedPool[(index + 1) % simulatedPool.length]
                ]
            };
        }
    });
}

populateAllDestinations();

// Default content for cities completely alien to the system
function getDefaultMessages(cityName) {
    return {
        title: 'Foro: ' + cityName,
        messages: [
            {
                user: 'Admin US', avatar: 'US', date: 'Hoy', badge: 'BIENVENIDA', badgeClass: 'badge-respuesta',
                body: '¡Bienvenidos al foro de ' + cityName + '! Empieza el hilo con tu primera duda.',
                replies: []
            }
        ]
    };
}
