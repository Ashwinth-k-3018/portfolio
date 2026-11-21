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
    summary: "A library management backend with automated book inventory tracking, fine calculations, borrowing lifecycle, and RESTful APIs.",
    tags: ["Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "Swagger / OpenAPI"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Fast Book Search • Concurrency Collision Prevention • RESTful APIs",
    description: "A Library Book Management System built with Spring Boot and Spring Data JPA. Designed to automate book cataloging, member borrowing, overdue fine calculation, and inventory updates.",
    architecture: `Client (Web / Postman) 
      └──> REST Controller Layer (@RestController)
            └──> Service Business Layer (@Service with @Transactional)
                  └──> Spring Data JPA Repository (@Repository)
                        └──> Hibernate ORM & Connection Pool (HikariCP)
                              └──> MySQL Database Engine (InnoDB)`,
    highlights: [
      "Built clean RESTful endpoints following standard HTTP methods, request validation, and DTO patterns.",
      "Implemented Spring Data JPA with custom JPQL queries and derived methods for multi-criteria book searching.",
      "Configured HikariCP connection pooling and used @Transactional boundaries to maintain database consistency.",
      "Set up global exception handling using @ControllerAdvice to return standardized, clear error responses.",
      "Integrated Swagger / OpenAPI documentation for interactive endpoint testing."
    ],
    schemaHighlights: "Tables: books (id, isbn, title, author, category, available_copies), members (id, member_code, name, email, membership_status), borrow_records (id, book_id, member_id, issue_date, due_date, return_date, fine_amount).",
    challengesSolved: "Prevented race conditions where two users attempt to borrow the last available copy at the same time by using optimistic locking (@Version) and transactional rollback on stock depletion."
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
    metrics: "Role-based Security • Automated Rent Calculations • Fleet Status Tracking",
    description: "A Vehicle Rental Management System providing complete reservation workflows for car and bike rentals. Includes customer bookings, fleet tracking, dynamic pricing based on rental duration, and secure admin controls.",
    architecture: `User / Admin Request 
      └──> Spring Security Filter Chain (JWT Token Verification)
            └──> Auth & Vehicle Controllers
                  └──> Booking & Billing Service Engine
                        └──> JPA / Hibernate ORM Layer
                              └──> MySQL Relational Database`,
    highlights: [
      "Implemented authentication and role-based authorization using Spring Security and stateless JWT tokens (Admin and Customer roles).",
      "Built pricing logic supporting daily, weekly, and distance-based rates with late return fee calculations.",
      "Designed vehicle state transitions (AVAILABLE -> RESERVED -> ON_RENT -> UNDER_MAINTENANCE) to prevent double-booking.",
      "Developed admin endpoints for fleet revenue tracking and vehicle maintenance scheduling.",
      "Applied request input validation with Hibernate Validator (@Valid, @NotNull) to keep incoming data clean."
    ],
    schemaHighlights: "Tables: vehicles (id, reg_number, brand, model, daily_rate, status), users (id, name, email, password_hash, role), rentals (id, vehicle_id, user_id, start_date, end_date, total_amount, payment_status).",
    challengesSolved: "Built date-overlap validation logic in the booking service to ensure a vehicle cannot be reserved by two customers for the same time window."
  },
  {
    id: "spring-mobile-recharge",
    title: "Mobile Recharge Application",
    category: "springboot",
    categoryName: "Spring Boot",
    badge: "Fintech Simulation",
    summary: "Mobile recharge processing backend with transaction state tracking, plan filtering, and simulated payment gateway reconciliation.",
    tags: ["Spring Boot", "REST APIs", "Transaction Management", "MySQL", "ACID Compliance", "Postman"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Atomic Transactions • Multi-Operator Plans • Transaction Audit Logging",
    description: "A telecom recharge and bill payment backend service. Handles operator selection, prepaid and postpaid plan lookups, atomic transaction processing, and simulated payment confirmation callbacks.",
    architecture: `Mobile / Web Client 
      └──> API Gateway / Recharge Controller
            └──> Plan Management & Transaction Service
                  └──> Simulated Payment Gateway Callback Handler
                        └──> Transaction Audit Logger & JPA Repo
                              └──> MySQL Transaction Ledger`,
    highlights: [
      "Managed atomic transaction boundaries with Spring's @Transactional to ensure accounts are only charged when recharge steps complete successfully.",
      "Structured plan lookup APIs supporting multiple operators and categories (Talktime, Data, Annual packs).",
      "Implemented idempotency keys to protect against duplicate recharge submissions on network retries.",
      "Maintained an audit log table recording request payloads, timestamps, and status codes for troubleshooting.",
      "Built mock callback handlers to simulate asynchronous payment gateway responses (Success, Pending, Failed)."
    ],
    schemaHighlights: "Tables: operators (id, operator_name, circle), recharge_plans (id, operator_id, plan_type, amount, validity_days, benefits), transactions (txn_id, mobile_number, plan_id, amount, status, timestamp, ref_number).",
    challengesSolved: "Handled unexpected payment dropouts by rolling back transaction status and returning actionable error messages to the client."
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
    summary: "Console and desktop banking application built with Java JDBC and MySQL, featuring ACID-compliant fund transfers, PIN hashing, and account statements.",
    tags: ["Java", "JDBC", "MySQL", "Transaction Management", "ACID Properties", "PreparedStatements"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "SQL Injection Prevention • ACID Fund Transfers • Detailed Account Ledger",
    description: "A core banking system built using Core Java, JDBC, and MySQL. Implements fundamental banking workflows including account creation, deposits, withdrawals with balance verification, and atomic fund transfers between accounts.",
    architecture: `Application Interface (CLI / GUI)
      └──> Banking Service Controller
            └──> JDBC Driver (com.mysql.cj.jdbc.Driver)
                  └──> Connection Manager (Singleton Pattern)
                        └──> PreparedStatement Queries with Manual Commit Control
                              └──> MySQL Database Engine (InnoDB Engine)`,
    highlights: [
      "Used parameterized PreparedStatement queries exclusively to eliminate SQL injection vulnerabilities.",
      "Managed JDBC transactions manually using conn.setAutoCommit(false), conn.commit(), and conn.rollback() to ensure atomic transfers between accounts.",
      "Enforced business logic checks such as minimum balance maintenance and daily transfer limits.",
      "Hashed sensitive customer PINs using SHA-256 before storing them in the database.",
      "Generated mini-statements and transaction history records using SQL queries ordered by timestamp."
    ],
    schemaHighlights: "Tables: accounts (account_no, holder_name, balance, pin_hash, status, created_at), transactions (txn_id, from_acc, to_acc, amount, txn_type, txn_time, balance_after).",
    challengesSolved: "Prevented race conditions during concurrent balance deductions by using row-level locking (SELECT ... FOR UPDATE) inside the transfer transaction."
  },
  {
    id: "jdbc-food-ordering",
    title: "Online Food Ordering System",
    category: "jdbc",
    categoryName: "JDBC & Servlets",
    badge: "Full Stack / Web MVC",
    summary: "Restaurant ordering portal handling dynamic menus, session-based cart persistence, order status tracking, and itemized bill generation.",
    tags: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "Session Tracking"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Session Cart Persistence • Order Status Pipeline • Efficient Batch Inserts",
    description: "A food ordering web application connecting customers to restaurant menus. Users can browse categories, add items to a session cart, and place orders with itemized billing and tax calculations.",
    architecture: `Browser Client 
      └──> Java Servlets (Controller)
            └──> JSP Views (Presentation Layer with JSTL)
                  └──> Business Logic & JDBC DAO Layer
                        └──> MySQL Database`,
    highlights: [
      "Organized using the MVC pattern to separate JSP views, Servlet controllers, and JDBC DAO database access.",
      "Maintained shopping cart items across multiple pages using HttpSession.",
      "Calculated order totals including taxes, delivery charges, and coupon discounts.",
      "Tracked order fulfillment through clear status stages: Placed, Preparing, Out for Delivery, Delivered.",
      "Used JDBC batch processing (addBatch(), executeBatch()) to insert multiple order items in a single database round-trip."
    ],
    schemaHighlights: "Tables: menu_items (item_id, name, category, price, is_available), customers (cust_id, name, phone, address), orders (order_id, cust_id, total_amount, order_status, ordered_at), order_items (id, order_id, item_id, quantity, subtotal).",
    challengesSolved: "Improved database performance when placing large orders with multiple items by switching from individual insert queries to JDBC batch execution."
  },
  {
    id: "jdbc-library-mvc",
    title: "Library Management System (MVC)",
    category: "jdbc",
    categoryName: "JDBC & Servlets",
    badge: "Academic & Enterprise",
    summary: "Full-stack library web application built with Java Servlets, JDBC, and MySQL using the MVC architecture.",
    tags: ["Java", "Servlets", "JDBC", "MySQL", "HTML/CSS", "MVC Architecture"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Clean MVC Pattern • Multi-Table Joins • Automated Return Alerts",
    description: "A library management web portal built using Java Servlets, JSP, and JDBC. Handles student registration, catalog searches, book checkout desks, and overdue tracking.",
    architecture: `JSP Front-End (Forms & Tables)
      └──> Servlet Dispatchers (doGet / doPost)
            └──> DAO Pattern (BookDAO, StudentDAO)
                  └──> JDBC Database Queries with Joins
                        └──> MySQL Database`,
    highlights: [
      "Structured strictly around the MVC design pattern to keep business and database logic out of JSP views.",
      "Implemented complete CRUD workflows for books, categories, and student memberships.",
      "Wrote multi-table SQL queries using INNER JOIN and LEFT JOIN to retrieve borrowing logs and student details efficiently.",
      "Added Servlet filters to restrict administrative screens to authorized staff."
    ],
    schemaHighlights: "Tables: books, students, book_issues, categories with referential foreign key cascades.",
    challengesSolved: "Eliminated redundant database connection setup code by creating a centralized DatabaseConnectionFactory utility."
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
    summary: "Healthcare scheduling application implementing OOP principles, Java Collections, multithreading for doctor queue management, and custom exception handling.",
    tags: ["Core Java", "OOPs", "Collections Framework", "Multithreading", "Custom Exceptions"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Custom Exceptions • Priority Queue Triage • Thread-Safe Bookings",
    description: "A patient appointment and queue management system written in Core Java. Simulates hospital workflows including doctor consultation slots, emergency triage queueing, patient medical records, and appointment bookings.",
    architecture: `Console / GUI Layer
      └──> Hospital Controller
            └──> Doctor & Appointment Managers
                  └──> Thread-safe Collections (PriorityQueue, ConcurrentHashMap)
                        └──> Data File Persistence / In-Memory Store`,
    highlights: [
      "Used Java PriorityQueue with a custom Comparator to prioritize emergency triage patients ahead of routine consultations.",
      "Applied OOP principles (Inheritance, Polymorphism, Encapsulation, Abstraction) across Doctor, Patient, and Appointment models.",
      "Built a clean custom exception hierarchy (DoctorUnavailableException, SlotAlreadyBookedException, InvalidPatientDataException).",
      "Used Java multithreading (ExecutorService, synchronized blocks) to handle concurrent appointment bookings safely.",
      "Used the Collections Framework (HashMaps, TreeSets, LinkedLists) for doctor scheduling and patient history lookups."
    ],
    schemaHighlights: "Data Structures: PriorityQueue<Patient> for emergency prioritization, Map<DoctorId, List<Slot>> for schedule booking.",
    challengesSolved: "Designed a time-slot validation algorithm that checks for overlapping appointments before confirming bookings across concurrent threads."
  },
  {
    id: "core-student-mgmt",
    title: "Student Management System",
    category: "corejava",
    categoryName: "Core Java",
    badge: "Core Software Engineering",
    summary: "Academic records application showcasing file I/O serialization, multi-attribute sorting, and modular OOP architecture in Core Java.",
    tags: ["Core Java", "File I/O", "Serialization", "Data Structures", "OOPs"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "File Serialization • Multi-attribute Sorting • Regex Input Validation",
    description: "A desktop student records system that tracks student profiles, semester GPAs, attendance, and department allocations. Uses Java Object Serialization to persist records to disk without needing an external database engine.",
    architecture: `Command Interface
      └──> Student Service Handler
            └──> Collection Repository (ArrayList, HashMap)
                  └──> ObjectOutputStream / ObjectInputStream
                        └──> Encrypted/Serialized Binary Flat Files`,
    highlights: [
      "Saved and loaded student objects directly to disk using Java Object Streams (Serializable interface) to keep data between application restarts.",
      "Implemented multi-attribute sorting (by Rank, CGPA, Roll Number, Name) using Comparable and Comparator interfaces.",
      "Validated email addresses, phone numbers, and grade inputs using regular expressions (Pattern and Matcher).",
      "Organized into clean packages (model, service, util, exception) following standard Java conventions."
    ],
    schemaHighlights: "In-memory indexed records with binary serialized persistence file storage.",
    challengesSolved: "Prevented deserialization errors across code changes by maintaining explicit serialVersionUID values on model classes."
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
    summary: "Relational database schema featuring 3NF normalization, stored procedures for atomic transfers, automated audit triggers, and B-Tree indexing.",
    tags: ["MySQL", "Stored Procedures", "Triggers", "Indexing", "ACID Compliance", "Database Security"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "3NF Normalization • Sub-10ms Indexed Queries • Automated Audit Triggers",
    description: "A normalized relational database schema modeled for a commercial banking system. Focuses on data integrity, ACID consistency, audit trail logging, and deadlock prevention.",
    architecture: `Client App (Java / Backend)
      └──> MySQL 8.0 Server Instance
            └──> Stored Procedure Interface (sp_fund_transfer, sp_calculate_interest)
                  └──> Trigger Engine (trg_audit_balance_change, trg_prevent_negative_balance)
                        └──> InnoDB Clustered & Secondary B-Tree Indexes
                              └──> Encrypted Persistent Tablespaces`,
    highlights: [
      "Designed a 3NF normalized schema with foreign key constraints (ON DELETE RESTRICT) to protect referential integrity.",
      "Wrote MySQL stored procedures (sp_TransferFunds) that combine balance checks, deduction, credit, and ledger entries into an atomic transaction.",
      "Created BEFORE and AFTER triggers on account tables to automatically write balance changes to an immutable audit table.",
      "Added composite secondary indexes on (account_number, transaction_date) to speed up customer statement queries.",
      "Created database views that mask sensitive personal data for front-desk staff."
    ],
    schemaHighlights: "Entities: Customers, Accounts, Transactions, Branches, AuditLedger, LoanDisbursements, KYCRecords with constraint checks.",
    challengesSolved: "Avoided deadlocks during simultaneous reciprocal transfers between two accounts by sorting account numbers before acquiring locks inside the stored procedure."
  },
  {
    id: "db-customer-order",
    title: "Customer Order Management Database",
    category: "mysql",
    categoryName: "MySQL & Database Architecture",
    badge: "E-Commerce Data Engine",
    summary: "E-commerce database model supporting product inventory, category hierarchies, order line items, and analytical sales queries.",
    tags: ["MySQL", "Complex Joins", "Aggregation", "Indexing", "ER Modeling", "3NF Normalization"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Multi-Table Joins • Real-Time Inventory Triggers • Sales Aggregation",
    description: "A relational database schema for an e-commerce order management system. Handles product listings, orders, line items, customer accounts, and sales reporting.",
    architecture: `Application Query Layer
      └──> View & Query Optimizer
            └──> Multi-Table Join Engine (5+ table INNER / LEFT JOINs)
                  └──> Group By & Window Aggregation Functions
                        └──> Partitioned Storage Tables`,
    highlights: [
      "Designed normalized ER schema handling Many-to-Many relationships between Products and Orders through an Order_Items associative table.",
      "Wrote analytical queries using GROUP BY, HAVING, and window functions (DENSE_RANK(), SUM() OVER) to generate sales and top-product reports.",
      "Built database triggers that decrement warehouse stock upon order confirmation and replenish stock on cancellation.",
      "Added composite indexes on (customer_id, order_date) for fast customer order history pagination."
    ],
    schemaHighlights: "Entities: Customers, Orders, Order_Items, Products, Categories, Warehouses, Shipments, Payments.",
    challengesSolved: "Rewrote slow nested subqueries into indexed JOINs, significantly speeding up monthly sales report queries on large datasets."
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
    metrics: "Double-Booking Prevention • Dynamic Seasonal Tariffs • Consolidated Folio Billing",
    description: "A database schema designed for hotel front-desk operations. Manages room availability across dates, guest folios, restaurant billing consolidation, and room readiness states.",
    architecture: `Hotel Booking Engine 
      └──> Room Availability Query Engine
            └──> Date Intersection Functions (CheckIn / CheckOut overlap prevention)
                  └──> Consolidated Guest Billing Views
                        └──> MySQL Database`,
    highlights: [
      "Implemented date-range intersection logic in SQL (NOT (end_date <= check_in OR start_date >= check_out)) to prevent double-booking rooms.",
      "Designed a consolidated guest folio schema combining room charges, dining, and extra services into a single checkout invoice.",
      "Created stored functions to calculate dynamic room rates based on weekday/weekend rates and high-demand seasonal multipliers.",
      "Applied foreign key cascade rules to ensure guest transaction history remains intact."
    ],
    schemaHighlights: "Entities: Guests, Rooms, RoomTypes, Bookings, GuestFolio, ExtraServices, Invoices.",
    challengesSolved: "Indexed (room_type_id, status) and booking date intervals to keep room search queries fast during peak season dates."
  },
  {
    id: "db-railway-reservation",
    title: "Railway Reservation System Database",
    category: "mysql",
    categoryName: "MySQL & Database Architecture",
    badge: "Mass Transit Data Model",
    summary: "Railway reservation schema handling train schedules, multi-stop routes, berth quota matrices (RAC/WL), and PNR status tracking.",
    tags: ["MySQL", "Concurrency Handling", "Complex Schema", "Route Mapping", "PNR Tracking"],
    featured: true,
    github: "https://github.com/Ashwinth-k-3018/Java_Stackly",
    liveDemo: "#",
    metrics: "Route Milestone Calculations • Berth Quotas (RAC/WL) • Indexed PNR Lookups",
    description: "A relational database schema modeling the structure of a railway reservation system. Accounts for train schedules, intermediate stations, quota allocations (General, Tatkal, Ladies), RAC/Waiting List progression, and 10-digit PNR lookups.",
    architecture: `Transit Booking API 
      └──> Route & Station Distance Calculator
            └──> Berth Allocation Engine (Available -> RAC -> Waiting List)
                  └──> Transactional Booking Queries
                        └──> MySQL High-Availability Database`,
    highlights: [
      "Structured station route sequences with distance milestones to calculate fares between any source and destination station.",
      "Modeled coach berth layouts (1A, 2A, 3A, Sleeper) with berth preferences (Lower, Middle, Upper, Side Lower).",
      "Created database triggers that automatically promote passengers from Waiting List to RAC and RAC to Confirmed when cancellations occur.",
      "Indexed PNR numbers to provide instant status lookups."
    ],
    schemaHighlights: "Entities: Trains, Stations, Train_Schedule, Coaches, Berths, Passengers, Tickets (PNR), QuotaAllocations, FareRules.",
    challengesSolved: "Structured intermediate station segment reservations so that non-overlapping journey legs on the same train can share seat allocations without conflicts."
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
    summary: "Fully responsive modern e-commerce web application featuring client-side cart management, product filtering, and clean UI/UX.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "LocalStorage", "UI/UX"],
    featured: false,
    github: "https://github.com/Ashwinth-k-3018",
    liveDemo: "#",
    metrics: "100% Mobile & Tablet Responsive • LocalStorage Cart • Zero Framework Bloat",
    description: "A modern e-commerce storefront built with semantic HTML5, CSS3 (Flexbox, Grid, custom properties), and vanilla JavaScript (ES6+). Includes product filtering, cart drawer, toast notifications, and state persistence via LocalStorage.",
    architecture: `User Device (Mobile / Tablet / Desktop)
      └──> Responsive Viewport Layout (CSS Grid & Flexbox)
            └──> ES6 JavaScript Module Layer (Cart Controller, Filter Engine)
                  └──> Browser LocalStorage & SessionStorage
                        └──> Mock Product Catalog & REST API Ready`,
    highlights: [
      "Built a fully responsive layout tested on small screens (320px+), tablets, laptops, and desktops.",
      "Implemented a client-side shopping cart with real-time price updates and persistent storage in localStorage.",
      "Created instant product filters by category, price, and search keywords without page reloads.",
      "Designed modal checkout flows and form validation with helpful inline error messages."
    ],
    schemaHighlights: "Front-end state architecture managing products array, active filters, and synchronized cart storage.",
    challengesSolved: "Kept page loads instant and animations smooth by writing lightweight vanilla JavaScript with zero third-party framework overhead."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
