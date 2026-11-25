/**
 * Ashwinth K - Portfolio Main Logic
 * Interactive Project Catalog, Modal Deep Dive, Interactive Terminal,
 * Working Contact Form (Direct to ashwinthkumar003@gmail.com), Clipboard Utils
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjects();
  initHeroCodeTabs();
  initTerminal();
  initContactForm();
  initResumeModal();
  initClipboardButtons();
});

/* ===================================================================
   1. NAVBAR & NAVIGATION
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveNavLink();
  });

  // Mobile menu open / close
  function toggleMobileMenu(isOpen) {
    if (isOpen) {
      mobileDrawer.classList.add('open');
      mobileOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      toggleMobileMenu(!isOpen);
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // Highlight active link based on scroll position
  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ===================================================================
   2. HERO CODE TABS
   =================================================================== */
function initHeroCodeTabs() {
  const tabButtons = document.querySelectorAll('.code-tab-btn');
  const codeDisplay = document.getElementById('heroCodeContent');

  const codeSnippets = {
    profile: `<span class="syntax-keyword">public class</span> <span class="syntax-class">AshwinthDevProfile</span> {
    <span class="syntax-keyword">private String</span> name = <span class="syntax-string">"Ashwinth K"</span>;
    <span class="syntax-keyword">private String</span> currentRole = <span class="syntax-string">"Java Full Stack Developer"</span>;
    <span class="syntax-keyword">private String</span> company = <span class="syntax-string">"Stackly"</span>;
    <span class="syntax-keyword">private String</span> email = <span class="syntax-string">"ashwinthkumar003@gmail.com"</span>;
    <span class="syntax-keyword">private double</span> bTechCgpa = <span class="syntax-number">8.3</span>;

    <span class="syntax-keyword">public boolean</span> isAvailableForOpportunities() {
        <span class="syntax-comment">// Open for full-time career leaps & freelance projects</span>
        <span class="syntax-keyword">return true</span>;
    }

    <span class="syntax-keyword">public String[]</span> getPrimarySkills() {
        <span class="syntax-keyword">return new String[]</span> {
            <span class="syntax-string">"Java"</span>, <span class="syntax-string">"Spring Boot"</span>, <span class="syntax-string">"Spring Data JPA"</span>,
            <span class="syntax-string">"JDBC"</span>, <span class="syntax-string">"MySQL"</span>, <span class="syntax-string">"REST APIs"</span>, <span class="syntax-string">"JavaScript"</span>
        };
    }
}`,
    controller: `<span class="syntax-annotation">@RestController</span>
<span class="syntax-annotation">@RequestMapping</span>(<span class="syntax-string">"/api/v1/library"</span>)
<span class="syntax-annotation">@CrossOrigin</span>(origins = <span class="syntax-string">"*"</span>)
<span class="syntax-keyword">public class</span> <span class="syntax-class">BookController</span> {

    <span class="syntax-annotation">@Autowired</span>
    <span class="syntax-keyword">private</span> <span class="syntax-class">BookService</span> bookService;

    <span class="syntax-annotation">@PostMapping</span>(<span class="syntax-string">"/borrow"</span>)
    <span class="syntax-keyword">public</span> <span class="syntax-class">ResponseEntity</span>&lt;<span class="syntax-class">ApiResponse</span>&gt; borrowBook(
            <span class="syntax-annotation">@Valid @RequestBody</span> <span class="syntax-class">BorrowRequest</span> req) {
        
        <span class="syntax-comment">// Atomic transaction with pessimistic / optimistic lock</span>
        <span class="syntax-class">BorrowRecord</span> record = bookService.processBorrow(req);
        <span class="syntax-keyword">return</span> <span class="syntax-class">ResponseEntity</span>.ok(
            <span class="syntax-keyword">new</span> <span class="syntax-class">ApiResponse</span>(<span class="syntax-string">"Book issued successfully"</span>, record)
        );
    }
}`,
    sql: `<span class="syntax-comment">-- Banking Transaction: Atomic Fund Transfer with Rollback</span>
<span class="syntax-keyword">DELIMITER</span> $$
<span class="syntax-keyword">CREATE PROCEDURE</span> <span class="syntax-method">sp_TransferFunds</span>(
    <span class="syntax-keyword">IN</span> p_from_acc <span class="syntax-class">BIGINT</span>,
    <span class="syntax-keyword">IN</span> p_to_acc <span class="syntax-class">BIGINT</span>,
    <span class="syntax-keyword">IN</span> p_amount <span class="syntax-class">DECIMAL</span>(<span class="syntax-number">12,2</span>)
)
<span class="syntax-keyword">BEGIN</span>
    <span class="syntax-keyword">DECLARE</span> v_balance <span class="syntax-class">DECIMAL</span>(<span class="syntax-number">12,2</span>);
    <span class="syntax-keyword">DECLARE EXIT HANDLER FOR SQLEXCEPTION</span>
    <span class="syntax-keyword">BEGIN</span>
        <span class="syntax-keyword">ROLLBACK</span>; <span class="syntax-comment">-- Guaranteed ACID consistency</span>
    <span class="syntax-keyword">END</span>;

    <span class="syntax-keyword">START TRANSACTION</span>;
    <span class="syntax-comment">-- Lock sender row to prevent concurrent race condition</span>
    <span class="syntax-keyword">SELECT</span> balance <span class="syntax-keyword">INTO</span> v_balance <span class="syntax-keyword">FROM</span> accounts 
    <span class="syntax-keyword">WHERE</span> account_no = p_from_acc <span class="syntax-keyword">FOR UPDATE</span>;
    
    <span class="syntax-keyword">IF</span> v_balance &gt;= p_amount <span class="syntax-keyword">THEN</span>
        <span class="syntax-keyword">UPDATE</span> accounts <span class="syntax-keyword">SET</span> balance = balance - p_amount <span class="syntax-keyword">WHERE</span> account_no = p_from_acc;
        <span class="syntax-keyword">UPDATE</span> accounts <span class="syntax-keyword">SET</span> balance = balance + p_amount <span class="syntax-keyword">WHERE</span> account_no = p_to_acc;
        <span class="syntax-keyword">COMMIT</span>;
    <span class="syntax-keyword">ELSE</span>
        <span class="syntax-keyword">SIGNAL SQLSTATE</span> <span class="syntax-string">'45000'</span> <span class="syntax-keyword">SET MESSAGE_TEXT</span> = <span class="syntax-string">'Insufficient Funds'</span>;
    <span class="syntax-keyword">END IF</span>;
<span class="syntax-keyword">END</span> $$
<span class="syntax-keyword">DELIMITER</span> ;`
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      if (codeSnippets[tab] && codeDisplay) {
        codeDisplay.innerHTML = codeSnippets[tab];
      }
    });
  });
}

/* ===================================================================
   3. PROJECTS SHOWCASE & FILTERING
   =================================================================== */
function initProjects() {
  const container = document.getElementById('projectsContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container || typeof projectsData === 'undefined') return;

  function renderProjects(filter = 'all') {
    container.innerHTML = '';

    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      const tagsHtml = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-card-header">
          <span class="project-cat-badge cat-${project.category}">${project.categoryName}</span>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Source Code">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-metrics-pill">
          <i class="fa-solid fa-chart-line"></i> ${project.metrics}
        </div>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <button class="project-cta-btn" onclick="openProjectModal('${project.id}')">
          <span>View Architecture & Details</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      `;

      container.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  // Initial render
  renderProjects('all');
}

/* Project Modal Open / Close */
window.openProjectModal = function(projectId) {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('projectModalContent');
  if (!modal || !modalContent || typeof projectsData === 'undefined') return;

  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const tagsHtml = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-box">
        <span class="project-cat-badge cat-${project.category}" style="margin-bottom: 8px; display: inline-block;">${project.categoryName} • ${project.badge}</span>
        <h3>${project.title}</h3>
      </div>
      <button class="modal-close-btn" onclick="closeProjectModal()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="modal-body">
      <div>
        <h4 class="modal-section-title"><i class="fa-solid fa-circle-info"></i> Project Overview</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem;">${project.description}</p>
      </div>

      <div>
        <h4 class="modal-section-title"><i class="fa-solid fa-sitemap"></i> System Architecture & Execution Flow</h4>
        <pre class="arch-box"><code>${project.architecture}</code></pre>
      </div>

      <div>
        <h4 class="modal-section-title"><i class="fa-solid fa-star"></i> Engineering Highlights</h4>
        <ul class="exp-bullets" style="margin-bottom: 0;">
          ${highlightsHtml}
        </ul>
      </div>

      <div>
        <h4 class="modal-section-title"><i class="fa-solid fa-database"></i> Database & Schema Highlights</h4>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px 18px; border-radius: 8px; font-family: var(--font-mono); font-size: 0.85rem; color: #a5f3fc;">
          ${project.schemaHighlights}
        </div>
      </div>

      <div>
        <h4 class="modal-section-title"><i class="fa-solid fa-shield-halved"></i> Engineering Challenge & Concurrency Solution</h4>
        <p style="color: #cbd5e1; font-size: 0.92rem; background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--accent-emerald); padding: 12px 16px; border-radius: 4px;">
          ${project.challengesSolved}
        </p>
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08);">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <i class="fa-brands fa-github"></i> View GitHub Repo
        </a>
        <a href="#contact" onclick="closeProjectModal()" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-paper-plane"></i> Inquire About Similar Project
        </a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const projectModal = document.getElementById('projectModal');
  const resumeModal = document.getElementById('resumeModal');
  if (e.target === projectModal) {
    closeProjectModal();
  }
  if (e.target === resumeModal) {
    closeResumeModal();
  }
});

/* ===================================================================
   4. INTERACTIVE TERMINAL
   =================================================================== */
function initTerminal() {
  const terminalBody = document.getElementById('terminalBody');
  const terminalInput = document.getElementById('terminalInput');
  const quickPills = document.querySelectorAll('.terminal-cmd-pill');

  if (!terminalBody || !terminalInput) return;

  const commandHandlers = {
    help: () => `Available commands:
  • <span class="text-emerald">about</span>       - Brief summary of Ashwinth K
  • <span class="text-emerald">stackly</span>     - Current Java Full Stack Developer role at Stackly
  • <span class="text-emerald">skills</span>      - Technical arsenal (Java, Spring Boot, MySQL, etc.)
  • <span class="text-emerald">projects</span>    - List all 13+ backend & database projects
  • <span class="text-emerald">achieve</span>     - Hackathons & honors (Top Brains Hackathon 10th place)
  • <span class="text-emerald">github</span>      - GitHub profile & Java_Stackly repository
  • <span class="text-emerald">freelance</span>   - Services & client offerings
  • <span class="text-emerald">contact</span>     - Direct contact info & email
  • <span class="text-emerald">clear</span>       - Clear the terminal screen`,

    about: () => `Ashwinth K | Java Full Stack Developer
Location: Chennai, India | Current Role: Stackly (May 2026 - Present)
Education: B.E. Computer Science, Salem College of Engg & Tech (CGPA: 8.3 / 83%)
Achievements: 10th Place in Top Brains Hackathon (Advanced Java Problem Solving)
GitHub: <a href="https://github.com/Ashwinth-k-3018" target="_blank" class="text-emerald">github.com/Ashwinth-k-3018</a>
Focus: Building clean Spring Boot REST APIs, relational MySQL databases, and responsive web applications.`,

    achieve: () => `Key Achievements & Hackathons:
  🏆 <span class="text-emerald">Top Brains Hackathon &ndash; 10th Place Finalist</span>:
     Secured 10th place by solving complex algorithmic challenges in Java under strict time limits.
  🌟 <span class="text-indigo">Gen AI Connect Summit & Expo</span>:
     Represented StartNet Ventures; explored AI tools (HeyGen) and networked with engineering professionals.
  🎨 <span class="text-cyan">Expertise in Website Designing</span>:
     Certified by Connect Infosystem for responsive web layout design and clean CSS structuring.`,

    github: () => `GitHub Repositories:
  • GitHub Profile : <a href="https://github.com/Ashwinth-k-3018" target="_blank" class="text-emerald">https://github.com/Ashwinth-k-3018</a>
  • Java & MySQL Repo: <a href="https://github.com/Ashwinth-k-3018/Java_Stackly" target="_blank" class="text-indigo">https://github.com/Ashwinth-k-3018/Java_Stackly</a>`,

    stackly: () => `[CURRENT ROLE] Java Full Stack Developer @ Stackly
Duration: May 2026 – Present
Location: Chennai, India
Key Ownership:
  • Develop and maintain RESTful APIs using Spring Boot, Spring Data JPA, and MySQL.
  • Design database schemas, write stored procedures, and add B-Tree indexes to speed up queries.
  • Implement secure JWT token authentication and role-based permissions.
  • Collaborate in agile sprints with frontend engineers and QA teammates.`,

    skills: () => `Technical Arsenal:
  [Backend]  : Java (8/11/17/21), Spring Boot, Spring Data JPA, Hibernate, JDBC, Servlets, JSP
  [Database] : MySQL, 3NF Normalization, Indexing, Stored Procedures, Triggers, Views, ACID
  [Concepts] : OOPs, Collections Framework, Multithreading, Exception Handling, MVC
  [Web/UI]   : HTML5, CSS3, JavaScript (ES6+), Responsive Design, Bootstrap
  [Tools]    : Git, GitHub, Maven, Postman, Eclipse, VS Code`,

    projects: () => `Showcase Projects (13+ Total):
  1. Libraries Book Management System [Spring Boot, JPA, MySQL]
  2. Vehicle Rent Management System [Spring Boot, Spring Security, JWT]
  3. Mobile Recharge Application [Spring Boot, Transaction Mgmt, MySQL]
  4. Banking Management System [Java, JDBC, ACID Transactions]
  5. Online Food Ordering System [JDBC, Servlets, MySQL]
  6. Library Management System (MVC) [Java, JDBC, Servlets]
  7. Hospital Appointment System [Core Java, Multithreading, Collections]
  8. Student Management System [Core Java, File I/O Serialization]
  9. Banking Scenario DB Architecture [MySQL Stored Procedures, Triggers]
  10. Customer Order Management DB [MySQL Joins, 3NF, Indexing]
  11. Hotel Management DB [MySQL Room Inventory, Stored Functions]
  12. Railway Reservation System DB [MySQL Route Graph & Berth Quotas]
  13. Modern Responsive E-Commerce Platform [HTML5, CSS3, JavaScript]`,

    freelance: () => `Freelance Services Offered:
  • Spring Boot REST API Development (Validation, JWT auth, Swagger docs)
  • Database Design & MySQL Query Optimization (Schema normalization & index tuning)
  • Full Stack Web MVP Development (Responsive frontend + Spring Boot backend)
  • Java Bug Fixing & Code Refactoring (Connection pool leaks & concurrency issues)
  Ready to talk? Type 'contact' or email ashwinthkumar003@gmail.com!`,

    linkedin: () => `LinkedIn Profile:
  <a href="https://www.linkedin.com/in/ashwinth-k-91616529b" target="_blank" class="text-emerald">https://www.linkedin.com/in/ashwinth-k-91616529b</a>`,

    contact: () => `Let's Connect!
  • Gmail   : <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwinthkumar003@gmail.com" target="_blank" class="text-emerald">ashwinthkumar003@gmail.com (Open in Gmail)</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/ashwinth-k-91616529b" target="_blank" class="text-cyan">linkedin.com/in/ashwinth-k-91616529b</a>
  • Phone   : <a href="tel:+917339053147" class="text-indigo">+91 7339053147</a>
  • Location: Chennai, Tamil Nadu, India
  • Response: Within 24 hours`,

    hire: () => `I'd love to connect! You can reach me directly at ashwinthkumar003@gmail.com, via LinkedIn (linkedin.com/in/ashwinth-k-91616529b), or on WhatsApp at +91 7339053147 to discuss full-time roles or freelance projects.`,

    clear: () => '__CLEAR__'
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      terminalBody.innerHTML = `
        <div class="terminal-line"><span class="terminal-prompt">ashwinth@stackly-dev:~$</span> terminal cleared. Type <span class="text-emerald">help</span> for commands.</div>
      `;
      return;
    }

    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span class="terminal-prompt">ashwinth@stackly-dev:~$</span> ${escapeHtml(rawCmd)}`;
    terminalBody.appendChild(commandLine);

    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line';
    responseLine.style.color = '#94a3b8';
    responseLine.style.marginBottom = '12px';

    if (commandHandlers[cmd]) {
      const output = commandHandlers[cmd]();
      responseLine.innerHTML = output.replace(/\n/g, '<br>');
    } else {
      responseLine.innerHTML = `command not found: "${escapeHtml(rawCmd)}". Type <span class="text-emerald">'help'</span> for available commands.`;
    }

    terminalBody.appendChild(responseLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

/* ===================================================================
   5. WORKING CONTACT FORM (Sends directly to ashwinthkumar003@gmail.com)
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');
  const formStatus = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim() || 'Portfolio Contact Inquiry';
    const inquiryType = document.getElementById('contactInquiryType').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all required fields.');
      return;
    }

    // Set UI loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending Message...';
    btnSpinner.style.display = 'inline-block';

    try {
      // Use FormSubmit AJAX API targeting ashwinthkumar003@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/ashwinthkumar003@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Portfolio Message from ${name}: [${inquiryType}] ${subject}`,
          _template: 'table',
          _captcha: 'false',
          name: name,
          email: email,
          inquiry_type: inquiryType,
          subject: subject,
          message: message,
          submitted_at: new Date().toLocaleString()
        })
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        form.reset();
        showToast('🎉 Message delivered directly to Ashwinth\'s inbox! Expect a reply within 24 hours.');
        if (formStatus) {
          formStatus.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-emerald); padding: 12px 16px; border-radius: 8px; color: #a7f3d0; font-size: 0.9rem;">
              <i class="fa-solid fa-check-circle"></i> <strong>Message Sent Successfully!</strong> Your note has been delivered to <strong>ashwinthkumar003@gmail.com</strong>.
            </div>
          `;
        }
      } else {
        throw new Error('Server returned unsuccessful response');
      }
    } catch (error) {
      console.warn('Form submission fallback activated:', error);
      // Fallback: Trigger direct Gmail web compose with form contents
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ashwinthkumar003@gmail.com&su=${encodeURIComponent(`Portfolio Inquiry from ${name}: [${inquiryType}] ${subject}`)}&body=${encodeURIComponent(`Hi Ashwinth,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`)}`;
      const mailtoUrl = `mailto:ashwinthkumar003@gmail.com?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}: ${subject}`)}&body=${encodeURIComponent(`Hi Ashwinth,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`)}`;
      
      showToast('📨 Opening Gmail in a new tab to send directly to ashwinthkumar003@gmail.com...');
      window.open(gmailUrl, '_blank');

      if (formStatus) {
        formStatus.innerHTML = `
          <div style="background: rgba(99, 102, 241, 0.15); border: 1px solid var(--accent-indigo); padding: 12px 16px; border-radius: 8px; color: #c7d2fe; font-size: 0.9rem;">
            <i class="fa-solid fa-envelope-open-text"></i> If Gmail didn't open automatically: <a href="${gmailUrl}" target="_blank" style="color: #ffffff; text-decoration: underline; font-weight: bold;">Open in Gmail</a> or <a href="${mailtoUrl}" style="color: #cbd5e1; text-decoration: underline;">Use Default Mail App</a>.
          </div>
        `;
      }
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message to Ashwinth';
      btnSpinner.style.display = 'none';
    }
  });
}

/* ===================================================================
   6. RESUME MODAL & PRINTING
   =================================================================== */
function initResumeModal() {
  window.openResumeModal = function() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeResumeModal = function() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  window.printResume = function() {
    window.open('resume.html', '_blank');
  };
}

/* ===================================================================
   7. CLIPBOARD & TOAST UTILITY
   =================================================================== */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'ashwinthkumar003@gmail.com';
      const originalHTML = btn.innerHTML;

      navigator.clipboard.writeText(email).then(() => {
        showToast('📋 Email copied to clipboard: ashwinthkumar003@gmail.com');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.style.borderColor = 'var(--accent-emerald)';
        btn.style.color = 'var(--accent-emerald-light)';
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2200);
      }).catch(() => {
        showToast('Email: ashwinthkumar003@gmail.com');
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-bell text-emerald"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
