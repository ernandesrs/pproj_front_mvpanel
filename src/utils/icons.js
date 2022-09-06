const icons = {
    app: 'bi bi-app',

    layoutWtf: 'bi bi-layout-wtf',
    login: 'bi bi-box-arrow-in-right',

    pieChart: 'bi bi-pie-chart',
};

const getClass = (name) => {
    return icons[name] ?? null;
};

const getElem = (name) => {
    let icon = getClass(name);
    return `<span class="icon ${icon}"></span>`;
};

export default { icons, getClass, getElem };