import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Activity1.css';

const Activity1 = () => {
  const [count, setCount] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="activity1-page">
      {/* Background Pattern */}
      <div className="bg-pattern"></div>
      
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="back-btn">
          ← Back to Activities
        </Link>
        <h1 className="page-title">Counter App</h1>
        <div className="nav-spacer"></div>
      </nav>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">Activity 1</div>
            <h1 className="hero-title">
              React <span className="highlight">Counter</span> App
            </h1>
            <p className="hero-subtitle">
              Master the fundamentals of React Hooks with this interactive counter application.
              Learn useState, event handling, and conditional rendering.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">useState</span>
                <span className="stat-label">Core Hook</span>
              </div>
              <div className="stat">
                <span className="stat-number">🎯</span>
                <span className="stat-label">Interactive</span>
              </div>
              <div className="stat">
                <span className="stat-number">⚡</span>
                <span className="stat-label">Real-time</span>
              </div>
            </div>
          </motion.div>

          {/* Live Demo */}
          <motion.div 
            className="demo-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="counter-demo">
              <div className="counter-display">
                <span className="counter-number">{count}</span>
              </div>
              
              <div className="counter-controls">
                <button 
                  className="control-btn decrement"
                  onClick={decrement}
                  disabled={count === 0}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 12H4v-1h16v1z"/>
                  </svg>
                  Decrease
                </button>
                
                <button 
                  className="control-btn reset"
                  onClick={reset}
                >
                  Reset
                </button>
                
                <button 
                  className="control-btn increment"
                  onClick={increment}
                >
                  Increase
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <motion.div 
            className="container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What You'll Learn</h2>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>useState Hook</h3>
                <p>Manage component state with React's fundamental state hook</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Event Handling</h3>
                <p>Handle user interactions with onClick and other events</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Conditional UI</h3>
                <p>Render different UI based on application state</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Code Toggle */}
        <section className="code-section">
          <motion.div 
            className="container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="code-header">
              <h2 className="section-title">Implementation</h2>
              <button 
                className="toggle-btn"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? 'Hide Code' : 'Show Code'}
              </button>
            </div>

            <AnimatePresence>
              {showCode && (
                <motion.div 
                  className="code-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <pre className="code-block">{`import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-app">
      <div className="counter-display">
        <span>{count}</span>
      </div>
      <div className="controls">
        <button onClick={decrement}>−</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CounterApp;`}</pre>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <motion.div 
            className="container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Build?</h2>
            <p className="cta-subtitle">
              Practice this implementation and master React state management!
            </p>
            <div className="cta-buttons">
              <Link to="/" className="cta-btn primary">
                Next Activity →
              </Link>
              <button 
                className="cta-btn secondary"
                onClick={() => {
                  setCount(0);
                  setShowCode(false);
                }}
              >
                Reset Demo
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Activity1;