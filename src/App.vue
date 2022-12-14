<script lang="ts" setup>
import { Switch } from 'vue-dark-switch'
import {
	randomRgba,
	useScrollBarStyle
} from './composables/useScrollBarStyle'

const {
	width,
	thumbBackgroundColor,
	darkThumbBackgroundColor
} = useScrollBarStyle() // 响应式的

width.value = '10px'

// 每 1 秒变换一次颜色
setInterval(() => {
	thumbBackgroundColor.value = randomRgba()
	darkThumbBackgroundColor.value = randomRgba()
}, 1000)
</script>

<template>
	<div class="h-300vh">
		<div class="fixed top-50px left-50%">
			<Switch />
		</div>
	</div>
</template>
