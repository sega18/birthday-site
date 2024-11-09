function celebrate() {
    console.log("Кнопка нажата!");
    document.body.style.backgroundColor = '#1d1d1d';
    const button = document.querySelector('.button');
    const video = document.getElementById('fireworksVideo');
    const countdown = document.getElementById('countdown');
    const music = document.getElementById('backgroundMusic'); // Ссылка на аудио элемент
    
    button.classList.add('clicked');
    video.style.display = 'block';  // Показываем видео
    video.play(); // Запускаем видео для уверенности
    startCountdown(); // Запускаем таймер
    countdown.style.display = 'block'; // Показываем таймер
    
    // Запускаем музыку
    music.play();
}

function startCountdown() {
    const targetDate = new Date(new Date().getFullYear(), 10, 11); // 11 ноября текущего года
    const countdown = document.getElementById('countdown');
    
    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            countdown.innerHTML = "С Днем Рождения!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    }

    updateCountdown(); // Обновление при загрузке
    const interval = setInterval(updateCountdown, 1000);
}

