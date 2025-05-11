document.addEventListener('DOMContentLoaded', () => {
    // --- DATA: Our Blog Posts (Added imageUrl) ---
    const blogPosts = [
        {
            id: 1,
            title: "Getting Started with JavaScript",
            author: "Jane Doe",
            date: "October 26, 2023",
            imageUrl: "https://picsum.photos/seed/jsbasics/600/300", // Placeholder image
            summary: "A beginner's guide to understanding the basics of JavaScript, the language of the web.",
            content: `
                <p>JavaScript is a versatile and powerful programming language that runs in web browsers. It allows you to add interactivity to your websites, create dynamic content, and much more.</p>
                <p>Here are some fundamental concepts:</p>
                <ul>
                    <li><strong>Variables:</strong> Used to store data (e.g., <code>let name = "Alice";</code>).</li>
                    <li><strong>Data Types:</strong> Strings, numbers, booleans, objects, arrays, etc.</li>
                    <li><strong>Operators:</strong> For performing operations (arithmetic, comparison, logical).</li>
                    <li><strong>Control Flow:</strong> <code>if/else</code> statements, loops (<code>for</code>, <code>while</code>) to control the execution of code.</li>
                    <li><strong>Functions:</strong> Reusable blocks of code to perform specific tasks.</li>
                </ul>
                <p>To get started, you can open your browser's developer console (usually by pressing F12) and start typing JavaScript code right away!</p>
            `
        },
        {
            id: 2,
            title: "The Importance of Semantic HTML",
            author: "John Smith",
            date: "October 24, 2023",
            imageUrl: "https://picsum.photos/seed/html5/600/300",
            summary: "Learn why using semantic HTML tags makes your website more accessible and SEO-friendly.",
            content: `
                <p>Semantic HTML refers to using HTML tags that convey the meaning and structure of the content, rather than just its presentation. For example, using <code>&lt;nav&gt;</code> for navigation links, <code>&lt;article&gt;</code> for blog posts, and <code>&lt;aside&gt;</code> for sidebars.</p>
                <h3>Why is it important?</h3>
                <ol>
                    <li><strong>Accessibility:</strong> Screen readers and other assistive technologies rely on semantic HTML to understand the page structure and provide a better experience for users with disabilities.</li>
                    <li><strong>SEO (Search Engine Optimization):</strong> Search engines use semantic tags to better understand the content of your page, which can improve your search rankings.</li>
                    <li><strong>Maintainability:</strong> Code with semantic tags is easier to read, understand, and maintain for developers.</li>
                    <li><strong>Clarity:</strong> It provides a clear structure to your document, making it easier for both browsers and developers to interpret.</li>
                </ol>
                <p>Instead of using generic <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> tags for everything, try to use more specific tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;figure&gt;</code>, and <code>&lt;figcaption&gt;</code>.</p>
            `
        },
        {
            id: 3,
            title: "CSS Basics: Styling Your Web Pages",
            author: "Alice Brown",
            date: "October 20, 2023",
            imageUrl: "https://picsum.photos/seed/cssrules/600/300",
            summary: "An introduction to Cascading Style Sheets (CSS) for adding visual appeal to your HTML.",
            content: `
                <p>CSS (Cascading Style Sheets) is the language we use to style an HTML document. It describes how HTML elements should be displayed on screen, on paper, or in other media.</p>
                <p>CSS works by selecting HTML elements and applying styles to them. Here are some core concepts:</p>
                <ul>
                    <li><strong>Selectors:</strong> Patterns used to select the HTML elements you want to style (e.g., <code>p</code> for all paragraphs, <code>.my-class</code> for elements with a specific class, <code>#my-id</code> for an element with a specific ID).</li>
                    <li><strong>Properties:</strong> The aspects you want to change (e.g., <code>color</code>, <code>font-size</code>, <code>background-color</code>).</li>
                    <li><strong>Values:</strong> The settings for those properties (e.g., <code>blue</code>, <code>16px</code>, <code>#f0f0f0</code>).</li>
                </ul>
                <p>A basic CSS rule looks like this:</p>
                <pre><code>selector {
    property: value;
    another-property: another-value;
}</code></pre>
                <p>For example, to make all paragraphs red:</p>
                <pre><code>p {
    color: red;
}</code></pre>
                <p>You can include CSS directly in your HTML using a <code>&lt;style&gt;</code> tag, or, more commonly, in a separate <code>.css</code> file linked in the <code>&lt;head&gt;</code> of your HTML document.</p>
            `
        },
        {
            id: 4,
            title: "Responsive Web Design Fundamentals",
            author: "David Lee",
            date: "November 5, 2023",
            imageUrl: "https://picsum.photos/seed/responsive/600/300",
            summary: "Ensuring your website looks great on all devices, from desktops to mobile phones.",
            content: `
                <p>Responsive Web Design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Content, design, and performance are necessary across all devices to ensure usability and satisfaction.</p>
                <h3>Key Principles:</h3>
                <ul>
                    <li><strong>Fluid Grids:</strong> Using relative units like percentages, rather than fixed units like pixels, for page element sizing.</li>
                    <li><strong>Flexible Images:</strong> Ensuring images scale within their containing elements, often using <code>max-width: 100%;</code>.</li>
                    <li><strong>Media Queries:</strong> A CSS3 module allowing content rendering to adapt to conditions such as screen resolution (e.g., <code>@media (min-width: 768px) { ... }</code>).</li>
                </ul>
                <p>The goal of responsive design is to build web pages that detect the visitor's screen size and orientation and change the layout accordingly. This provides an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling.</p>
            `
        },
        {
            id: 5,
            title: "Understanding APIs: A Simple Explanation",
            author: "Sarah Miller",
            date: "November 10, 2023",
            imageUrl: "https://picsum.photos/seed/apis/600/300",
            summary: "What are APIs and how do they enable different software systems to communicate?",
            content: `
                <p>API stands for Application Programming Interface. At its core, an API is a set of rules and protocols that allows different software applications to communicate with each other. Think of it as a messenger that takes requests, tells a system what you want to do, and then returns the response back to you.</p>
                <h3>Why are APIs useful?</h3>
                <ul>
                    <li><strong>Integration:</strong> APIs allow different software systems, even those built with different technologies, to work together. For example, a travel website might use APIs from airlines and hotels to display flight and room availability.</li>
                    <li><strong>Automation:</strong> Tasks that would otherwise require manual intervention can be automated using APIs.</li>
                    <li><strong>Efficiency:</strong> Developers don't have to reinvent the wheel. They can use existing APIs to access data or functionality provided by other services.</li>
                    <li><strong>Innovation:</strong> APIs enable developers to build new and innovative applications by combining services from various sources.</li>
                </ul>
                <p>When you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API. Many websites and applications you use daily rely heavily on APIs to function.</p>
            `
        },
         {
            id: 6,
            title: "Introduction to Version Control with Git",
            author: "Mike Chen",
            date: "November 15, 2023",
            imageUrl: "https://picsum.photos/seed/gitvcs/600/300",
            summary: "Learn the basics of Git, a powerful version control system for tracking changes in your projects.",
            content: `
                <p>Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work on the same project simultaneously without overwriting each other's changes.</p>
                <h3>Core Concepts:</h3>
                <ul>
                    <li><strong>Repository (Repo):</strong> A directory where your project files and their revision history are stored.</li>
                    <li><strong>Commit:</strong> A snapshot of your files at a particular point in time.</li>
                    <li><strong>Branch:</strong> A parallel version of your repository, allowing you to work on new features or fixes without affecting the main codebase.</li>
                    <li><strong>Merge:</strong> Combining changes from different branches back into one.</li>
                    <li><strong>Remote:</strong> A version of your repository hosted on a server (e.g., GitHub, GitLab, Bitbucket).</li>
                </ul>
                <p>Common Git commands include <code>git init</code>, <code>git add</code>, <code>git commit</code>, <code>git push</code>, <code>git pull</code>, <code>git branch</code>, and <code>git merge</code>.</p>
                <p>Using Git helps in tracking changes, reverting to previous versions, collaborating with others, and managing complex software development workflows. It's an essential tool for modern developers.</p>
            `
        }
    ];

    // --- DOM Elements ---
    const blogListEl = document.getElementById('blog-list'); // Changed name for clarity
    const blogPostContainer = document.getElementById('blog-post-container');
    const blogListSection = document.getElementById('blog-list-container');

    const postImageFullEl = document.getElementById('post-image-full');
    const postTitleEl = document.getElementById('post-title');
    const postAuthorEl = document.getElementById('post-author');
    const postDateEl = document.getElementById('post-date');
    const postBodyEl = document.getElementById('post-body');
    const backButton = document.getElementById('back-to-home');

    const searchBar = document.getElementById('search-bar');
    const noResultsMessage = document.getElementById('no-results-message');
    const contactUsButton = document.getElementById('contact-us-btn');


    // --- Functions ---
    function displayBlogList(postsToDisplay = blogPosts) {
        blogListEl.innerHTML = ''; // Clear existing list items
        noResultsMessage.style.display = 'none';

        if (postsToDisplay.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            postsToDisplay.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('blog-item');
                postElement.innerHTML = `
                    <img src="${post.imageUrl}" alt="${post.title}" class="blog-item-image">
                    <div class="blog-item-content">
                        <h3 data-id="${post.id}">${post.title}</h3>
                        <p class="meta">By ${post.author} on ${post.date}</p>
                        <p class="summary">${post.summary}</p>
                    </div>
                `;
                postElement.querySelector('h3').addEventListener('click', () => {
                    displayBlogPost(post.id);
                });
                blogListEl.appendChild(postElement);
            });
        }
        blogListSection.style.display = 'block';
        blogPostContainer.style.display = 'none';
    }

    function displayBlogPost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) {
            console.error("Post not found!");
            return;
        }

        postImageFullEl.src = post.imageUrl;
        postImageFullEl.alt = post.title;
        postTitleEl.textContent = post.title;
        postAuthorEl.textContent = post.author;
        postDateEl.textContent = post.date;
        postBodyEl.innerHTML = post.content;

        blogListSection.style.display = 'none';
        blogPostContainer.style.display = 'block';
        window.scrollTo(0, 0);
    }

    function handleSearch() {
        const searchTerm = searchBar.value.toLowerCase().trim();
        const filteredPosts = blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.summary.toLowerCase().includes(searchTerm)
        );
        displayBlogList(filteredPosts);
    }

    // --- Event Listeners ---
    backButton.addEventListener('click', () => {
        searchBar.value = '';
        searchBar.dispatchEvent(new Event('input')); // Trigger label animation
        displayBlogList(blogPosts);
    });

    searchBar.addEventListener('input', handleSearch);

    contactUsButton.addEventListener('click', () => {
        // A more "Material" way could be a dialog, but alert is simple
        alert('Thank you for your interest! Please contact us at: blog-admin@example.com');
    });

    // --- Initial Load ---
    displayBlogList();
});