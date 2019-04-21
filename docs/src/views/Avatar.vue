<template>
	<ComponentDoc
		name="Avatar"
		description="An avatar is a styled img tag with additional properties"
		:reference="reference"
	>
		<h3>Size</h3>
		<div class="flex">
			<KAvatar :src="avatar" :size="20"/>
			<KAvatar :src="avatar" :size="40"/>
			<KAvatar :src="avatar" :size="60"/>
			<KAvatar :src="avatar" :size="80"/>
			<KAvatar :src="avatar" :size="100"/>
		</div>
		<h3>Hoverable</h3>
		<div class="flex">
			<KAvatar :src="avatar" hoverable :size="20"/>
			<KAvatar :src="avatar" hoverable :size="40"/>
			<KAvatar :src="avatar" hoverable :size="60"/>
			<KAvatar :src="avatar" hoverable :size="80"/>
			<KAvatar :src="avatar" hoverable :size="100"/>
		</div>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			avatar: require('@/assets/avatar1.jpeg'),
			reference: {
				props: [
					{
						name: 'src',
						type: String,
						default: undefined,
						description: 'image src'
					}, {
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
