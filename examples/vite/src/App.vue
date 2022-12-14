<script lang="ts" setup>
import { Switch } from 'vue-dark-switch'
import { useScrollBar, randomRgba } from 'use-scroll-bar'

const {
	width,
	thumbBackgroundColor,
	darkThumbBackgroundColor
} = useScrollBar()

width.value = '12px'

setInterval(() => {
	thumbBackgroundColor.value = randomRgba()
	darkThumbBackgroundColor.value = 'white'
}, 1000)
</script>

<template>
	<div class="h-300vh">
		<div class="fixed top-50px left-50%">
			<Switch />
		</div>
	</div>
</template>
