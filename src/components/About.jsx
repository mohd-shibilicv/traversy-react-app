import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container max-w-4xl px-10 py-16 mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            About Task Tracker
          </h1>
          
          <p className="mt-4 text-gray-500">
            Task Tracker is a simple todo list app to help you organize your life. 
            Plan out your day, week, or month by adding tasks and checking them off as you complete them.
          </p>
    
          <h2 className="mt-8 text-2xl font-bold">Our Story</h2>
    
          <p className="mt-4 text-gray-500">
            Task Tracker was created in 2023 by Mohammed Shibili cv. Shibili was struggling to keep track of all his tasks across 
            multiple todo apps and lists. He decided to build one simple, easy to use todo app to manage all his tasks in one place.
          </p>
    
          <p className="mt-4 text-gray-500">
            The app started as a side project but quickly gained traction from friends and family who also found it useful.
            After many requests, Shibili decided to make Task Tracker available for everyone.
          </p>
    
          <h2 className="mt-8 text-2xl font-bold">Our Team</h2>
    
          <p className="mt-4 text-gray-500">  
            Task Tracker is built and maintained by Mohammed Shibili cv. He continues to improve the app in his free time 
            by adding new features and fixing bugs.
          </p>

          <p className="mt-4 text-gray-500">  
            Have feedback or ideas for new features? Reach out anytime at mohshibilicv@gmail.com.
          </p>
        </div>
    );
}

export default About
