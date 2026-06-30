const languages = {

hindi: {
    vocabulary: [
        { english:"Hello", translation:"नमस्ते" },
        { english:"Water", translation:"पानी" },
        { english:"Food", translation:"खाना" }
    ],
    phrases: [
        { english:"Good Morning", translation:"सुप्रभात" },
        { english:"Thank You", translation:"धन्यवाद" }
    ],
    grammar: [
        {
            english:"I eat food.",
            translation:"मैं खाना खाता हूँ।"
        }
    ]
},

french: {
    vocabulary: [
        { english:"Hello", translation:"Bonjour" },
        { english:"Water", translation:"Eau" },
        { english:"Food", translation:"Nourriture" }
    ],
    phrases: [
        { english:"Good Morning", translation:"Bonjour" },
        { english:"Thank You", translation:"Merci" }
    ],
    grammar: [
        {
            english:"I eat food.",
            translation:"Je mange de la nourriture."
        }
    ]
}

};

let currentLanguage = "hindi";

function showLanguages(){

    document.getElementById("content").innerHTML = `
        <h2>Select Language</h2>

        <button onclick="selectLanguage('hindi')">
            🇮🇳 Hindi
        </button>

        <button onclick="selectLanguage('french')">
            🇫🇷 French
        </button>
    `;
}

function selectLanguage(language){

    currentLanguage = language;

    document.getElementById("content").innerHTML = `
        <div class="tabs">
            <button onclick="showCategory('vocabulary')">
                📚 Vocabulary
            </button>

            <button onclick="showCategory('phrases')">
                💬 Phrases
            </button>

            <button onclick="showCategory('grammar')">
                ✍ Grammar
            </button>
        </div>

        <div id="lessonArea"></div>
    `;

    showCategory("vocabulary");
}

function showCategory(category){

    let html = "";

    languages[currentLanguage][category]
    .forEach(item => {

        html += `
            <div class="card">
                <h3>${item.english}</h3>

                <p>${item.translation}</p>

                <button class="speak-btn"
                onclick="speak('${item.english}')">
                🔊 Pronounce
                </button>
            </div>
        `;
    });

    document.getElementById("lessonArea")
    .innerHTML = html;
}

function speak(text){

    const speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speechSynthesis.speak(speech);
}

showLanguages();