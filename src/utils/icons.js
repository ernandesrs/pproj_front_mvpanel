const icons = {
    app: 'bi bi-app',

    alertDiamond: 'bi bi-exclamation-diamond',

    layoutWtf: 'bi bi-layout-wtf',
    list: 'bi bi-list',
    login: 'bi bi-box-arrow-in-right',

    pencilSquare: 'bi bi-pencil-square',
    pieChart: 'bi bi-pie-chart',
    plus: 'bi bi-plus',
    plusLg: 'bi bi-plus-lg',

    trash: 'bi bi-trash',

    users: 'bi bi-people',
};

const getClass = (name) => {
    return icons[name] ?? null;
};

const getElem = (name) => {
    let icon = getClass(name);
    return `<span class="icon ${icon}"></span>`;
};

export default { icons, getClass, getElem };