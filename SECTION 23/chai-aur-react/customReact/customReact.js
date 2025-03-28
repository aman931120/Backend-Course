function customRender(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // reactElement.children holds the content inside the React element.
    for (const prop in reactElement.props) {
        // safety point 
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  // this props is basically properties
  props: {
    href: "https://google.com",
    target: "_blanks",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
