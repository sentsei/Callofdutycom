:root {
    --primary-color: #f4b41a; 
    --bg-dark: #11141a;       
    --bg-card: #1a1f29;       
    --text-light: #ffffff;
    --text-gray: #a0a5b5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

header {
    background-color: rgba(26, 31, 41, 0.95);
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--primary-color);
}

.logo {
    font-size: 24px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.logo span {
    color: var(--primary-color);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    color: var(--text-gray);
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.3s;
}

nav ul li a:hover {
    color: var(--primary-color);
}

.hero {
    height: 50vh;
    background: linear-gradient(rgba(17, 20, 26, 0.85), rgba(17, 20, 26, 1)), 
                url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
}

.hero h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.hero h1 span {
    color: var(--primary-color);
}

.hero p {
    color: var(--text-gray);
    margin-top: 10px;
}

.btn {
    background-color: var(--primary-color);
    color: #000;
    padding: 12px 30px;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 25px;
    transition: 0.3s;
}

.btn:hover {
    background-color: #fff;
    box-shadow: 0 0 15px var(--primary-color);
}

.container {
    padding: 60px 8%;
}

.section-title {
    text-align: center;
    font-size: 2.3rem;
    text-transform: uppercase;
    margin-bottom: 40px;
    letter-spacing: 2px;
}

.section-title span {
    color: var(--primary-color);
}

.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    background: transparent;
    color: var(--text-light);
    border: 2px solid var(--text-gray);
    padding: 8px 20px;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.3s;
}

.filter-btn.active, .filter-btn:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: #000;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.card {
    background-color: var(--bg-card);
    border-radius: 6px;
    padding: 22px;
    border: 1px solid #2a313d;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
}

.class-label {
    color: var(--primary-color);
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
}

.name-label {
    font-size: 1.6rem;
    margin: 5px 0 15px 0;
}

.stat-row {
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: var(--text-gray);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.stat-bar {
    background-color: #2a313d;
    height: 6px;
    border-radius: 3px;
    width: 55%;
    overflow: hidden;
}

.stat-fill {
    background-color: var(--primary-color);
    height: 100%;
}

.attachment-list {
    list-style: none;
    margin-bottom: 15px;
}

.attachment-list li {
    font-size: 0.9rem;
    color: var(--text-gray);
    padding: 6px 0;
    border-bottom: 1px solid #2a313d;
}

.attachment-list li::before {
    content: '» ';
    color: var(--primary-color);
}

.perks-badge {
    background: #11141a;
    padding: 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    color: var(--primary-color);
    text-align: center;
    font-weight: 600;
}

footer {
    background-color: #0b0d12;
    text-align: center;
    padding: 25px;
    font-size: 0.9rem;
    color: var(--text-gray);
    border-top: 1px solid #1a1f29;
}

