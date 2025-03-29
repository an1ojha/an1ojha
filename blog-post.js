// Get the post ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Function to get blog post content
function getBlogPost(id) {
    // This would typically come from a backend API
    // For now, we'll use the blogPosts array from script.js
    const post = blogPosts.find(post => post.id === id);
    if (!post) {
        window.location.href = 'blog.html'; // Redirect to blog page if post not found
        return;
    }
    return post;
}

// Function to update the blog post page
function updateBlogPostPage() {
    const post = getBlogPost(postId);
    if (!post) return;

    // Update page title
    document.title = `${post.title} - My Blog`;

    // Update post content
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-category').textContent = post.category;
    
    // Add the full content
    const content = document.getElementById('post-content');
    content.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-featured-image">
        <div class="post-text">
            ${post.content || post.excerpt}
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    if (!postId) {
        window.location.href = 'blog.html';
        return;
    }
    updateBlogPostPage();
}); 