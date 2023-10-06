<template>
	<div>
		<h1>Cookie Test</h1>
		<button @click="handleClick">click me</button>
	</div>
</template>

<script setup lang="ts">
	import useMyComposable from "@/src/composables/test.ts"
	const counter = useCookie("counter", {
		decode(value) {
			return parseInt(value)
		},
	})

	const handleClick = () => {
		console.log(counter.value)
		useMyComposable()
	}
</script>

<style scoped></style>
