(function () {
    const PASSWORD = '2003';

    function checkAccess() {
        if (sessionStorage.getItem('erasmus_authorized') === 'true') {
            return;
        }
        showLoginOverlay();
    }

    function showLoginOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'security-overlay';
        overlay.innerHTML = `
            <div class="security-container">
                <div class="logo-container">
                    <img src="logo_v3.png" alt="Logo">
                    <div class="input-overlay">
                        <h2>ACCESO</h2>
                        <input type="password" id="cert-pass" placeholder="Contraseña" autofocus>
                        <button id="cert-btn">ENTRAR</button>
                        <p id="error-msg" style="color: #cc0000; margin-top: 10px; display: none; font-weight: bold;">Incorrecto</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        const input = overlay.querySelector('#cert-pass');
        const btn = overlay.querySelector('#cert-btn');
        const error = overlay.querySelector('#error-msg');
        const container = overlay.querySelector('.logo-container');

        function handleLogin() {
            if (input.value === PASSWORD) {
                sessionStorage.setItem('erasmus_authorized', 'true');
                overlay.style.opacity = '0';
                overlay.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => {
                    overlay.remove();
                    document.body.style.overflow = 'auto';
                }, 500);
            } else {
                error.style.display = 'block';
                input.value = '';
                input.focus();
                container.classList.add('shake');
                setTimeout(() => container.classList.remove('shake'), 500);
            }
        }

        btn.addEventListener('click', handleLogin);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkAccess);
    } else {
        checkAccess();
    }
})();
