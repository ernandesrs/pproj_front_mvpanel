const icons = {
    app: 'bi bi-app',

    alertDiamond: 'bi bi-exclamation-diamond',

    check: 'bi bi-check',
    checkLg: 'bi bi-check-lg',

    layoutWtf: 'bi bi-layout-wtf',
    list: 'bi bi-list',
    link: 'bi bi-link-45deg',
    linkExternal: 'bi bi-box-arrow-up-right',
    login: 'bi bi-box-arrow-in-right',
    logout: 'bi bi-box-arrow-left',

    pencilSquare: 'bi bi-pencil-square',
    pieChart: 'bi bi-pie-chart',
    plus: 'bi bi-plus',
    plusLg: 'bi bi-plus-lg',

    loading: 'bi bi-arrow-clockwise animate-spin',
    spinner: 'bi bi-arrow-clockwise',

    trash: 'bi bi-trash',

    users: 'bi bi-people',
    user: 'bi bi-person',
    profile: 'bi bi-person-circle',

    x: 'bi bi-x',
    xLg: 'bi bi-x-lg',
};

const getClass = (name) => {
    return icons[name] ?? null;
};

const getElem = (name) => {
    let icon = getClass(name);
    return `<span class="icon ${icon}"></span>`;
};

export default { icons, getClass, getElem };