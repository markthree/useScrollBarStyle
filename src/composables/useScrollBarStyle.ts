import { watch as _watch, ref, watch } from 'vue'
import {
	tryOnScopeDispose,
	createSharedComposable
} from '@vueuse/core'
import type { DeepMaybeRef, MaybeRef } from '@vueuse/core'

export const style = `
/*
* 全局滚动条
*/
::-webkit-scrollbar {
	width: var(--scrollbar-width);
}

::-webkit-scrollbar,
::-webkit-scrollbar-track {
	background-color: var(--scrollbar-background-color);
}

::-webkit-scrollbar-thumb {
	background-color: var(--scrollbar-thumb-background-color);
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
	border-radius: var(--scrollbar-border-radius);
}

/*
* 全局滚动条(暗黑模式)
*/
html.dark ::-webkit-scrollbar,
html.dark ::-webkit-scrollbar-track {
	background-color: var(--dark-scrollbar-background-color);
}

html.dark ::-webkit-scrollbar-thumb {
	background-color: var(--dark-scrollbar-thumb-background-color);
}`

export function mount<
	K extends keyof HTMLElementTagNameMap
>(tag: K, content: string) {
	const dom = window.document.createElement(tag)
	dom.append(content)
	window.document.head.append(dom)
	return dom
}

export function createTransformDefaultCssVar(
	dom: ReturnType<typeof mount>,
	cssVarPrefix = ''
) {
	return function transformDefaultCssVar(
		name: string,
		defaultValue: string
	) {
		const cssVar = cssVarPrefix + name
		dom.textContent = dom.textContent.replace(
			new RegExp(`var\\(${cssVar}\.\*\\)`),
			`var(${cssVar}, ${defaultValue})`
		)
		return defaultValue
	}
}

export function randomRgba() {
	function R(alpha = false) {
		if (!alpha) {
			return Math.floor(Math.random() * 255)
		}
		return Math.random() * 1
	}
	''.replace

	return `rgba(${R()}, ${R()}, ${R()}, ${R(true)})`
}

export interface IUseScrollBarOptions {
	width: string
	borderRadius: string
	backgroundColor: string
	darkBackgroundColor: string
	thumbBackgroundColor: string
	darkThumbBackgroundColor: string
}

export const useScrollBarStyle = createSharedComposable(
	function (
		options: DeepMaybeRef<
			Partial<IUseScrollBarOptions>
		> = {}
	) {
		const {
			width = '8px',
			borderRadius = '10px',
			backgroundColor = '#eceff1',
			darkBackgroundColor = '#212529',
			thumbBackgroundColor = '#b0bec5',
			darkThumbBackgroundColor = '#343a40'
		} = options

		const dom = mount('style', style)

		const tranformDefaultCssVar =
			createTransformDefaultCssVar(dom, `--scrollbar-`)

		const tranformDefaultDarkCssVar =
			createTransformDefaultCssVar(dom, `--dark-scrollbar-`)

		const disposables = []

		function createEffectRef(
			prop: string,
			defaultCssVar: MaybeRef<string>,
			isDark = false
		) {
			const propRef = ref(defaultCssVar)
			const tranform = isDark
				? tranformDefaultDarkCssVar
				: tranformDefaultCssVar

			const stop = watch(
				propRef,
				nv => {
					tranform(prop, nv)
				},
				{ immediate: true }
			)

			disposables.push(stop)

			return propRef
		}

		function cleanUp() {
			disposables.forEach(disposable => disposable())
		}

		// 自动清除副作用 (vue 组件中)
		tryOnScopeDispose(() => {
			cleanUp()
		})

		return {
			cleanUp,
			width: createEffectRef('width', width),
			borderRadius: createEffectRef(
				'border-radius',
				borderRadius
			),
			backgroundColor: createEffectRef(
				'background-color',
				backgroundColor
			),
			darkBackgroundColor: createEffectRef(
				'background-color',
				darkBackgroundColor,
				true
			),
			thumbBackgroundColor: createEffectRef(
				'thumb-background-color',
				thumbBackgroundColor
			),
			darkThumbBackgroundColor: createEffectRef(
				'thumb-background-color',
				darkThumbBackgroundColor,
				true
			)
		}
	}
)
