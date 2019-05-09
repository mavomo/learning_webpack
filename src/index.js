const component = () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = `Click me, I'm famous`;
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = () => import(/*webpackChunkName: "print" */'./printer/print').then(module => {
        const print = module.default;

        print();
    });

    return element;
};
document.body.appendChild(component());