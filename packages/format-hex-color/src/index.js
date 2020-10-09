
//  正则匹配16进制颜色
export const hexColorReg = /^(#{0,1})([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g;

/**
 * 格式化16进制颜色
 *
 * @param {string} color          色值
 * @param {boolean} hasTransparent 包含透明度
 * @returns {string} 16进制色值 例如 #666666
 */
export default formatHexColor = (color, hasTransparent) => {
    if (!color) {
        return '';
    }

    // 处理大小写及空格
    color = (`${color}`).toUpperCase().replace(/\s+/g, '');

    // 符合条件直接返回
    if (color.slice(0, 1) === '#') {
        color = color.slice(1, color.length);
    }
    if (hexColorReg.test(color)) {
        return hasTransparent ? `#${color}` : `#${color.slice(0, 6)}`;
    }

    // 替换除了[0-9a-fA-F]外的字符
    color = color.replace((/./g), item => {
        switch (true) {
            case (item > '9' && item < 'A'):
                return '9';
            case (item > 'F' && item < 'a'):
                return 'F';
            case (item < '0'):
                return '0';
            case (item > 'f'):
                return 'F';
            default:
                return item;
        }
    });

    // 处理长度
    let diff = 0;
    const len = color.length;
    switch (true) {
        case len < 3:
            diff = 3 - len;
            break;
        case (len > 3 && len < 6):
            diff = 6 - len;
            break;
        case (len > 6 && len < 8):
            diff = 8 - len;
            break;
        case len > 8:
            diff = 0;
            color = color.slice(0, 8);
            break;
        default:
            return hasTransparent ? `#${color}` : `#${color.slice(0, 6)}`;

    }
    for (let i = 0; i < diff; i++) {
        color += 'F';
    }

    return hasTransparent ? `#${color}` : `#${color.slice(0, 6)}`;
};
