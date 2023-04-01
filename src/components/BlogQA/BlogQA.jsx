import React from "react";
import "./BlogQA.css";
const BlogQA = () => {
  return (
    <div className="blogsQA-parent">
      <h3 class="mt-4">
        Difference Between Props vs state:
      </h3>
      <table id="customers">
        <thead>
          <tr>
            <th class="bg-none"></th>
            <th>Props</th>
            <th>Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>The Data is passed from one component to another.</td>
            <td>The Data is passed within the component only.</td>
          </tr>
          <tr>
            <th>2</th>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Props can be used with state and functional components.</td>
            <td>State can be used only with the state components/class component.</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
          </tr>
        </tbody>
      </table>

      <table id="customers">
        <thead>
            <tr>
                <th>How does useState work?</th>
              </tr>
        </thead>
        <tbody>
            <tr>  
                <td>useState is React Hook that allows me to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</td>
              </tr>
        </tbody>
      </table>
      <table id="customers">
        <thead>
            <tr>
                <th>How Does React work?</th>
              </tr>
        </thead>
        <tbody>
            <tr>  
                <td>React is a JavaScript library that efficiently creates user interfaces (UI). This is to help me create a single page application. react transpliler is called babel. When we write code, react makes a copy of it and creates virtual DOM.The next time we write code or change a code with a virtual DOM, it compares the new DOM with the previous one. Then the new change just changes. It also generates, updates, and destroys react internally to extract the DOM element tree that needs to be rendered in the react browser.Following the React Diff-Algorithm and the lifecycle occurs.</td>
              </tr>
        </tbody>
      </table>
      <table id="customers">
        <thead>
            <tr>
                <th>Purpose of useEffect other than fetching data.</th>
              </tr>
        </thead>
        <tbody>
            <tr>  
                <td>The useEffect in react js allows me to perform side effects in my components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</td>
              </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlogQA;
