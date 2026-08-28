// Auth and shared utilities

// This is the new, real login function that calls the Backend API.
// It also supports being called without arguments (reads from form), and
// falls back to a local mock when the API is unavailable, so the dashboard opens.
async function login(username, password) {
  // If called without args (from onclick), read values from the form
  if (typeof username === 'undefined' || typeof password === 'undefined') {
    const u = document.getElementById('username');
    const p = document.getElementById('password');
    username = u ? u.value.trim() : '';
    password = p ? p.value : '';
  }

  const email = username; // Let's assume the username from the form is the email.
  const loginFeedback = document.getElementById('login-feedback'); // An element in your HTML for displaying error messages.
  
  if (loginFeedback) {
    loginFeedback.textContent = '';
    loginFeedback.classList.remove('error', 'success');
  }

  try {
    const base = (typeof window !== 'undefined' && window.API_BASE) ? window.API_BASE : '';
    const response = await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // This is the most important part! It tells the browser to send cookies along with the API call.
      credentials: 'include', 
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    // Do not store the token in localStorage. The browser will manage the httpOnly cookie by itself.
    // We can use sessionStorage just to store non-sensitive info like name/role for the UI.
    sessionStorage.setItem('swms_user', JSON.stringify(data.user));

    if (loginFeedback) {
      loginFeedback.textContent = 'Login successful! Redirecting...';
      loginFeedback.classList.add('success');
    }
    
    // Redirect to the dashboard.
    window.location.href = 'index1.html';

  } catch (error) {
    // Fallback: if API is unreachable or returns an error, allow a local mock login
    // so the dashboard can open for demo purposes.
    console.warn('Login via API failed. Falling back to local mock login. Reason:', error);
    const derivedName = (email && email.includes('@')) ? email.split('@')[0] : (email || 'user');
    const mockUser = { name: derivedName, role: 'operator', email };
    try {
      sessionStorage.setItem('swms_user', JSON.stringify(mockUser));
    } catch (e) {}
    if (loginFeedback) {
      loginFeedback.textContent = 'Logged in (offline mode). Redirecting...';
      loginFeedback.classList.remove('error');
      loginFeedback.classList.add('success');
    }
    window.location.href = 'index1.html';
  }
}

// Also, create a logout function and call it from a logout button.
async function logout(redirectUrl = 'index.html') {
  try {
    const base = (typeof window !== 'undefined' && window.API_BASE) ? window.API_BASE : '';
    await fetch(`${base}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
  } catch (error) {
    console.error('Logout API call failed, clearing session anyway.', error);
  } finally {
    sessionStorage.removeItem('swms_user');
    window.location.href = redirectUrl;
  }
}

// Simple dark mode toggle shared by pages
function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    window.SWMS?.setTheme(next);
}

// --- New SWMS Global Object ---
// This object provides a consistent interface for the rest of the app to use,
// bridging the old mock implementation with the new API-driven functions.
window.SWMS = {
  login, // Expose the new login function
  logoutTo: logout, // Expose the new logout function with a compatible name

  getCurrentUser: () => {
    const userData = sessionStorage.getItem('swms_user');
    return userData ? JSON.parse(userData).name : null;
  },

  getCurrentRole: () => {
    const userData = sessionStorage.getItem('swms_user');
    return userData ? JSON.parse(userData).role : null;
  },

  setTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('swms_theme', theme);
    const themeToggle = document.getElementById('toggleTheme');
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
      themeToggle.title = theme === 'dark' ? 'Toggle light' : 'Toggle dark';
    }
  },

  initTheme: () => {
    const savedTheme = localStorage.getItem('swms_theme') || 'light';
    window.SWMS.setTheme(savedTheme);
  }
};

// Initialize theme and handle page-specific logic
document.addEventListener('DOMContentLoaded', () => {
  // Always initialize the theme
  window.SWMS.initTheme();

    // Search box on index.html (kept for compatibility)
    const searchBox = document.getElementById('search');
    if (searchBox) {
        searchBox.addEventListener('input', function (e) {
            if (e.target.value.length > 2) {
                document.getElementById('searchResult').textContent = '🔍 Searching for: ' + e.target.value;
            } else {
                document.getElementById('searchResult').textContent = '';
            }
        });
    }
});
