function customRender(reactElement,container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    // as above code is not modular rewrite new 

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)
} 

// 14:00 conti...

const reactElement={
    type:'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit again'
}

const MainContainer = document.querySelector('#root')

customRender(reactElement, MainContainer)