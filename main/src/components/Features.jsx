import React from 'react';
import { motion } from 'framer-motion';
import ActivityCard from './ActivityCard';
import './Features.css';

const Features = () => {
  const activities = [
    {
      title: "Activity 1 - Counter App",
      description: "Build a fully functional counter application with React Hooks, demonstrating state management fundamentals.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop",
      path: "/activity1",
      features: [
        "useState Hook",
        "Event Handling",
        "Conditional Rendering",
        "Custom Styling"
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      index: 0
    },
    {
      title: "Activity 2 - Todo List",
      description: "Create a complete Todo application with CRUD operations, local storage, and advanced React patterns.",
      image: "https://images.unsplash.com/photo-1506784367990-033f5cf1b894?w=300&h=300&fit=crop",
      path: "/activity2",
      features: [
        "useState & useEffect",
        "Form Handling",
        "Local Storage",
        "List Rendering"
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      index: 1
    },
    {
      title: "Activity 3 - JSON Dashboard",
      description: "Professional employee dashboard with reusable components, search, filtering, and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop",
      path: "/activity3",
      features: [
        "useState, useEffect",
        "Reusable Components",
        "Props & PropTypes",
        "JSON Data Handling",
        "Advanced Filtering"
      ],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      index: 2
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Activities</h2>
          <p className="section-subtitle">
            Dive into hands-on React projects that teach you real-world development skills
          </p>
        </motion.div>

        <div className="activities-grid">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.path}
              {...activity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;