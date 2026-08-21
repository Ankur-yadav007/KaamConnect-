import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [userType, setUserType] = useState("customer");

  const [selectedService, setSelectedService] = useState("");
  const [selectedWorker, setSelectedWorker] = useState(null);

  const [location, setLocation] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const [activeNav, setActiveNav] = useState("home");

  /* ================= SERVICES ================= */

  const services = [
    {
      icon: "⚡",
      name: "Electrician",
      description: "Electrical repair and installation.",
    },
    {
      icon: "🔧",
      name: "Plumber",
      description: "Water pipe and plumbing services.",
    },
    {
      icon: "🪚",
      name: "Carpenter",
      description: "Furniture and woodwork services.",
    },
    {
      icon: "🎨",
      name: "Painter",
      description: "Professional home painting services.",
    },
    {
      icon: "❄️",
      name: "AC & Appliance",
      description: "Repair and maintenance services.",
    },
    {
      icon: "🧹",
      name: "Cleaning",
      description: "Professional home cleaning services.",
    },
  ];

  /* ================= WORKERS ================= */

  const workers = {
    Electrician: [
      {
        name: "Raj Kumar",
        experience: "5 Years",
        rating: "4.8",
        location: "Jhansi",
      },
      {
        name: "Amit Verma",
        experience: "4 Years",
        rating: "4.7",
        location: "Jhansi",
      },
      {
        name: "Suresh Yadav",
        experience: "7 Years",
        rating: "4.9",
        location: "Jhansi",
      },
      {
        name: "Rohit Sharma",
        experience: "6 Years",
        rating: "4.8",
        location: "Lucknow",
      },
      {
        name: "Vivek Kumar",
        experience: "5 Years",
        rating: "4.7",
        location: "Lucknow",
      },
      {
        name: "Anil Verma",
        experience: "8 Years",
        rating: "4.9",
        location: "Lucknow",
      },
    ],

    Plumber: [
      {
        name: "Rakesh Kumar",
        experience: "6 Years",
        rating: "4.8",
        location: "Jhansi",
      },
      {
        name: "Vikas Sharma",
        experience: "3 Years",
        rating: "4.6",
        location: "Jhansi",
      },
      {
        name: "Sanjay Gupta",
        experience: "7 Years",
        rating: "4.8",
        location: "Lucknow",
      },
      {
        name: "Manoj Kumar",
        experience: "5 Years",
        rating: "4.7",
        location: "Lucknow",
      },
    ],

    Carpenter: [
      {
        name: "Mohan Singh",
        experience: "8 Years",
        rating: "4.9",
        location: "Jhansi",
      },
      {
        name: "Deepak Kumar",
        experience: "5 Years",
        rating: "4.7",
        location: "Jhansi",
      },
      {
        name: "Ravi Sharma",
        experience: "6 Years",
        rating: "4.8",
        location: "Lucknow",
      },
      {
        name: "Aakash Verma",
        experience: "4 Years",
        rating: "4.6",
        location: "Lucknow",
      },
    ],

    Painter: [
      {
        name: "Arun Kumar",
        experience: "6 Years",
        rating: "4.8",
        location: "Jhansi",
      },
      {
        name: "Pankaj Singh",
        experience: "4 Years",
        rating: "4.6",
        location: "Jhansi",
      },
      {
        name: "Nitin Kumar",
        experience: "5 Years",
        rating: "4.8",
        location: "Lucknow",
      },
      {
        name: "Ramesh Yadav",
        experience: "7 Years",
        rating: "4.7",
        location: "Lucknow",
      },
    ],

    "AC & Appliance": [
      {
        name: "Rahul Gupta",
        experience: "7 Years",
        rating: "4.9",
        location: "Jhansi",
      },
      {
        name: "Manish Kumar",
        experience: "5 Years",
        rating: "4.7",
        location: "Jhansi",
      },
      {
        name: "Karan Singh",
        experience: "6 Years",
        rating: "4.8",
        location: "Lucknow",
      },
      {
        name: "Ashish Kumar",
        experience: "4 Years",
        rating: "4.7",
        location: "Lucknow",
      },
    ],

    Cleaning: [
      {
        name: "Neha Sharma",
        experience: "4 Years",
        rating: "4.8",
        location: "Jhansi",
      },
      {
        name: "Pooja Verma",
        experience: "3 Years",
        rating: "4.7",
        location: "Jhansi",
      },
      {
        name: "Priya Singh",
        experience: "5 Years",
        rating: "4.9",
        location: "Lucknow",
      },
      {
        name: "Kavita Sharma",
        experience: "4 Years",
        rating: "4.8",
        location: "Lucknow",
      },
    ],
  };

  /* ================= NAVIGATION ================= */

  const goHome = (section = "home") => {
    setPage("home");
    setActiveNav(section);

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* ================= SERVICE SELECTION ================= */

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    setSelectedWorker(null);
    setBookingMessage("");
    setSearchMessage("");

    setActiveNav("home");

    setTimeout(() => {
      const searchBox = document.querySelector(".search-box");

      if (searchBox) {
        searchBox.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50);
  };

  /* ================= FIND SERVICE ================= */

  const handleFindService = () => {
    const enteredLocation = location.trim();

    if (!selectedService) {
      setSearchMessage("Please select a service first.");
      return;
    }

    if (!enteredLocation) {
      setSearchMessage("Please enter your location.");
      return;
    }

    setSelectedWorker(null);
    setBookingMessage("");
    setSearchMessage("");

    setPage("workers");
  };

  /* ================= BOOK SERVICE ================= */

  const handleBookService = () => {
    if (!selectedWorker) {
      return;
    }

    setBookingMessage(
      `Booking request sent to ${selectedWorker.name} for ${selectedService} service.`
    );
  };

  /* ================= LOGIN ================= */

  if (page === "login") {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <img src={logo} alt="KAAM CONNECT+" />
          </div>

          <h1>Welcome Back!</h1>

          <p className="auth-subtitle">
            Login to continue to KAAM CONNECT+
          </p>

          <div className="user-type">
            <button
              className={userType === "customer" ? "active" : ""}
              onClick={() => setUserType("customer")}
            >
              Customer
            </button>

            <button
              className={userType === "worker" ? "active" : ""}
              onClick={() => setUserType("worker")}
            >
              Service Professional
            </button>
          </div>

          <input
            className="auth-input"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
          />

          <button className="auth-main-btn">
            Login
          </button>

          <p className="auth-switch">
            Don't have an account?

            <button onClick={() => setPage("register")}>
              Create Account
            </button>
          </p>

          <button
            className="back-home"
            onClick={() => goHome("home")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  /* ================= REGISTER ================= */

  if (page === "register") {
    return (
      <div className="auth-page">
        <div className="register-card">
          <div className="auth-logo">
            <img src={logo} alt="KAAM CONNECT+" />
          </div>

          <h1>Create Account</h1>

          <p className="auth-subtitle">
            Join KAAM CONNECT+
          </p>

          <div className="user-type">
            <button
              className={userType === "customer" ? "active" : ""}
              onClick={() => setUserType("customer")}
            >
              Customer
            </button>

            <button
              className={userType === "worker" ? "active" : ""}
              onClick={() => setUserType("worker")}
            >
              Service Professional
            </button>
          </div>

          <input
            className="auth-input"
            type="text"
            placeholder="Full Name"
          />

          <input
            className="auth-input"
            type="tel"
            placeholder="Mobile Number"
          />

          <input
            className="auth-input"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Create Password"
          />

          {userType === "worker" && (
            <>
              <select className="auth-input">
                <option value="">
                  Select Your Service
                </option>

                {services.map((service) => (
                  <option
                    key={service.name}
                    value={service.name}
                  >
                    {service.name}
                  </option>
                ))}
              </select>

              <input
                className="auth-input"
                type="number"
                placeholder="Years of Experience"
              />
            </>
          )}

          <input
            className="auth-input"
            type="text"
            placeholder="Your Location"
          />

          <button className="auth-main-btn">
            Create Account
          </button>

          <p className="auth-switch">
            Already have an account?

            <button onClick={() => setPage("login")}>
              Login
            </button>
          </p>

          <button
            className="back-home"
            onClick={() => goHome("home")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  /* ================= WORKERS PAGE ================= */

  if (page === "workers") {
    const normalizedLocation = location.trim().toLowerCase();

    const availableWorkers = (
      workers[selectedService] || []
    ).filter(
      (worker) =>
        worker.location.toLowerCase() === normalizedLocation
    );

    return (
      <div className="app">
        {/* NAVBAR */}

        <nav className="navbar">
          <div className="brand-logo">
            <img src={logo} alt="KAAM CONNECT+" />
            <h2>Kaam Connect+</h2>
          </div>

          <div className="nav-links">
            <a
              href="#home"
              className={activeNav === "home" ? "active-link" : ""}
              onClick={(e) => {
                e.preventDefault();
                goHome("home");
              }}
            >
              Home
            </a>

            <a
              href="#services"
              className={
                activeNav === "services" ? "active-link" : ""
              }
              onClick={(e) => {
                e.preventDefault();
                goHome("services");
              }}
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className={
                activeNav === "how-it-works"
                  ? "active-link"
                  : ""
              }
              onClick={(e) => {
                e.preventDefault();
                goHome("how-it-works");
              }}
            >
              How It Works
            </a>

            <a
              href="#about"
              className={
                activeNav === "about" ? "active-link" : ""
              }
              onClick={(e) => {
                e.preventDefault();
                goHome("about");
              }}
            >
              About
            </a>
          </div>

          <button
            className="login-btn"
            onClick={() => setPage("login")}
          >
            <span>♙</span>
            Login
          </button>
        </nav>

        {/* WORKERS */}

        <section className="workers-page">
          <div className="workers-header">
            <p className="small-title">
              AVAILABLE PROFESSIONALS
            </p>

            <h1>
              {selectedService} Workers
            </h1>

            <p>
              Professionals available in{" "}
              <strong>{location}</strong>
            </p>
          </div>

          {availableWorkers.length > 0 ? (
            <div className="workers-grid">
              {availableWorkers.map((worker) => (
                <div
                  className="worker-card"
                  key={worker.name}
                >
                  <div className="worker-avatar">
                    {worker.name.charAt(0)}
                  </div>

                  <h2>{worker.name}</h2>

                  <p className="worker-service">
                    {selectedService}
                  </p>

                  <div className="worker-info">
                    <span>
                      ⭐ {worker.rating}
                    </span>

                    <span>
                      🛠️ {worker.experience}
                    </span>

                    <span>
                      📍 {worker.location}
                    </span>
                  </div>

                  <button
                    className="choose-worker-btn"
                    onClick={() => {
                      setSelectedWorker(worker);
                      setBookingMessage("");
                    }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-workers">
              <div className="no-workers-icon">
                🔍
              </div>

              <h2>No Professionals Available</h2>

              <p>
                Sorry, no {selectedService} professionals are
                currently available in{" "}
                <strong>{location}</strong>.
              </p>

              <p className="try-location">
                Please try another location.
              </p>
            </div>
          )}

          {/* WORKER DETAILS */}

          {selectedWorker && (
            <div className="worker-details">
              <button
                className="close-details"
                onClick={() => setSelectedWorker(null)}
              >
                ×
              </button>

              <div className="worker-avatar large">
                {selectedWorker.name.charAt(0)}
              </div>

              <p className="small-title">
                PROFESSIONAL PROFILE
              </p>

              <h2>{selectedWorker.name}</h2>

              <p>
                {selectedService} Professional
              </p>

              <div className="details-list">
                <p>
                  ⭐ Rating:{" "}
                  <strong>{selectedWorker.rating}</strong>
                </p>

                <p>
                  🛠️ Experience:{" "}
                  <strong>
                    {selectedWorker.experience}
                  </strong>
                </p>

                <p>
                  📍 Location:{" "}
                  <strong>
                    {selectedWorker.location}
                  </strong>
                </p>
              </div>

              <button
                className="book-service-btn"
                onClick={handleBookService}
              >
                Book Service
              </button>

              {bookingMessage && (
                <p className="booking-message">
                  {bookingMessage}
                </p>
              )}
            </div>
          )}

          <button
            className="back-home workers-back"
            onClick={() => {
              setSelectedWorker(null);
              setPage("home");
              setActiveNav("home");
            }}
          >
            ← Back to Home
          </button>
        </section>
      </div>
    );
  }

  /* ================= HOME PAGE ================= */

  return (
    <div className="app">
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="brand-logo">
          <img
            src={logo}
            alt="KAAM CONNECT+"
          />

          <h2>Kaam Connect+</h2>
        </div>

        <div className="nav-links">
          <a
            href="#home"
            className={
              activeNav === "home"
                ? "active-link"
                : ""
            }
            onClick={(e) => {
              e.preventDefault();
              goHome("home");
            }}
          >
            Home
          </a>

          <a
            href="#services"
            className={
              activeNav === "services"
                ? "active-link"
                : ""
            }
            onClick={(e) => {
              e.preventDefault();
              goHome("services");
            }}
          >
            Services
          </a>

          <a
            href="#how-it-works"
            className={
              activeNav === "how-it-works"
                ? "active-link"
                : ""
            }
            onClick={(e) => {
              e.preventDefault();
              goHome("how-it-works");
            }}
          >
            How It Works
          </a>

          <a
            href="#about"
            className={
              activeNav === "about"
                ? "active-link"
                : ""
            }
            onClick={(e) => {
              e.preventDefault();
              goHome("about");
            }}
          >
            About
          </a>
        </div>

        <button
          className="login-btn"
          onClick={() => setPage("login")}
        >
          <span>♙</span>
          Login
        </button>
      </nav>

      {/* HERO */}

      <section
        className="hero"
        id="home"
      >
        <div className="hero-content">
          <p className="small-title">
            TRUSTED HOME SERVICES
          </p>

          <h1>
            Reliable Services,
            <br />

            <span>
              Right at Your Doorstep
            </span>
          </h1>

          <p className="hero-text">
            Find trusted professionals for your everyday
            home service needs.
          </p>

          {/* SEARCH */}

          <div className="search-box">
            <div className="search-input-wrapper">
              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                placeholder="What service do you need?"
                value={selectedService}
                readOnly
              />
            </div>

            <div className="search-input-wrapper">
              <span className="location-icon">
                ◉
              </span>

              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setSearchMessage("");
                }}
              />
            </div>

            <button
              className="find-btn"
              onClick={handleFindService}
            >
              Find Service
              <span>→</span>
            </button>
          </div>

          {selectedService && (
            <p className="selected-service">
              Selected Service:{" "}
              <strong>
                {selectedService}
              </strong>
            </p>
          )}

          {searchMessage && (
            <p className="search-message">
              {searchMessage}
            </p>
          )}
        </div>
      </section>

      {/* SERVICES */}

      <section
        className="services"
        id="services"
      >
        <p className="small-title">
          OUR SERVICES
        </p>

        <h2>
          Popular Home Services
        </h2>

        <p className="section-text">
          Choose a service and connect with a professional.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <div
              className={`service-card ${
                selectedService === service.name
                  ? "selected"
                  : ""
              }`}
              key={service.name}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.name}
              </h3>

              <p>
                {service.description}
              </p>

              <button
                className="choose-btn"
                onClick={() =>
                  handleSelectService(service.name)
                }
              >
                Select Service
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIAL REQUEST */}

      <section className="material-section">
        <p className="small-title">
          OUR SPECIAL FEATURE
        </p>

        <h2>
          Worker Material Request
        </h2>

        <p className="material-description">
          Workers can request required materials directly
          through KAAM CONNECT+ while working at a
          customer's location.
        </p>

        <div className="material-flow">
          <span>Worker</span>
          <b>→</b>
          <span>Material Request</span>
          <b>→</b>
          <span>Partner Shop</span>
          <b>→</b>
          <span>Delivery</span>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        className="how-section"
        id="how-it-works"
      >
        <p className="small-title">
          SIMPLE PROCESS
        </p>

        <h2>
          How It Works
        </h2>

        <div className="steps">
          <div className="step">
            <div className="number">1</div>

            <h3>
              Choose Service
            </h3>

            <p>
              Select the service you need.
            </p>
          </div>

          <div className="step">
            <div className="number">2</div>

            <h3>
              Find Worker
            </h3>

            <p>
              Find a suitable professional.
            </p>
          </div>

          <div className="step">
            <div className="number">3</div>

            <h3>
              Book Service
            </h3>

            <p>
              Choose your preferred time.
            </p>
          </div>

          <div className="step">
            <div className="number">4</div>

            <h3>
              Get Service
            </h3>

            <p>
              Worker completes the job.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer id="about">
        <div className="footer-logo">
          <img
            src={logo}
            alt="KAAM CONNECT+"
          />
        </div>

        <p>
          Your Trusted Home Service Platform
        </p>

        <small>
          © 2026 KAAM CONNECT+.
          All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;