/* PROJETO: PIZZARIA ITALIANA
   DESENVOLVEDOR: FERNANDA VALERIANO
*/

// EVENTOS AO CARREGAR O DOM
document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMAÇÕES SCROLL REVEAL (Intersection Observer) ---
    const revealElements = document.querySelectorAll(
        '.hero, .sobre-section, .cardapio, .titulo-sessao, ' +
        '.pizza-card, .video-section, .qs-section, .qs-card, ' +
        '.ambiente-grid, .footer-pizzaria, .ambiente-info, .ambiente-foto'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
});

// --- GOOGLE PLACES AUTOCOMPLETE ---
function initAutocomplete() {
    const input = document.getElementById('address');
    if (!input) return;

    const options = {
        componentRestrictions: { country: "br" },
        fields: ["formatted_address", "geometry"],
        types: ["address"],
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;
    });
}
window.onload = initAutocomplete;

// --- SISTEMA DE CARRINHO ---
let cart = [];
const cartModal = document.getElementById('cart-modal');
const btnAbrirCarrinho = document.querySelector('.btn-carrinho');
const btnFecharCarrinho = document.querySelector('.close-modal');

if (btnAbrirCarrinho) {
    btnAbrirCarrinho.onclick = () => {
        cartModal.style.display = 'flex';
        updateCartModal();
    };
}

if (btnFecharCarrinho) {
    btnFecharCarrinho.onclick = () => {
        cartModal.style.display = 'none';
    };
}

window.onclick = (event) => { 
    if (event.target == cartModal) cartModal.style.display = 'none'; 
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-add-cart')) {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        addToCart(name, price);
    }
});

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCartModal();
    showToast(`Parabéns! ${name} foi adicionada! 🍕`);
}

function updateCartModal() {
    const list = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total-value');
    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        list.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <p style="margin:0; font-weight:bold; color: #fff;">${item.name}</p>
                    <p style="margin:0; color:#d4a55a; font-size:13px;">R$ ${itemTotal.toFixed(2)}</p>
                </div>
                <div class="cart-controls">
                    <button class="btn-qty" onclick="changeQty(${index}, -1)">-</button>
                    <span class="qty-num">${item.quantity}</span>
                    <button class="btn-qty" onclick="changeQty(${index}, 1)">+</button>
                    <button class="btn-remove" onclick="removeItem(${index})">🗑️</button>
                </div>
            </div>`;
    });
    totalDisplay.innerText = total.toFixed(2);
}

window.changeQty = function(index, delta) {
    if (cart[index].quantity + delta > 0) {
        cart[index].quantity += delta;
    } else {
        removeItem(index);
    }
    updateCartModal();
};

window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCartModal();
};

// --- ALERTAS E TOASTS ---
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-sucesso";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function showAlert(msg) {
    const alertDiv = document.getElementById('custom-alert');
    if(alertDiv) {
        document.getElementById('alert-message').innerText = msg;
        alertDiv.style.display = 'flex';
    }
}

window.closeAlert = function() {
    document.getElementById('custom-alert').style.display = 'none';
};

// --- FINALIZAÇÃO NO WHATSAPP ---
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showAlert("Seu carrinho está vazio!");
            return;
        }

        const addressInput = document.getElementById('address');
        const address = addressInput.value;
        const payment = document.getElementById('payment-method').value;
        const delivery = document.getElementById('delivery-method').value;

        if (!address) {
            showAlert("Opa, você esqueceu de colocar o seu endereço!");
            addressInput.focus();
            return;
        }

        let itensMsg = cart.map(i => `• ${i.quantity}x ${i.name} (R$ ${(i.price * i.quantity).toFixed(2)})`).join('\n');
        let total = document.getElementById('cart-total-value').innerText;
        const texto = `🍕 *Novo Pedido - Pizzaria Italiana*\n\n${itensMsg}\n\n*Total:* R$ ${total}\n*Tipo:* ${delivery}\n*Pagamento:* ${payment}\n*Endereço:* ${address}`;
        
        const phone = "5527999999999"; 
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(texto)}`, '_blank');
    });
}

// --- AUTENTICAÇÃO TWILIO ---
window.openLogin = function() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        loginModal.style.display = 'flex';
        showTab('login');
    }
};

window.closeLogin = function() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) loginModal.style.display = 'none';
};

window.showTab = function(tab) {
    const loginForm = document.getElementById('form-login');
    const signupForm = document.getElementById('form-signup');
    const step2 = document.getElementById('step-2');
    const tabL = document.getElementById('tab-login');
    const tabS = document.getElementById('tab-signup');

    if(step2) step2.style.display = 'none';

    if (tab === 'login') {
        if(loginForm) loginForm.style.display = 'block';
        if(signupForm) signupForm.style.display = 'none';
        tabL.classList.add('active-tab');
        tabS.classList.remove('active-tab');
    } else {
        if(loginForm) loginForm.style.display = 'none';
        if(signupForm) signupForm.style.display = 'block';
        tabS.classList.add('active-tab');
        tabL.classList.remove('active-tab');
    }
};

window.handleSignup = async function() {
    const nameEl = document.getElementById('signup-name');
    const name = nameEl ? nameEl.value : '';
    const phoneInput = document.getElementById('signup-phone') || document.getElementById('login-phone');
    const phoneClean = phoneInput.value.replace(/\D/g, "");
    const phone = "+" + phoneClean;

    if (phoneClean.length < 12) {
        showAlert("Por favor, insira o número completo com DDD.");
        return;
    }

    showAlert("Enviando código...");

    try {
        const res = await fetch('/api/send-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });
        const data = await res.json();
        if (data.success) {
            showAlert("Código enviado! Verifique seu celular.");
            document.getElementById('form-signup').style.display = 'none';
            document.getElementById('form-login').style.display = 'none';
            document.getElementById('step-2').style.display = 'block';
            // Salva o número para usar na verificação
            window._phoneToVerify = phone;
        } else {
            showAlert("Erro ao enviar código. Tente novamente.");
        }
    } catch (err) {
        showAlert("Erro ao enviar código. Tente novamente.");
    }
};

window.validateLogin = async function() {
    const code = document.getElementById('sms-code').value;
    if (code.length !== 6) {
        showAlert("O código deve ter 6 dígitos.");
        return;
    }

    try {
        const res = await fetch('/api/verify-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone: window._phoneToVerify, code })
        });
        const data = await res.json();
        if (data.success) {
            showAlert("Sucesso! Bem-vinda à Pizzaria Italiana.");
            closeLogin();
            const loginBtn = document.querySelector('.btn-login');
            if(loginBtn) loginBtn.innerText = "PERFIL";
        } else {
            showAlert("Código incorreto ou expirado.");
        }
    } catch (err) {
        showAlert("Erro ao verificar código. Tente novamente.");
    }
};

// --- MÁSCARA DE TELEFONE ---
const inputPhone = document.getElementById('signup-phone');
if (inputPhone) {
    inputPhone.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (!value.startsWith("55")) value = "55" + value;
        value = value.slice(0, 13);
        
        let formatted = "+" + value.slice(0, 2);
        if (value.length > 2) formatted += " (" + value.slice(2, 4);
        if (value.length > 4) formatted += ") " + value.slice(4, 9);
        if (value.length > 9) formatted += "-" + value.slice(9, 13);
        e.target.value = formatted;
    });

    inputPhone.addEventListener('focus', (e) => {
        if (!e.target.value) e.target.value = "+55 ";
    });
}

// Auxiliar para as abas do Menu de Pizzas
window.switchTab = function(panel, btn) {
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + panel).classList.add('active');
    btn.classList.add('active');
};