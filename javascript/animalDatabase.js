/**
 * animalDatabase.js - База данных животных с поддержкой мультиязычности
 */

// Единая мультиязычная база данных животных
const animalDatabase = [
    {
        en: {
            name: "Turtle",
            instinct: "foundation",
            // В английской версии нет необходимости в родительном падеже и роде
        },
        ru: {
            name: "Черепаха",
            instinct: "основа",
            nameGenitive: "Черепахи", // Форма в родительном падеже
            gender: "feminine", // Женский род (основа)
        },
        // Общее описание для обоих языков
        description: {
            en: "You move with intention. It’s essential for you to build the base — break down the structure, master the principles. Your approach is step-by-step: you don’t move forward until the foundation is solid.",
            ru: "Вы двигаетесь основательно. Вам важно заложить базу — разобрать структуру, освоить принципы. Ваш подход — пошаговый: вы не идёте дальше, пока не станете уверенными в основе."
        },
        // Метрики одинаковы для всех языков
        metrics: {
            speed: { min: 0, max: 25 },
            pattern: { min: 85, max: 100 },
            range: { min: 0, max: 20 }
        }
    },

    {
        en: {
            name: "Fox",
            instinct: "adaptability",
        },
        ru: {
            name: "Лиса",
            instinct: "гибкость",
            nameGenitive: "Лисы",
            gender: "feminine", // Женский род (гибкость)
        },
        description: {
            en: "You learn by adapting. You test quickly, shift direction, and find unconventional paths. Your approach is flexible: you’re not afraid to bend the rules if it gets results.",
            ru: "Вы учитесь через адаптацию. Быстро пробуете, меняете траекторию, находите нестандартные ходы. Ваш подход — гибкий: вы не боитесь обойти правила, если это даёт результат."
        },
        metrics: {
            speed: { min: 50, max: 75 },
            pattern: { min: 10, max: 35 },
            range: { min: 35, max: 55 }
        }
    },

    {
        en: {
            name: "Hummingbird",
            instinct: "precision",
        },
        ru: {
            name: "Колибри",
            instinct: "точность",
            nameGenitive: "Колибри",
            gender: "feminine",
        },
        description: {
            en: "You’re detail-oriented. Lines, rhythm, pixels — everything should be just right. Your approach is refined: you don’t move on until each element is polished.",
            ru: "Вы внимательны к деталям. Линии, ритм, пиксели — всё должно быть идеально. Ваш подход — выверенный: вы не идёте дальше, пока не доведёте элемент до чистоты."
        },
        metrics: {
            speed: { min: 85, max: 100 },
            pattern: { min: 40, max: 60 },
            range: { min: 5, max: 20 }
        }
    },

    {
        en: {
            name: "Eagle",
            instinct: "vision",
        },
        ru: {
            name: "Орел",
            instinct: "видение",
            nameGenitive: "Орла",
            gender: "neuter", // Средний род (видение)
        },
        description: {
            en: "You start with the big picture. First comes the goal and structure, then the form and details. Your approach is strategic: you design from meaning, not just the interface.",
            ru: "Вы начинаете с общего. Сначала — цель и структура, потом — форма и детали. Ваш подход — стратегический: вы проектируете на уровне смысла, не интерфейса."
        },
        metrics: {
            speed: { min: 45, max: 65 },
            pattern: { min: 65, max: 80 },
            range: { min: 80, max: 100 }
        }
    },

    {
        en: {
            name: "Elephant",
            instinct: "wisdom",
        },
        ru: {
            name: "Слон",
            instinct: "мудрость",
            nameGenitive: "Слона",
            gender: "feminine", // Женский род (мудрость)
        },
        description: {
            en: "You seek depth. You compare, reflect, and connect the new with the familiar. Your approach is thoughtful: context and logic matter more than just the outcome.",
            ru: "Вы ищете глубину. Сравниваете, анализируете, связываете новое со знакомым. Ваш подход — вдумчивый: вам важен контекст и логика, а не только результат."
        },
        metrics: {
            speed: { min: 5, max: 30 },
            pattern: { min: 75, max: 90 },
            range: { min: 45, max: 65 }
        }
    },

    {
        en: {
            name: "Dolphin",
            instinct: "intuition",
        },
        ru: {
            name: "Дельфин",
            instinct: "интуиция",
            nameGenitive: "Дельфина",
            gender: "feminine", // Женский род (интуиция)
        },
        description: {
            en: "You rely on feel. You know when something works — even if you can’t explain why. Your approach is intuitive: you design interactions from within, not from a template.",
            ru: "Вы полагаетесь на ощущения. Вы чувствуете, когда «работает», даже если не можете объяснить. Ваш подход — интуитивный: вы строите взаимодействие изнутри, не по схеме."
        },
        metrics: {
            speed: { min: 60, max: 80 },
            pattern: { min: 50, max: 70 },
            range: { min: 30, max: 50 }
        }
    },

    {
        en: {
            name: "Wolf",
            instinct: "balance",
        },
        ru: {
            name: "Волк",
            instinct: "баланс",
            nameGenitive: "Волка",
            gender: "masculine", // Мужской род
        },
        description: {
            en: "You build systems. You care about order, hierarchy, and coherence. Your approach is systematic: you unify aesthetics and structure into a single whole.",
            ru: "Вы собираете систему. Для вас важны порядок, иерархия, согласованность. Ваш подход — системный: вы соединяете эстетику и структуру в одно целое."
        },
        metrics: {
            speed: { min: 40, max: 65 },
            pattern: { min: 60, max: 80 },
            range: { min: 50, max: 70 }
        }
    },

    {
        en: {
            name: "Deer",
            instinct: "elegance",
        },
        ru: {
            name: "Олень",
            instinct: "изящество",
            nameGenitive: "Оленя",
            gender: "neuter", // Средний род (изящество)
        },
        description: {
            en: "You work through form. Tempo, rhythm, whitespace, and visual stillness matter to you. Your approach is expressive: you refine the shape until nothing more is needed.",
            ru: "Вы работаете с формой. Вам важны темп, ритм, воздух, визуальная тишина. Ваш подход — выразительный: вы оттачиваете образ, пока не останется ничего лишнего."
        },
        metrics: {
            speed: { min: 25, max: 50 },
            pattern: { min: 55, max: 75 },
            range: { min: 25, max: 45 }
        }
    }
];

// Экспортируем базу данных
window.animalDatabase = animalDatabase;