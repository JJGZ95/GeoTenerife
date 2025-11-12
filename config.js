var config = {
style: 'mapbox://styles/mapbox/satellite-streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiampnejE5OTUiLCJhIjoiY21odGI5MXRvMTJkMzJrczd6YWJyeHF0aiJ9.xkr_nPWXm2hjv271HSKgqQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Montañas volcánicas de Tenerife',
    subtitle: 'Storymap: Un viaje para geólogos y deportistas por la isla de Tenerife.',
    byline: 'Por Juan José González Zamora',
    footer: 'Tarea para el curso de visualización de datos de RTVE. <br> Creado usando la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Montaña El Cerro',
            image: 'https://caminosdetierrasite.com/wp-content/uploads/2022/04/img-20220417-wa0093.jpg?w=2000&h=',
            description: 'La Montaña El Cerro es un cono volcánico cubierto de vegetación canaria, situado dentro del Paisaje Protegido de Las Lagunetas. Su relieve suave y su entorno forestal la convierten en un ejemplo representativo del modelado volcánico erosionado, apto para los iniciados en el senderismo, una ruta 8,4km con un máximo de 1.146m de altura.',
            location: {
                center: [-16.390786880457256, 28.44377988529904],
                zoom: 16,
                pitch: 43,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'two-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Volcán de las Rosas',
            image: 'https://s0.wklcdn.com/image_135/4054876/34755996/22434126Master.jpg',
            description: 'Formación volcánica integrada en los senderos de Anaga. La ruta permite observar coladas erosionadas y laderas cubiertas de brezos y laurisilva. Dificultad media: ruta circular de 9 km entre brezos y coladas antiguas, ideal para senderistas activos.',
            location: {
                center: [-16.317505571532877, 28.554402163380242],
                zoom: 17,
                pitch: 60,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thee-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Montaña Grande',
            image: 'https://islascanarias.me/wp-content/uploads/mirador-de-montana-grande-El-Rosario-tenerife-1024x585.jpg',
            description: 'Montaña Grande es el mayor de los volcanes que se erigen sobre el malpaís de Güímar. Su simétrica silueta es un icono del municipio y el elemento central de la Reserva Natural Especial. La subida al cono volcánico está <b>prohibida</b>, por los efectos negativos que el tránsito provoca sobre la conservación del cono.',
            location: {
                center: [-16.377322431873885, 28.313597024020044],
                zoom: 16,
                pitch: 40,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'four-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Pico del Inglés',
            image: 'https://www.diariodetenerife.info/wp-content/uploads/2024/04/Pico-del-Ingles.jpg',
            description: 'Mirador volcánico del Parque Rural de Anaga, con vistas espectaculares hacia el norte y sur de Tenerife. Ideal para montañistas que buscan panorámicas sin esfuerzo. Dificultad baja, con acceso directo por carretera y sin ruta técnica.',
            location: {
                center: [-16.264299383178443, 28.533459226626594],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Pico Baracán',
            image: 'https://s2.wklcdn.com/image_32/982182/8917274/5267168Master.jpg',
            description: 'El Pico Baracán se alza como uno de los puntos más altos del Macizo de Teno con 1002 m. Desde su cima se dominan amplias vistas del noroeste de Tenerife, los valles y los acantilados de Los Gigantes. Su origen volcánico y su valor paisajístico lo convierten en un lugar de gran interés natural y geológico. Dificultad baja: sendero corto desde Teno Alto, con viento frecuente.',
            location: {
                center: [-16.862803101794793, 28.334817451804128],
                zoom: 14,
                pitch: 40,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'six-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Montaña de Tejina',
            image: 'https://www.turismodeobservacion.com/media/fotografias/caserio-de-la-fuente-y-montana-de-tejina-guia-de-isora-tenerife-90022-xl.jpg',
            description: 'La Montaña de Tejina (1055m) es un cono volcánico que en tiempos posteriores fue dedicado a la agricultura, lo que resultó en la creación de terrazas de cultivo que la rodean. Esta combinación de elementos geológicos y agrarios agrega un atractivo singular a la montaña. Dificultad baja: subida suave desde el pueblo de Las Fuentes.',
            location: {
                center: [-16.75000653491965, 28.191039794427894],
                zoom: 17,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seven-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Montaña de Chinyero',
            image: 'https://s1.wklcdn.com/image_256/7702410/81839304/53788561Master.jpg',
            description: 'El Volcán Montaña Chinyero es un testimonio de la última manifestación volcánica en Tenerife, que ocurrió a principios del siglo XX y tuvo una duración de tan solo 10 días. Este volcán de 1561m. es una importante reliquia geológica que marca un evento significativo en la historia volcánica de la isla. Dificultad media por el sendero PR-TF 43.',
            location: {
                center: [-16.7567396260452, 28.294712291469573],
                zoom: 17,
                pitch: 50,
                bearing: -260
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigtht-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Montaña de Sámara',
            image: 'https://teniqueoutdoor.com/wp-content/uploads/2025/01/montana_samara_2-720x720.png',
            description: 'La Montaña de Samara (1937m) es un cono volcánico de aspecto llamativo que marca la entrada al Parque Nacional del Teide. Su cráter es accesible para visitar, ofreciendo a los excursionistas y amantes de la geología la oportunidad de explorar esta singular formación volcánica. Dificultad media, una ruta de 6-7km bien señalizada, muy fotogénica con tramos de ceniza sueltos.',
            location: {
                center: [-16.72607786986568, 28.266602206824633],
                zoom: 14.1,
                pitch: 100,
                bearing: 120
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nine-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Montaña de Guamaso',
            image: 'https://lainakai.com/wp-content/uploads/2019/11/GuamasoAle5-700x467.jpg',
            description: 'La Montaña de Guamaso (2086m) es un cono volcánico que se caracteriza por su perfil suavemente inclinado y la exuberante vegetación que lo cubre. Una de sus características más singulares es que los visitantes tienen la oportunidad de caminar sobre el cráter, siguiendo el sendero PNT 14. Ruta fácil pero con pendiente moderada, excelentes vistas del Teide.',
            location: {
                center: [-16.557768972723697, 28.310265422377647],
                zoom: 17,
                pitch: 30,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ten-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Volcán de Fasnia',
            image: 'https://lainakai.com/wp-content/uploads/2024/04/202403-Volcan-de-Fasnia-LR00025-690x442.jpg',
            description: 'El Volcán de Fasnia (2231m) es un cono volcánico relativamente joven, cuya última erupción tuvo lugar en 1705. Este cono volcánico se distingue por su intensa coloración negra, que es característica de las rocas volcánicas. Dificultad alta: terreno sin senda clara y fuerte pendiente, requiere experiencia y buena forma.',
            location: {
                center: [-16.511210873938158, 28.285301411752798],
                zoom: 19,
                pitch: 74,
                bearing: 199
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleven-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Montaña de Guajara',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Alto_de_Guajara.JPG/800px-Alto_de_Guajara.JPG',
            description: 'La Montaña de Guajara, con sus imponentes 2.718 metros de altitud, se erige como el punto más elevado dentro del Parque Nacional y se posiciona como el tercer pico más alto de la isla. Esta majestuosa montaña, con su silueta distintiva, es un punto de referencia icónico en el Parque Nacional del Teide. Dificultad alta: supone un ascenso largo y exigente con 700 m de desnivel, recompensando con vistas únicas',
            location: {
                center: [-16.612293170161575, 28.21699798893248],
                zoom: 15,
                pitch: 90,
                bearing: -250
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelve-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Montaña Blanca',
            image: 'https://s0.wklcdn.com/image_3/119819/7824978/4504980Master.jpg',
            description: 'Montaña Blanca es un cono volcánico situado en las faldas del Teide, con 2748 metros de altura. Su nombre proviene de la tonalidad clara de sus materiales pumíticos. Es un punto de partida popular para la ascensión al Pico Teide y un ejemplo notable de vulcanismo explosivo en Tenerife. Dificultad alta: ruta empinada hacia el refugio de Altavista, ideal para aclimatarse al Teide.',
            location: {
                center: [-16.612666901507446, 28.26820286021664],
                zoom: 14,
                pitch: 250,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteen-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Pico Teide',
            image: 'https://www.parquenacionalteide.com/wp-content/uploads/volcan-del-teide.jpg',
            description: 'El punto más alto de la geografía española con 3715m y hogar de Guayota, demonio guanche. Un estratovolcán activo en reposo, solo accesible a pie con autorización previa. Dificultad alta: ascenso exigente y técnico que requiere buena aclimatación a la altura.',
            location: {
                center: [-16.642206055816594, 28.272598581018748],
                zoom: 17,
                pitch: 60,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
