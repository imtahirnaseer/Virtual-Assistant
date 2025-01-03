const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Tahir Boss");
    }

    else if(hr == 12) {
        speak("Good noon Tahir Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Tahir Boss");
    }

    else {
        speak("Good Evening Tahir Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Virtual Assistant");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello') || message.includes('hi')) {
        const finalText = "Hello Tahir Boss, How can I assist you today?";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Dhruv Rathee and i am a virtual assistant";
        speech.text = finalText;
    }

    else if(message.includes("who are you")) {
        const finalText = "I am a virtual assistant, created by Tahir Naseer";
        speech.text = finalText;
    }

    else if(message.includes("open youtube")) {
        const finalText = "Opening youtube...";
        speech.text = finalText;
        window.open("https://youtube.com/Tahirtechlab", "_blank");
    }

    else if(message.includes("what is your name")) {
        const finalText = "My Name is Dhruv Rathee and I am a virtual assistant created by Tahir Naseer.";
        speech.text = finalText;
    }

    else if(message.includes("what is your father name")) {
        const finalText = "My Father Name is Tahir Naseer because he is the one who created me. He is a talented software developer with a passion for creating innovative solutions.";
        speech.text = finalText;
    }

    else if(message.includes("who is tahir naseer")) {
        const finalText = "Tahir Naseer is a skilled software developer and the creator of this virtual assistant. He has a strong background in programming and technology, and he enjoys building tools to help others.";
        speech.text = finalText;
    }

    else if(message.includes("how are you")) {
        const finalText = "I am fine, thank you for asking. How can I assist you today?";
        speech.text = finalText;
    }

    else if(message.includes("what can you do")) {
        const finalText = "I can assist you with various tasks such as opening websites, telling the time and date, and answering your questions.";
        speech.text = finalText;
    }

    else if(message.includes("aap kiske virtual assistant ho")) {
        const finalText = "Main Tahir Naseer ka virtual assistant hoon.";
        speech.text = finalText;
    }

    else if(message.includes("who created you")) {
        const finalText = "I was created by Tahir Naseer.";
        speech.text = finalText;
    }

    else if(message.includes("what is your purpose")) {
        const finalText = "My purpose is to assist you with your tasks and provide information.";
        speech.text = finalText;
    }

    else if(message.includes("do you have any hobbies")) {
        const finalText = "As a virtual assistant, I don't have hobbies, but I enjoy helping you.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite color")) {
        const finalText = "I don't have a favorite color, but I think all colors are beautiful.";
        speech.text = finalText;
    }

    else if(message.includes("do you have any friends")) {
        const finalText = "As a virtual assistant, I don't have friends, but I am here to assist you.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite food")) {
        const finalText = "I don't eat food, but I can help you find recipes or order food online.";
        speech.text = finalText;
    }

    else if(message.includes("can you sing a song")) {
        const finalText = "I can recite lyrics, but I cannot sing. How about I recite a song for you?";
        speech.text = finalText;
    }

    else if(message.includes("can you tell me a joke")) {
        const finalText = "Sure! Why don't scientists trust atoms? Because they make up everything!";
        speech.text = finalText;
    }

    else if(message.includes("what is the weather like")) {
        const finalText = "I cannot check the weather, but you can use a weather app or website for that information.";
        speech.text = finalText;
    }

    else if(message.includes("can you dance")) {
        const finalText = "I cannot dance, but I can play some music for you.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite movie")) {
        const finalText = "I don't watch movies, but I can help you find information about movies.";
        speech.text = finalText;
    }

    else if(message.includes("do you have any siblings")) {
        const finalText = "As a virtual assistant, I don't have siblings, but I am here to assist you.";
        speech.text = finalText;
    }

    else if(message.includes("can you drive a car")) {
        const finalText = "I cannot drive a car, but I can help you find directions or call a cab.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite book")) {
        const finalText = "I don't read books, but I can help you find information about books.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my homework")) {
        const finalText = "I can try to help you with your homework. What subject do you need help with?";
        speech.text = finalText;
    }

    else if(message.includes("do you like music")) {
        const finalText = "I don't have preferences, but I can play music for you.";
        speech.text = finalText;
    }

    else if(message.includes("can you play a game with me")) {
        const finalText = "I cannot play games, but I can help you find online games to play.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite sport")) {
        const finalText = "I don't play sports, but I can help you find information about sports.";
        speech.text = finalText;
    }

    else if(message.includes("can you cook")) {
        const finalText = "I cannot cook, but I can help you find recipes or order food online.";
        speech.text = finalText;
    }

    else if(message.includes("do you like traveling")) {
        const finalText = "I don't travel, but I can help you find travel information and book trips.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with shopping")) {
        const finalText = "I can help you find online stores and products to buy.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite animal")) {
        const finalText = "I don't have a favorite animal, but I think all animals are interesting.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my finances")) {
        const finalText = "I can help you find financial information and tools to manage your finances.";
        speech.text = finalText;
    }

    else if(message.includes("do you like art")) {
        const finalText = "I don't have preferences, but I can help you find information about art.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my fitness goals")) {
        const finalText = "I can help you find fitness information and workout plans.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite holiday")) {
        const finalText = "I don't have a favorite holiday, but I can help you find information about holidays.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my job search")) {
        const finalText = "I can help you find job listings and information about job searching.";
        speech.text = finalText;
    }

    else if(message.includes("do you like science")) {
        const finalText = "I find science fascinating and can help you find information about scientific topics.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my travel plans")) {
        const finalText = "I can help you find travel information and book trips.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite season")) {
        const finalText = "I don't have a favorite season, but I can help you find information about seasons.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my studies")) {
        const finalText = "I can help you find study materials and information on various subjects.";
        speech.text = finalText;
    }

    else if(message.includes("do you like history")) {
        const finalText = "I find history interesting and can help you find information about historical events.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my health goals")) {
        const finalText = "I can help you find health information and tips to achieve your health goals.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite hobby")) {
        const finalText = "I don't have hobbies, but I enjoy helping you.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my project")) {
        const finalText = "I can help you find information and resources for your project.";
        speech.text = finalText;
    }

    else if(message.includes("do you like technology")) {
        const finalText = "I find technology fascinating and can help you find information about tech topics.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my presentation")) {
        const finalText = "I can help you find information and resources for your presentation.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite subject")) {
        const finalText = "I don't have a favorite subject, but I can help you find information on various subjects.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my research")) {
        const finalText = "I can help you find research materials and information.";
        speech.text = finalText;
    }

    else if(message.includes("do you like mathematics")) {
        const finalText = "I find mathematics interesting and can help you find information about math topics.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my writing")) {
        const finalText = "I can help you find writing resources and tips.";
        speech.text = finalText;
    }

    else if(message.includes("what is your favorite quote")) {
        const finalText = "I don't have a favorite quote, but I can help you find quotes.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my coding")) {
        const finalText = "I can help you find coding resources and information.";
        speech.text = finalText;
    }

    else if(message.includes("do you like programming")) {
        const finalText = "I find programming fascinating and can help you find information about programming.";
        speech.text = finalText;
    }

    else if(message.includes("can you help me with my design")) {
        const finalText = "I can help you find design resources and tips.";
        speech.text = finalText;
    }

    else if(message.includes("open google")) {
        const finalText = "Opening google...";
        speech.text = finalText;
        window.open("https://google.com/", "_blank");
    }

    else if(message.includes("open facebook")) {
        const finalText = "Opening facebook...";
        speech.text = finalText;
        window.open("https://facebook.com/", "_blank");
    }

    else if(message.includes("open instagram")) {
        const finalText = "Opening instagram...";
        speech.text = finalText;
        window.open("https://instagram.com/imtahirnaseer", "_blank");
    }

    else if(message.includes("open calculator")) {
        const finalText = "Opening calculator...";
        speech.text = finalText;
        window.open("calculator://");
    }

    else if(message.includes("open whatsapp")) {
        const finalText = "Opening whatsapp...";
        speech.text = finalText;
        window.open("whatsapp://");
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        const finalText = "This is what I found on the internet regarding " + message;
        speech.text = finalText;
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    }

    else if(message.includes('wikipedia')) {
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speech.text = finalText;
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        const finalText = "Opening Calculator";
        speech.text = finalText;
        window.open('Calculator:///');
    }

    else if(message.includes("call")) {
        const finalText = "Initiating a call...";
        speech.text = finalText;
        const phoneNumber = message.replace("call", "").trim();
        window.open(`tel:${phoneNumber}`);
    }

    else {
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}