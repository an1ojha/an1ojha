// Update site name
document.querySelector('.logo span').textContent = 'Stalagtites and Stalagmites';

// Typing animation
const heroTitle = document.querySelector('.hero h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        heroTitle.classList.add('typing-done');
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle section transitions
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Add dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

// Check for saved dark mode preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
    // Save preference
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}

// Add some CSS for the dark mode toggle
const style = document.createElement('style');
style.textContent = `
    .dark-mode-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border-radius: 50%;
        border: none;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        cursor: pointer;
        z-index: 1000;
        font-size: 1.2rem;
    }

    .dark-mode {
        background-color: #1a1a1a;
        color: #fff;
    }

    .dark-mode header {
        background-color: #2c2c2c;
    }

    .dark-mode .post-card {
        background-color: #2c2c2c;
    }

    .dark-mode .nav-links a {
        color: #fff;
    }

    .dark-mode .post-content h3 {
        color: #fff;
    }

    .dark-mode .post-excerpt {
        color: #ccc;
    }
`;
document.head.appendChild(style);

// Blog posts data structure
const blogPosts = [
    {
        id: 'future-of-ai',
        title: "The Future of AI: Beyond the Hype",
        date: "March 25, 2024",
        excerpt: "Exploring the real impact of artificial intelligence on our daily lives and future possibilities.",
        content: `
            <p>Artificial Intelligence has been a buzzword for years, but what does it really mean for our future? In this comprehensive exploration, we'll dive deep into the practical applications and potential implications of AI in our daily lives.</p>
            
            <h2>The Current State of AI</h2>
            <p>From virtual assistants to autonomous vehicles, AI is already making its presence felt. But beyond these visible applications, AI is quietly revolutionizing industries from healthcare to agriculture.</p>
            
            <h2>What's Next?</h2>
            <p>As we look to the future, several key areas are emerging as potential game-changers:</p>
            <ul>
                <li>Personalized medicine and healthcare</li>
                <li>Climate change solutions</li>
                <li>Education and learning</li>
                <li>Workplace automation</li>
            </ul>
            
            <h2>Challenges and Considerations</h2>
            <p>While the potential is exciting, we must also consider the ethical implications and challenges that come with AI advancement. Privacy, security, and the future of work are just some of the areas that need careful consideration.</p>
            
            <p>As we continue to develop and implement AI solutions, it's crucial to maintain a balance between innovation and responsibility. The future of AI isn't just about technology—it's about creating a better world for all of us.</p>
        `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Technology"
    },
    {
        id: 'clean-code',
        title: "The Art of Clean Code",
        date: "March 22, 2024",
        excerpt: "Best practices and principles for writing maintainable, efficient code.",
        content: `
            <p>Writing clean code is an art that every developer should master. It's not just about making code work—it's about making it maintainable, readable, and efficient.</p>
            
            <h2>Principles of Clean Code</h2>
            <p>Clean code follows several key principles:</p>
            <ul>
                <li>Meaningful names</li>
                <li>Single responsibility</li>
                <li>DRY (Don't Repeat Yourself)</li>
                <li>KISS (Keep It Simple, Stupid)</li>
            </ul>
            
            <h2>Code Organization</h2>
            <p>Proper organization is crucial for maintainability. This includes:</p>
            <ul>
                <li>Logical file structure</li>
                <li>Consistent formatting</li>
                <li>Clear documentation</li>
                <li>Modular design</li>
            </ul>
            
            <h2>Testing and Quality</h2>
            <p>Clean code goes hand in hand with good testing practices. Writing testable code and maintaining comprehensive tests ensures long-term reliability.</p>
            
            <p>Remember, clean code is not just about aesthetics—it's about creating a foundation that makes future development easier and more efficient.</p>
        `,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Development"
    },
    {
        id: 'remote-first-culture',
        title: "Building a Remote-First Culture",
        date: "March 20, 2024",
        excerpt: "Lessons learned from transitioning to a fully remote work environment.",
        content: `
            <p>The shift to remote work has transformed how we think about workplace culture. Building a successful remote-first culture requires intentional effort and a new approach to collaboration.</p>
            
            <h2>Key Components of Remote-First Culture</h2>
            <ul>
                <li>Clear communication channels</li>
                <li>Asynchronous workflows</li>
                <li>Digital collaboration tools</li>
                <li>Regular virtual team building</li>
            </ul>
            
            <h2>Challenges and Solutions</h2>
            <p>Remote work presents unique challenges, but with the right strategies, teams can thrive in a virtual environment.</p>
            
            <h2>Future of Work</h2>
            <p>As we continue to evolve, remote-first culture will become increasingly important in attracting and retaining top talent.</p>
        `,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Work Culture"
    },
    {
        id: 'web-dev-trends',
        title: "Modern Web Development Trends",
        date: "March 18, 2024",
        excerpt: "A comprehensive look at the latest trends shaping web development.",
        content: `
            <p>Web development is constantly evolving, with new trends and technologies emerging regularly. Let's explore the most significant trends shaping the future of web development.</p>
            
            <h2>Current Trends</h2>
            <ul>
                <li>Jamstack architecture</li>
                <li>WebAssembly</li>
                <li>Progressive Web Apps</li>
                <li>AI-powered development</li>
            </ul>
            
            <h2>Impact on Development</h2>
            <p>These trends are changing how we build and deploy web applications, making them faster, more secure, and more user-friendly.</p>
            
            <h2>Future Outlook</h2>
            <p>As we look ahead, these trends will continue to evolve and shape the future of web development.</p>
        `,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Development"
    },
    {
        id: 'cybersecurity-ai',
        title: "Cybersecurity in the Age of AI",
        date: "March 15, 2024",
        excerpt: "How artificial intelligence is changing the landscape of cybersecurity.",
        content: `
            <p>Artificial Intelligence is revolutionizing cybersecurity, both as a tool for protection and as a potential threat vector.</p>
            
            <h2>AI in Security</h2>
            <ul>
                <li>Threat detection</li>
                <li>Automated response</li>
                <li>Pattern recognition</li>
                <li>Risk assessment</li>
            </ul>
            
            <h2>Challenges</h2>
            <p>While AI offers powerful security capabilities, it also presents new challenges and vulnerabilities that need to be addressed.</p>
            
            <h2>Future of Security</h2>
            <p>As AI continues to evolve, it will play an increasingly central role in cybersecurity strategies.</p>
        `,
        image: "https://images.unsplash.com/photo-1550751827-4bd374e3dfe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Security"
    },
    {
        id: 'cloud-computing',
        title: "The Evolution of Cloud Computing",
        date: "March 12, 2024",
        excerpt: "From mainframes to serverless: the journey of cloud computing.",
        content: `
            <p>Cloud computing has transformed how we think about IT infrastructure and application deployment.</p>
            
            <h2>Cloud Evolution</h2>
            <ul>
                <li>Mainframe era</li>
                <li>Client-server model</li>
                <li>Virtualization</li>
                <li>Cloud-native architecture</li>
            </ul>
            
            <h2>Current State</h2>
            <p>Today's cloud computing landscape offers unprecedented flexibility and scalability.</p>
            
            <h2>Future Trends</h2>
            <p>As cloud computing continues to evolve, new paradigms like serverless and edge computing are emerging.</p>
        `,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Technology"
    }
];

// Function to handle image loading errors
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    img.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Fallback image
}

// Function to update blog page
function updateBlogPage() {
    const blogList = document.querySelector('.blog-list');
    if (!blogList) return;

    blogList.innerHTML = blogPosts.map(post => `
        <article class="blog-item">
            <a href="blog-post.html?id=${post.id}">
                <h2>${post.title}</h2>
                <span class="date">${post.date}</span>
            </a>
        </article>
    `).join('');
}

// Function to update latest posts on home page
function updateLatestPosts() {
    const postsGrid = document.querySelector('.posts-grid');
    if (!postsGrid) return;

    // Get the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);
    
    postsGrid.innerHTML = latestPosts.map(post => `
        <article class="post-card">
            <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="handleImageError(this)">
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3>${post.title}</h3>
                <div class="post-meta">
                    <span>${post.date}</span>
                </div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

// Function to add a new blog post
function addNewBlogPost(post) {
    blogPosts.unshift(post); // Add to beginning of array
    updateBlogPage();
    updateLatestPosts();
}

// Initialize pages
document.addEventListener('DOMContentLoaded', () => {
    updateBlogPage();
    updateLatestPosts();
    
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            darkModeToggle.querySelector('i').classList.toggle('fa-moon');
            darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        });
    }

    // Scroll effects
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Section visibility animation
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

// Example of adding a new blog post:
// addNewBlogPost({
//     title: "New Blog Post Title",
//     date: "March 26, 2024",
//     excerpt: "This is a brief description of the new blog post.",
//     image: "https://source.unsplash.com/random/800x600?new",
//     category: "Technology"
// }); 