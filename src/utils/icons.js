const icons = {
    app: 'bi bi-app',

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