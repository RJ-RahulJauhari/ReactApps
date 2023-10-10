const mainContainer = document.querySelector("#root")

const reactElement = {
    type: 'a',
    props: {
        name: 'ReactElement',
        class: "link",
        href: 'https://www.google.com/',
        target: "_blank"
    },
    children: "Click me to navigate to Google"
}

function customRender(element, container) {
    const domElement = document.createElement(element.type);
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop]);
    }
    domElement.innerHTML = element.children;
    container.appendChild(domElement);
}

customRender(reactElement, mainContainer);