import slide1 from './../assets/home/slides/mini42.jpg';
import slide2 from './../assets/home/slides/mini-nova-poshta.jpg';
import slide3 from './../assets/home/slides/teaserminipitstop.jpg';

const store = {
    header: {
        menu: {
            newsLinks: [
                {
                    name: 'Новини та події',
                    to: '/news'
                },
                {
                    name: 'Електромобільність',
                    to: '/'
                },
                {
                    name: 'Mymini ua',
                    to: '/'
                },

            ]
        }
    },
    home: {
        slides: [
            {
                title: 'Подвійна вигода',
                description: 'Mіnі сервіс 4+',
                image: slide1
            },
            {
                title: 'Безкоштовна доставка з інтернет-магазину',
                description: 'З 15 вересня по 31 грудня 2022 року до відділень "нова пошта" для замовлень від 1500грн.',
                image: slide2
            },
            {
                title: 'Осінній піт-стоп',
                description: 'Настав час змінити колеса чи шини? Ми з радістю тобі в цьому допоможемо!',
                image: slide3}
        ]
    },
    reviews: {
        title: "Відгуки про компанію MYMINI UA"
    },
    contacts: {
        address: "ул. Вацлава Гавела, 4, 03124, Київ",
        email: "awt@mini-kyiv.com.ua",
        schedules: [
            { office: "відділ продажів", schedule: "Пн. - Нд.: 8:00 – 20:00"},
            { office: "відділ продажів", schedule: "Пн. - Нд.: 8:00 – 20:00"},
            { office: "відділ сервісу", schedule: "Пн. - Нд.: 8:00 – 20:00"},
            { office: "відділ продажів аксесуарів", schedule: "Пн. - Нд.: 8:00 – 20:00"},
            { office: "каса (для сплати готівкою)", schedule: "Пн. - Пт.: 11:00 – 17:50, Сб.: 11:00 – 15:50"},
        ],
        phones: [
            { name: "Телефон (багатоканальний)", phone: "+38 (044) 490-77-33"},
            { name: "Відділ сервісу", phone: "+38 (044) 490-77-30"}
        ]

    }
}

export default store;