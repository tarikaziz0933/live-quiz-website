import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className=' text-lg font-bold'>What is the purpose of React Routr?</h2>
                <p><span className=' text-lg font-bold'>Answer:</span>In React, routers help create and navigate between the different URLs that make up your web application. They allow your user to move between the components of your app while preserving user state, and can provide unique URLs for these components to make them more shareable.</p>
            </div>
            <div>
                <h2>How does contex API works?</h2>
                <p><span className=' text-lg font-bold'>Answer:</span>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
            </div>
            <div>
                <h2 className=' text-lg font-bold'>About UseRef()</h2>
                <p><span className=' text-lg font-bold'></span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. What is useRef in React with example?
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called . useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders. There are a couple of specific uses cases for useRef and refs that I'd like to call out. Modifying a child DOM node outside of the typical React data flow. useRef is a React Hook that lets you reference a value that's not needed for rendering.</p>
            </div>
        </div>
    );
};

export default Blog;