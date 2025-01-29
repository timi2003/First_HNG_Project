function updateTime() {
            let now = new Date().toUTCString().split(' ')[4];
            document.getElementById('current-time').textContent = now + ' UTC';
        }
        setInterval(updateTime, 1000);
        updateTime();

        