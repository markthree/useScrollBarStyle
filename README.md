<div align="center">
    <img width="100%" height="100%" src="./snapshot.gif" />
    <h1>useScrollBar</h1>
    <p>响应式地变换滚动条样式 (vue3)</p>
</div>

<br />

## Usage

### install

```shell
npm i use-scroll-bar
```

### import

```html
<script setup lang="ts">
	import { useScrollBar } from 'use-scroll-bar'

	const {
		width,
		thumbBackgroundColor,
		darkThumbBackgroundColor
		// ... etc
	} = useScrollBar()

	width.value = '10px' // 宽度

	thumbBackgroundColor.value = 'red' //  thumb 背景颜色

	darkThumbBackgroundColor.value = 'blue' // 暗黑模式下 thumb 背景颜色
</script>
```

<br />

## Refs

该组件由以下库搭建而成

- [vite](https://cn.vitejs.dev/)
- [vueuse](https://vueuse.org/)
- [unocss](https://github.com/unocss/unocss)

<br />

## Support

该库由 [vue3-exports](https://github.com/dishait/vue3-exports) 提供支持，[vue-dark-switch](https://github.com/dishait/vue-dark-switch) 提供暗黑模式下的测试。

<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
