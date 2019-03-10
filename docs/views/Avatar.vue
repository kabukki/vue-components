<template>
	<ComponentDoc
		name="Avatar"
		description="An avatar is a styled img tag with additional properties"
		:reference="reference"
	>
		<h3>Size</h3>
		<div class="flex">
			<KAvatar :src="logo" :size="20"/>
			<KAvatar :src="logo" :size="40"/>
			<KAvatar :src="logo" :size="60"/>
			<KAvatar :src="logo" :size="80"/>
			<KAvatar :src="logo" :size="100"/>
		</div>
		<h3>Hoverable</h3>
		<div class="flex">
			<KAvatar :src="logo" hoverable :size="20"/>
			<KAvatar :src="logo" hoverable :size="40"/>
			<KAvatar :src="logo" hoverable :size="60"/>
			<KAvatar :src="logo" hoverable :size="80"/>
			<KAvatar :src="logo" hoverable :size="100"/>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			logo: require('@/assets/vue.png'),
			reference: {
				props: [
					{
						name: 'hoverable',
						type: Boolean,
						default: false,
						description: 'x'
					}, {
						name: 'size',
						type: Number,
						default: 40,
						description: 'Avatar size in px'
					}
				]
			}
		};
	}
};
</script>
