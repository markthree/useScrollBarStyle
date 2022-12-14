<div align="center">
    <img width="100%" height="100%" src="./snapshot.gif" />
    <h1>useScrollBarStyle</h1>
    <p>响应式地变换滚动条样式 (vue3)</p>
</div>

<br />

## Motivation

大多数人都会选择改掉 `web` 原生难看的滚动条样式，但是原生滚动条的选择器实在是复杂。所以有了这个库，当然得益于 `vue3` 的支持，一切都是响应式可编程的，例如你可以根据不同场景变换滚动条的样式，尤其是在 `web` 网站有多主题需求时，一切都会变得简单。

<br />

## Usage

### install

```shell
npm i use-scroll-bar-style
```

### import

```html
<script setup lang="ts">
	import { useScrollBarStyle } from 'use-scroll-bar-style'

	const {
		width,
		thumbBackgroundColor,
		darkThumbBackgroundColor
		// ... etc
	} = useScrollBarStyle()

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
