<template>
	<div class="doc">
		<section>
			<h1>{{ name }}</h1>
			<p v-if="description">{{ description }}</p>
		</section>
		<section class="examples" v-if="$slots.default">
			<h2>Examples</h2>
			<slot></slot>
		</section>
		<section class="reference" v-if="reference">
			<h2>Reference</h2>
			<template v-if="reference.props">
				<ReferenceProps :props="reference.props"/>
			</template>
			<template v-if="reference.slots">
				<ReferenceSlots :slots="reference.slots"/>
			</template>
		</section>
	</div>
</template>
<script>
import ReferenceProps from './ReferenceProps';
import ReferenceSlots from './ReferenceSlots';

export default {
	components: { ReferenceProps, ReferenceSlots },
	props: {
		name: String,
		description: String,
		reference: Object
	}
};
</script>
<style lang="scss" scoped>
.doc {
	section {
		&:not(:first-child) {
			border-top: 1px solid #999;
		}
	}
}
</style>
