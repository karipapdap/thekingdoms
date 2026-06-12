// Modern Scroll Reveal using Intersection Observer
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Hanya beranimasi sekali
        }
    });
}, revealOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Animasi klik cursor
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Besarkan cursor apabila hover link
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.width = '40px');
        el.addEventListener('mouseenter', () => cursor.style.height = '40px');
        el.addEventListener('mouseleave', () => cursor.style.width = '10px');
        el.addEventListener('mouseleave', () => cursor.style.height = '10px');
    });
}

// Typewriter Effect Logic
function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const text = element.innerText;
    element.innerText = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Music Player Logic
function initMusic() {
    const musicBtn = document.getElementById('music-toggle');
    const musicStatus = document.getElementById('music-status');
    const audio = document.getElementById('bg-music');
    
    if (!musicBtn || !audio) return;

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                musicStatus.innerText = 'ON';
                musicBtn.innerText = '⏸️';
            }).catch(err => {
                console.error("Muzik gagal dimainkan:", err);
                alert("Gagal memulakan muzik. Sila pastikan pautan audio sah atau fail wujud.");
            });
        } else {
            audio.pause();
            musicStatus.innerText = 'OFF';
            musicBtn.innerText = '🎵';
        }
    });
}

// Notification Banner functionality
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initMusic();
    const notificationBanner = document.getElementById('notification-banner');
    const closeButton = document.getElementById('close-notification');
    const notificationMessage = document.getElementById('notification-message');

    const notifications = [
        { id: 'new_players', message: '📢 <strong>PENGUMUMAN PENTING:</strong> Selamat datang kepada pemain baru kami! Sertai Discord untuk info lanjut!' },
        { id: 'server_update', message: '✨ <strong>UPDATE SERVER:</strong> The Kingdoms MY telah menerima update besar! Cek fitur baru sekarang!' },
        { id: 'event_alert', message: '🎉 <strong>EVENT MINGGUAN:</strong> Jangan lewatkan event seru kami akhir pekan ini! Info di Discord!' },
        { id: 'discord_join', message: '💬 <strong>KOMUNITI DISCORD:</strong> Belum gabung Discord kami? Klik di sini untuk info terbaru dan interaksi seru!' }
    ];

    const lastClosedTimestamp = localStorage.getItem('notificationClosedUntil');
    const now = new Date().getTime();
    const hideDuration = 60 * 60 * 1000; // 1 Jam (Tukar kepada 0 untuk sentiasa muncul semasa testing)

    // Periksa apakah banner baru saja ditutup
    if (lastClosedTimestamp && (now - parseInt(lastClosedTimestamp, 10) < hideDuration)) {
        notificationBanner.classList.add('hidden');
        return; // Keluar jika baru saja ditutup
    } else {
        // Pastikan banner tidak tersembunyi jika tempoh sorok sudah tamat
        notificationBanner.classList.remove('hidden');
    }

    // Pilih notifikasi secara acak
    const currentNotificationIndex = Math.floor(Math.random() * notifications.length);

    const notificationToShow = notifications[currentNotificationIndex];
    notificationMessage.innerHTML = notificationToShow.message; // Perbarui konten notifikasi

    notificationBanner.classList.remove('hidden'); // Tampilkan banner

    // Tangani klik tombol tutup
    closeButton.addEventListener('click', () => {
        notificationBanner.classList.add('hidden');
        // Berikan ruang kepada navbar selepas banner hilang
        const navbar = document.querySelector('nav');
        if (navbar) {
            navbar.style.top = '0';
        }
        localStorage.setItem('notificationClosedUntil', new Date().getTime().toString()); // Simpan waktu tepat semasa klik
    });

    // News Modal Logic
    const newsLink = document.querySelector('nav ul li a[href="#news"]');
    const newsModal = document.getElementById('news-modal');
    const closeNews = document.getElementById('close-news');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (newsLink && newsModal) {
        newsLink.addEventListener('click', (e) => {
            e.preventDefault();
            newsModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop body scrolling
        });

        const closeModal = () => {
            newsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeNews.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
    }

    // Discord Live Stats Logic
    async function updateDiscordStats() {
        const SERVER_ID = '1400465643907846344'; 
        const statsElement = document.getElementById('discord-online-stats');

        try {
            const response = await fetch(`https://discord.com/api/guilds/${SERVER_ID}/widget.json`);
            if (!response.ok) throw new Error('Widget tidak aktif');
            
            const data = await response.json();
            const onlineCount = data.presence_count; // Mengambil jumlah ahli yang Online/Aktif
            
            statsElement.innerHTML = `<i class="fas fa-circle" style="color: #2ecc71; font-size: 0.6em;"></i> ${onlineCount} Aktif Sekarang`;
        } catch (error) {
            console.error("Gagal mengambil data Discord:", error);
            statsElement.style.display = 'none'; // Sembunyikan terus jika gagal
        }
    }

    updateDiscordStats();
});
