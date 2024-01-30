export const generateData = (params) => {
    const filteredParams = params.filter((param) => param.seriesName !== 'Среднее');
    const items = filteredParams.map((param) => {
        return {
            name: param.seriesName,
            value: param.value[param.seriesName],
            color: param.color,
        };
    });

    return { name, items };
};

export const generateTemplate = (data) => {
    return `
        <div class="tooltip">
            ${ getListTemplate(data.items) }
        </div>
    `;
};

const getListTemplate = (items) => {
    const template = items.map((item) => {
        return `
            <li class="tooltip__item">
                <p class="tooltip__header">
                    ${item.name}
                </p>
                <div class="tooltip__information">
                    <span style="background-color:${item.color};" class="tooltip__circle"></span>
                    <p class="tooltip__value">
                        ${item.value}
                    </p>
                </div>
            </li>
        `;
    }).join('');

    return `
        <ul class="tooltip__list">
            ${template}
        </ul>
    `;
};