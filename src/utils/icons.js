const icons = {
    pieChart: 'bi bi-pie-chart'
};

const getClass = (name) => {
    return icons[name] ?? '';
};

const getElem = (name) => {
    let icon = getClass(name);
    return `<span class="icon ${icon}"></span>`;
};

export default { icons, getClass, getElem };