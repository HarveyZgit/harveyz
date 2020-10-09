import formatHexColor from '../color';

describe('16进制颜色相关处理', () => {

    it('处理空格', () => {
        expect(formatHexColor(' #  7 a ffcc   ')).toBe('#7AFFCC');
    });

    it('数值为空', () => {
        expect(formatHexColor()).toBe('');
    });

    it('数值为null', () => {
        expect(formatHexColor(null)).toBe('');
    });

    it('formatHexColor - 统一为大写', () => {
        expect(formatHexColor('cCc3Fa')).toBe('#CCC3FA');
        expect(formatHexColor('cCc3Fa', true)).toBe('#CCC3FA');
    });

    it('formatHexColor - 无#', () => {
        expect(formatHexColor('ccc3fa')).toBe('#CCC3FA');
        expect(formatHexColor('ccc3fa', true)).toBe('#CCC3FA');
    });

    it('formatHexColor - 有#', () => {
        expect(formatHexColor('#ccc3fa')).toBe('#CCC3FA');
        expect(formatHexColor('#ccc3fa', true)).toBe('#CCC3FA');
    });

    it('formatHexColor - 长度为3', () => {
        expect(formatHexColor('ccc')).toBe('#CCC');
        expect(formatHexColor('ccc', true)).toBe('#CCC');
    });

    it('formatHexColor - 长度小于3', () => {
        expect(formatHexColor('aa')).toBe('#AAF');
        expect(formatHexColor('aa', true)).toBe('#AAF');
    });

    it('formatHexColor - 长度大于3，小于6', () => {
        expect(formatHexColor('aa99')).toBe('#AA99FF');
        expect(formatHexColor('aa99', true)).toBe('#AA99FF');
    });

    it('formatHexColor - 长度大于6，小于8', () => {
        expect(formatHexColor('aa993be')).toBe('#AA993B');
        expect(formatHexColor('aa993be', true)).toBe('#AA993BEF');
    });

    it('formatHexColor - 长度大于8', () => {
        expect(formatHexColor('aa993be66')).toBe('#AA993B');
        expect(formatHexColor('aa993be66', true)).toBe('#AA993BE6');
    });

    it('formatHexColor - 错误字符 1', () => {
        expect(formatHexColor('aa__3b')).toBe('#AAFF3B');
    });

    it('formatHexColor - 错误字符 2', () => {
        expect(formatHexColor('#.a^a_3&b')).toBe('#0AFAF3');
        expect(formatHexColor('#.a^a_3&b', true)).toBe('#0AFAF30B');
    });

    it('formatHexColor - 错误字符 3', () => {
        expect(formatHexColor('##.a^a_3&b')).toBe('#00AFAF');
        expect(formatHexColor('##.a^a_3&b', true)).toBe('#00AFAF30');
    });

    it('formatHexColor - 输入rgb颜色 1', () => {
        expect(formatHexColor('rgb(255,200,100)')).toBe('#FFB025');
        expect(formatHexColor('rgb(255,200,100)', true)).toBe('#FFB02550');
    });

    it('formatHexColor - 输入rgb颜色 2', () => {
        expect(formatHexColor('255,200,100')).toBe('#255020');
        expect(formatHexColor('255,200,100', true)).toBe('#25502000');
    });
});
