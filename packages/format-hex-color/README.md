# `format-hex-color`

> 格式化16进制颜色字符串
>
> 16进制颜色：3/6/8位，8位的后两位代表透明度。

## Usage

- ### 常规使用
    ```js
    import formatHexColor from '@harveyz/format-hex-color';

    /* 常规使用 */
    const color1 = formatHexColor('cCc3Fa');    // #CCC3FA
    const color2 = formatHexColor('#ccc3fa');   // #CCC3FA
    const color3 = formatHexColor('ccc');       // #CCC
    ```

- ### 输入 `长度` 错误的参数
    ```js
    // length < 3
    const color4 = formatHexColor('aa');        // #AAF

    // length > 3 && length < 6
    const color5 = formatHexColor('aa99');      // #AA99FF

    // length > 6 && length < 8
    const color6 = formatHexColor('aa993be');   // #AA993B

    // length > 8
    const color7 = formatHexColor('aa993be66'); // #AA993B
    ```

- ### 输入 `字符` 错误的参数
    ```js
    // len < 3
    const color8 = formatHexColor('##.a^a_3&b'); // #00AFAF

    // len > 3 && len < 6
    const color9 = formatHexColor('aa__3b');     // #AA99FF
    ```

## 正则
```js
import {hexColorReg} from '@harveyz/format-hex-color';

hexColorReg.test('cCc3Fa');     // true
hexColorReg.test('aa');         // false
```

## TODO
1. rgb 转换 hex
2. 处理透明度
