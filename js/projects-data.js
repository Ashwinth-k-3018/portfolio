/**
 * Ashwinth K - Comprehensive Projects Data
 * Detailed real-world projects covering Spring Boot, JDBC, Core Java, MySQL Architecture, and Frontend.
 */

const projectsData = [
  // ==========================================
  // SPRING BOOT BACKEND & FULL STACK PROJECTS
  // ==========================================
  {
    id: "spring-library-mgmt",
    title: "Libraries Book Management System",
    category: "springboot",
    categoryName: "Spring Boot",
    badge: "Enterprise Backend",
    summary: "A production-grade library management backend with automated book inventory tracking, fine calculations, borrowing lifecycle, and RESTful APIs.",
    tags: ["Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "Swagger / OpenAPI"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "40% faster book search • Zero concurrency conflicts • 100% RESTful compliance",
    description: "Architected a scalable enterprise-level Library Book Management System using Spring Boot and Spring Data JPA. Designed to automate book cataloging, member subscriptions, automated overdue fine calculation, and inventory replenishment for educational institutions.",
    architecture: `Client (Web / Postman) 
      └──> REST Controller Layer (@RestController)
            └──> Service Business Layer (@Service with @Transactional)
                  └──> Spring Data JPA Repository (@Repository)
                        └──> Hibernate ORM & Connection Pool (HikariCP)
                              └──> MySQL Database Engine (InnoDB)`,
    highlights: [
      "Engineered clean RESTful endpoints following standard HTTP verbs, status codes, and DTO patterns.",
      "Implemented Spring Data JPA with custom JPQL queries and derived methods for dynamic multi-criteria book searching.",
      "Configured HikariCP connection pooling and MySQL InnoDB engine with transactional isolation (@Transactional) to eliminate race conditions during concurrent book checkouts.",
      "Built global exception handling using @ControllerAdvice and custom error responses for graceful failure recovery.",
      "Integrated Swagger / OpenAPI documentation for interactive endpoint testing and third-party integration."
    ],
    schemaHighlights: "Tables: books (id, isbn, title, author, category, available_copies), members (id, member_code, name, email, membership_status), borrow_records (id, book_id, member_id, issue_date, due_date, return_date, fine_amount).",
    challengesSolved: "Resolved race conditions where multiple patrons attempted to borrow the last available copy simultaneously by utilizing optimistic locking (@Version) and transactional rollback on stock depletion."
  },
  {
    id: "spring-vehicle-rent",
    title: "Vehicle Rent Management System",
    category: "springboot",
    categoryName: "Spring Boot",
    badge: "Microservice / Web App",
    summary: "Full-cycle vehicle leasing & rental engine with role-based access control (Admin/Customer), automated billing calculation, and vehicle availability tracking.",
    tags: ["Spring Boot", "Spring Security", "JWT Authentication", "MySQL", "Hibernate", "REST APIs"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Role-based Security • Automated Rent Calculations • Instant Fleet Analytics",
    description: "Developed a comprehensive Vehicle Rental Management System providing complete lifecycle management for car/bike rental businesses. Includes customer reservation workflows, fleet inventory tracking, dynamic tariff calculation based on duration/mileage, and secure administrative controls.",
    architecture: `User / Admin Request 
      └──> Spring Security Filter Chain (JWT Token Verification)
            └──> Auth & Vehicle Controllers
                  └──> Booking & Billing Service Engine
                        └──> JPA / Hibernate ORM Layer
                              └──> MySQL Relational Database`,
    highlights: [
      "Implemented robust authentication & authorization using Spring Security and stateless JWT (JSON Web Tokens) with distinct roles (ROLE_ADMIN, ROLE_CUSTOMER).",
      "Created an automated pricing calculation engine supporting daily, weekly, and distance-based rental models with late return penalties.",
      "Designed dynamic vehicle status state machine (AVAILABLE -> RESERVED -> ON_RENT -> UNDER_MAINTENANCE) to prevent duplicate bookings.",
      "Developed comprehensive administrative analytics endpoints for fleet revenue, utilization rates, and service scheduling.",
      "Applied input validation with Hibernate Validator (@Valid, @NotNull, @Pattern) to ensure data sanitization."
    ],
    schemaHighlights: "Tables: vehicles (id, reg_number, brand, model, daily_rate, status), users (id, name, email, password_hash, role), rentals (id, vehicle_id, user_id, start_date, end_date, total_amount, payment_status).",
    challengesSolved: "Implemented automated overlap detection algorithms to prevent overlapping booking dates for the same vehicle across different customer requests."
  },
  {
    id: "spring-mobile-recharge",
    title: "Mobile Recharge Application",
    category: "springboot",
    categoryName: "Spring Boot",
    badge: "Fintech Simulation",
    summary: "High-throughput mobile recharge & telecom plan processing engine featuring transaction state tracking, plan filtering, and simulated payment gateway reconciliation.",
    tags: ["Spring Boot", "REST APIs", "Transaction Management", "MySQL", "ACID Compliance", "Postman"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "100% ACID Guaranteed • Instant Plan Filtering • Robust Audit Logging",
    description: "Engineered a reliable telecom recharge and bill payment backend platform. The system handles operator selection, prepaid/postpaid plan lookups, transaction processing with idempotency keys, and instant receipt generation.",
    architecture: `Mobile / Web Client 
      └──> API Gateway / Recharge Controller
            └──> Plan Management & Transaction Service
                  └──> Simulated Payment Gateway Callback Handler
                        └──> Transaction Audit Logger & JPA Repo
                              └──> MySQL Transaction Ledger`,
    highlights: [
      "Engineered atomic transaction handling using Spring's declarative @Transactional boundaries to prevent partial charges on simulated gateway failures.",
      "Structured telecom catalog API supporting multi-operator plans (Talktime, 5G Data, Annual, OTT Bundles) with sub-second response times.",
      "Implemented idempotency key mechanisms to prevent accidental double-recharges when network timeouts occur.",
      "Created transactional audit log history storing request payloads, response timestamps, and payment statuses for compliance and troubleshooting.",
      "Built mock webhook handlers simulating asynchronous payment processor callbacks (SUCCESS / PENDING / FAILED)."
    ],
    schemaHighlights: "Tables: operators (id, operator_name, circle), recharge_plans (id, operator_id, plan_type, amount, validity_days, benefits), transactions (txn_id, mobile_number, plan_id, amount, status, timestamp, ref_number).",
    challengesSolved: "Ensured transactional integrity during edge-case simulated payment dropouts by rolling back transaction statuses and sending descriptive error codes to clients."
  },

  // ==========================================
  // JDBC & ADVANCED JAVA PROJECTS
  // ==========================================
  {
    id: "jdbc-banking-mgmt",
    title: "Banking Management System",
    category: "jdbc",
    categoryName: "JDBC & Advanced Java",
    badge: "Core Banking Engine",
    summary: "Secure banking application built with Java JDBC and MySQL featuring ACID-compliant fund transfers, PIN hashing, account ledgering, and statement generation.",
    tags: ["Java", "JDBC", "MySQL", "Transaction Management", "ACID Properties", "PreparedStatements"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Zero SQL Injection Vulnerabilities • ACID Fund Transfers • Automated Audit Logs",
    description: "Developed an enterprise-style console and desktop banking backend system utilizing Java Database Connectivity (JDBC) connected directly to MySQL. Implemented core banking workflows including customer onboarding, deposit/withdrawal with balance checks, inter-bank fund transfers, and transactional account histories.",
    architecture: `Application Interface (CLI / GUI)
      └──> Banking Service Controller
            └──> JDBC Driver (com.mysql.cj.jdbc.Driver)
                  └──> Connection Manager (Singleton Pattern)
                        └──> PreparedStatement Queries with Manual Commit Control
                              └──> MySQL Database Engine (InnoDB Engine)`,
    highlights: [
      "Strictly prevented SQL Injection vulnerabilities across all forms and queries by exclusively using parameterized PreparedStatements.",
      "Implemented manual JDBC transaction management (`conn.setAutoCommit(false)`, `conn.commit()`, and `conn.rollback()`) to guarantee atomicity during account-to-account fund transfers.",
      "Enforced business validations including minimum balance thresholds, account status checks (Active/Suspended), and daily transfer limits.",
      "Applied SHA-256 password/PIN hashing to ensure sensitive customer credentials are never stored in plaintext.",
      "Generated detailed mini-statements and balance reports using MySQL cursor-style result sets."
    ],
    schemaHighlights: "Tables: accounts (account_no, holder_name, balance, pin_hash, status, created_at), transactions (txn_id, from_acc, to_acc, amount, txn_type, txn_time, balance_after).",
    challengesSolved: "Protected balance consistency during concurrent balance deductions by introducing row-level database locking (`SELECT ... FOR UPDATE`) in raw SQL transactions."
  },
  {
    id: "jdbc-food-ordering",
    title: "Online Food Ordering System",
    category: "jdbc",
    categoryName: "JDBC & Servlets",
    badge: "Full Stack / Web MVC",
    summary: "Restaurant ordering portal handling dynamic digital menus, cart persistence, real-time bill generation, and kitchen order status tracking.",
    tags: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "Session Tracking"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Session-based Cart Management • Multi-table Order Tracking • Live Invoice Generator",
    description: "Created an interactive food ordering platform connecting customers with restaurant menus. Users can browse categorized dishes, customize order quantities, store items in a persistent session cart, and checkout with automated tax, discounts, and itemized billing.",
    architecture: `Browser Client 
      └──> Java Servlets (Controller)
            └──> JSP Views (Presentation Layer with JSTL)
                  └──> Business Logic & JDBC DAO Layer
                        └──> MySQL Database`,
    highlights: [
      "Implemented MVC (Model-View-Controller) architecture cleanly separating presentation (JSP), routing/logic (Servlets), and persistence (JDBC DAOs).",
      "Handled dynamic shopping cart state using HTTP Session management (`HttpSession`), ensuring seamless multi-page browsing without losing cart contents.",
      "Automated total billing with configurable GST percentages, delivery fees, and discount coupon validations.",
      "Designed order fulfillment pipeline tracking stages from PLACED -> PREPARING -> OUT_FOR_DELIVERY -> DELIVERED.",
      "Used JDBC Batch Processing (`addBatch()`, `executeBatch()`) for inserting bulk order items efficiently in a single round-trip."
    ],
    schemaHighlights: "Tables: menu_items (item_id, name, category, price, is_available), customers (cust_id, name, phone, address), orders (order_id, cust_id, total_amount, order_status, ordered_at), order_items (id, order_id, item_id, quantity, subtotal).",
    challengesSolved: "Optimized database write throughput when an order has dozens of items by switching from individual queries to JDBC batch execution."
  },
  {
    id: "jdbc-library-mvc",
    title: "Library Management System (MVC)",
    category: "jdbc",
    categoryName: "JDBC & Servlets",
    badge: "Academic & Enterprise",
    summary: "Full-stack web application designed with MVC pattern using Java Servlets, JDBC, and MySQL for end-to-end library operation management.",
    tags: ["Java", "Servlets", "JDBC", "MySQL", "HTML/CSS", "MVC Architecture"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Clean MVC Separation • Optimized SQL Joins • Automated Return Alerts",
    description: "Developed a full-stack library management web portal built as part of the advanced Java curriculum at QSpiders. Automates student registration, book lending, catalog searching, and librarian control desks using pure Java Servlets and JDBC.",
    architecture: `JSP Front-End (Forms & Tables)
      └──> Servlet Dispatchers (doGet / doPost)
            └──> DAO Pattern (BookDAO, StudentDAO)
                  └──> JDBC Database Queries with Joins
                        └──> MySQL Database`,
    highlights: [
      "Structured with strict MVC design pattern ensuring maintainable code and zero business logic inside views.",
      "Implemented comprehensive CRUD operations for books, authors, categories, and student memberships.",
      "Formulated complex SQL queries utilizing INNER and LEFT JOINs to fetch student borrowing history and overdue logs in a single query.",
      "Created role-based security filters in Servlets to restrict administrative functions to authorized staff."
    ],
    schemaHighlights: "Tables: books, students, book_issues, categories with referential foreign key cascades.",
    challengesSolved: "Eliminated repetitive database connection overhead by structuring a reusable DatabaseConnectionFactory utility class."
  },

  // ==========================================
  // CORE JAVA PROJECTS
  // ==========================================
  {
    id: "core-hospital-appointment",
    title: "Hospital Appointment System",
    category: "corejava",
    categoryName: "Core Java",
    badge: "Object-Oriented Architecture",
    summary: "A healthcare scheduling application implementing advanced OOP principles, Java Collections, multithreading for doctor queue management, and custom exception handling.",
    tags: ["Core Java", "OOPs", "Collections Framework", "Multithreading", "Custom Exceptions"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Robust Exception Handling • Priority Queue Dispatching • Thread-Safe Operations",
    description: "Built an object-oriented Hospital Appointment and Patient Queue Management system in Core Java. Simulates realistic hospital operational workflows including doctor consultation slots, emergency triage queueing, patient medical history tracking, and automated consultation scheduling.",
    architecture: `Console / GUI Layer
      └──> Hospital Controller
            └──> Doctor & Appointment Managers
                  └──> Thread-safe Collections (PriorityQueue, ConcurrentHashMap)
                        └──> Data File Persistence / In-Memory Store`,
    highlights: [
      "Implemented priority-based patient queueing using Java `PriorityQueue` with custom `Comparator` to prioritize emergency triage cases over routine checkups.",
      "Applied core OOP concepts (Encapsulation, Polymorphism, Inheritance, Abstraction) for Doctor, Patient, Appointment, and MedicalRecord models.",
      "Constructed a comprehensive custom exception hierarchy (`DoctorUnavailableException`, `SlotAlreadyBookedException`, `InvalidPatientDataException`).",
      "Utilized Java Multithreading (`ExecutorService`, `synchronized` blocks) to simulate simultaneous patient booking calls without race hazards.",
      "Used Collections Framework extensively (HashMaps, TreeSets, LinkedLists) for optimal lookup and sorting of doctors by specialization."
    ],
    schemaHighlights: "Data Structures: PriorityQueue<Patient> for emergency prioritization, Map<DoctorId, List<Slot>> for schedule booking.",
    challengesSolved: "Designed a collision-free time slot algorithm that prevents overlapping appointments for the same doctor across concurrent threads."
  },
  {
    id: "core-student-mgmt",
    title: "Student Management System",
    category: "corejava",
    categoryName: "Core Java",
    badge: "Core Software Engineering",
    summary: "Comprehensive academic records application showcasing file I/O serialization, sorting algorithms, and modular OOP architecture in Core Java.",
    tags: ["Core Java", "File I/O", "Serialization", "Data Structures", "OOPs"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Persistent Storage without DB • Multi-factor Sorting • Fast Search Lookups",
    description: "Constructed an offline academic management system that tracks student profiles, semester grade point averages (GPA), attendance records, and branch allocations. Employs Java Object Serialization for reliable disk persistence without requiring an external database.",
    architecture: `Command Interface
      └──> Student Service Handler
            └──> Collection Repository (ArrayList, HashMap)
                  └──> ObjectOutputStream / ObjectInputStream
                        └──> Encrypted/Serialized Binary Flat Files`,
    highlights: [
      "Persisted student data securely to disk using Java Object Streams (`Serializable` interface) ensuring state preservation between application restarts.",
      "Implemented flexible multi-attribute sorting (by Rank, CGPA, Roll Number, Name) using `Comparable` and `Comparator` interfaces.",
      "Built rigorous validation rules for email formats, phone numbers, and percentage boundaries using regular expressions (`Pattern` and `Matcher`).",
      "Architected clean modular packages (`model`, `service`, `util`, `exception`) adhering to industry coding conventions."
    ],
    schemaHighlights: "In-memory indexed records with binary serialized persistence file storage.",
    challengesSolved: "Ensured backwards compatibility in file deserialization by declaring explicit `serialVersionUID` values across model updates."
  },

  // ==========================================
  // MYSQL & DATABASE ARCHITECTURE PROJECTS
  // ==========================================
  {
    id: "db-banking-scenario",
    title: "Banking Scenario Database Architecture",
    category: "mysql",
    categoryName: "MySQL & Database Architecture",
    badge: "Enterprise Schema Design",
    summary: "Production-ready relational database architecture featuring 3NF normalization, stored procedures for atomic transfers, automated audit triggers, and indexing.",
    tags: ["MySQL", "Stored Procedures", "Triggers", "Indexing", "ACID Compliance", "Database Security"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "3NF Normalization • Sub-10ms Queries with B-Tree Indexes • Automated Audit Triggers",
    description: "Designed and engineered an enterprise-grade relational database architecture specifically modeled for a high-volume commercial banking environment. The schema guarantees 100% ACID compliance, zero data redundancy, audit trail logging, and protection against transactional deadlocks.",
    architecture: `Client App (Java / Backend)
      └──> MySQL 8.0 Server Instance
            └──> Stored Procedure Interface (sp_fund_transfer, sp_calculate_interest)
                  └──> Trigger Engine (trg_audit_balance_change, trg_prevent_negative_balance)
                        └──> InnoDB Clustered & Secondary B-Tree Indexes
                              └──> Encrypted Persistent Tablespaces`,
    highlights: [
      "Engineered comprehensive 3NF normalized schema with foreign key constraints (`ON DELETE RESTRICT`) to protect referential integrity.",
      "Authored optimized MySQL Stored Procedures (e.g. `sp_TransferFunds`) encapsulating balance verification, atomic deduction, credit, and ledger recording in a single compiled routine.",
      "Constructed BEFORE and AFTER triggers on account tables to automatically record balance fluctuations into an immutable audit table.",
      "Implemented clustered primary indexes and composite secondary indexes on `(account_number, transaction_date)` reducing historical statement query times by over 80%.",
      "Created secure database VIEWS isolating sensitive customer data (masking account numbers and sensitive personal identifiers) for front-desk personnel."
    ],
    schemaHighlights: "Entities: Customers, Accounts, Transactions, Branches, AuditLedger, LoanDisbursements, KYCRecords with rigorous constraint checks.",
    challengesSolved: "Eliminated deadlock risks during simultaneous reciprocal transfers between two accounts by enforcing sorted account locking order inside the stored procedure."
  },
  {
    id: "db-customer-order",
    title: "Customer Order Management Database",
    category: "mysql",
    categoryName: "MySQL & Database Architecture",
    badge: "E-Commerce Data Engine",
    summary: "High-scale e-commerce database model supporting multi-vendor inventory, dynamic price books, hierarchical categories, and complex analytical sales reports.",
    tags: ["MySQL", "Complex Joins", "Aggregation", "Indexing", "ER Modeling", "3NF Normalization"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Complex Multi-Table Joins • Real-Time Inventory Control • Monthly Revenue Reports",
    description: "Architected a scalable relational database schema supporting an enterprise customer ordering and fulfillment workflow. Designed to handle thousands of concurrent product listings, dynamic promotions, order line items, shipping logistics, and customer reviews.",
    architecture: `Application Query Layer
      └──> View & Query Optimizer
            └──> Multi-Table Join Engine (5+ table INNER / LEFT JOINs)
                  └──> Group By & Window Aggregation Functions
                        └──> Partitioned Storage Tables`,
    highlights: [
      "Modeled robust ER diagram handling Many-to-Many relationships between Products and Orders via a normalized `Order_Items` associative entity.",
      "Formulated complex analytical queries employing `GROUP BY`, `HAVING`, and window functions (`DENSE_RANK()`, `SUM() OVER`) to identify top-selling products and regional revenue.",
      "Implemented inventory reservation triggers that decrement warehouse stock immediately upon order placement and replenish stock if an order is cancelled.",
      "Applied composite B-Tree indexing on `(customer_id, order_date)` for fast pagination on customer order history portals."
    ],
    schemaHighlights: "Entities: Customers, Orders, Order_Items, Products, Categories, Warehouses, Shipments, Payments.",
    challengesSolved: "Solved slow report generation queries across 100k+ mock order rows by rewriting subqueries into optimized JOINs with proper index coverage."
  },
  {
    id: "db-hotel-mgmt",
    title: "Hotel Management Database",
    category: "mysql",
    categoryName: "MySQL & Database Architecture",
    badge: "Hospitality ERP Schema",
    summary: "Relational database schema designed for hotel room booking, amenity billing, seasonal pricing rules, and housekeeping status tracking.",
    tags: ["MySQL", "Relational Modeling", "Date Range Queries", "Foreign Keys", "Stored Functions"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Zero Double-Booking Guarantee • Dynamic Season Tariff • Automated Check-Out Invoicing",
    description: "Designed a comprehensive database schema powering hotel operations. Facilitates real-time room availability lookups across overlapping check-in/check-out dates, guest folio tracking, restaurant billing consolidation, and housekeeping room readiness states.",
    architecture: `Hotel Booking Engine 
      └──> Room Availability Query Engine
            └──> Date Intersection Functions (CheckIn / CheckOut overlap prevention)
                  └──> Consolidated Guest Billing Views
                        └──> MySQL Database`,
    highlights: [
      "Engineered date-range intersection queries using SQL logic (`NOT (end_date <= check_in OR start_date >= check_out)`) to guarantee zero double-bookings.",
      "Constructed modular billing architecture that consolidates room charges, room service, laundry, and restaurant expenses into a single master checkout invoice.",
      "Formulated MySQL stored functions to compute dynamic tariffs based on weekday/weekend rates and high-demand seasonal multipliers.",
      "Implemented foreign key cascade strategies ensuring child records remain consistent while maintaining guest history integrity."
    ],
    schemaHighlights: "Entities: Guests, Rooms, RoomTypes, Bookings, GuestFolio, ExtraServices, Invoices.",
    challengesSolved: "Optimized room search queries during peak reservation seasons by indexing `(room_type_id, status)` and booking date intervals."
  },
  {
    id: "db-railway-reservation",
    title: "Railway Reservation System Database",
    category: "mysql",
    categoryName: "MySQL & Database Architecture",
    badge: "Mass Transit Data Model",
    summary: "High-concurrency railway reservation schema handling train schedules, multi-stop routes, berth quota matrices (RAC/WL), and PNR status tracking.",
    tags: ["MySQL", "Concurrency Handling", "Complex Schema", "Route Mapping", "PNR Tracking"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Complex Route & Station Graphs • Berth Quota Logic • Instant PNR Status Resolution",
    description: "Engineered an advanced relational schema modeling the intricacies of a national railway reservation system. Accounts for multi-stop train schedules, intermediate station distance calculations, quota allocations (General, Tatkal, Ladies), RAC/Waiting list progression, and unique 10-digit PNR ticket generation.",
    architecture: `Transit Booking API 
      └──> Route & Station Distance Calculator
            └──> Berth Allocation Engine (Available -> RAC -> Waiting List)
                  └──> Transactional Booking Queries
                        └──> MySQL High-Availability Database`,
    highlights: [
      "Designed station-to-station route sequencing using distance milestones to dynamically calculate passenger fares between any source and destination station.",
      "Structured berth inventory tables supporting multi-coach classes (1A, 2A, 3A, Sleeper) with dynamic berth preferences (Lower, Middle, Upper, Side Lower).",
      "Created automated ticket confirmation triggers that promote passengers from Waiting List to RAC and RAC to Confirmed upon passenger cancellations.",
      "Optimized PNR status lookups to execute in sub-millisecond speeds using indexed hash-based primary lookups."
    ],
    schemaHighlights: "Entities: Trains, Stations, Train_Schedule, Coaches, Berths, Passengers, Tickets (PNR), QuotaAllocations, FareRules.",
    challengesSolved: "Modeled intermediate station reservation logic so that a single seat can be booked by passenger A between Station 1-3, and passenger B between Station 3-5 without collisions."
  },

  // ==========================================
  // WEB & FRONTEND PROJECTS
  // ==========================================
  {
    id: "web-ecommerce-platform",
    title: "Modern Responsive E-Commerce Platform",
    category: "frontend",
    categoryName: "Frontend & Full Stack",
    badge: "Interactive Web App",
    summary: "Fully responsive, cross-device modern e-commerce web application featuring client-side cart management, product filtering, user auth UI, and checkout flows.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "LocalStorage", "UI/UX"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018",
    liveDemo: "#",
    metrics: "100% Mobile & Tablet Responsive • Instant Client Cart • Zero Framework Bloat",
    description: "Designed and engineered a high-converting, modern e-commerce storefront from the ground up using semantic HTML5, modern CSS3 (Flexbox/Grid, custom properties, responsive media queries), and vanilla ES6+ JavaScript. Features modular components, toast notifications, search filtering, and state persistence with LocalStorage.",
    architecture: `User Device (Mobile / Tablet / Desktop)
      └──> Responsive Viewport Layout (CSS Grid & Flexbox)
            └──> ES6 JavaScript Module Layer (Cart Controller, Filter Engine)
                  └──> Browser LocalStorage & SessionStorage
                        └──> Mock Product Catalog & REST API Ready`,
    highlights: [
      "Crafted 100% responsive fluid UI providing seamless user experiences across mobile devices (320px+), tablets (iPad/Android), laptops, and 4K displays.",
      "Implemented dynamic client-side shopping cart with real-time quantity increment/decrement, price aggregation, and persistence across page reloads via `localStorage`.",
      "Built multi-criteria instant product filters by category, price range, and search keyword without page reloads.",
      "Engineered animated modal checkout workflows, coupon code validators, and accessible form inputs with inline error messaging."
    ],
    schemaHighlights: "Front-end state architecture managing products array, active filters, and synchronized cart storage.",
    challengesSolved: "Achieved flawless 60 FPS animations and instant page load speeds by keeping the codebase dependency-free with pure CSS and vanilla JavaScript."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
