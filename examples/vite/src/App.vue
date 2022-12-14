<script lang="ts" setup>
import { Switch } from 'vue-dark-switch'
import {
	useScrollBarStyle,
	randomRgba
} from 'use-scroll-bar-style'

const {
	width,
	thumbBackgroundColor,
	darkThumbBackgroundColor
} = useScrollBarStyle()

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
