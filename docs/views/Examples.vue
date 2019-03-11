<template>
	<ComponentDoc
		name="Examples"
		description="A collection of layout examples using these components."
	>
		<KCard id="ex1" hoverable>
			<section>
				<h1>Lorem ipsum dolor sit amet</h1>
			</section>
			<section>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus neque.
					Mauris aliquam et turpis vitae dictum. Phasellus at lorem lorem. Quisque vitae augue nulla.
					Mauris et vulputate nisi. Cras sagittis vulputate varius. Quisque ut diam luctus,
					tincidunt lacus nec, imperdiet neque. Proin elementum erat sed dictum porttitor.
					Pellentesque id neque vel neque aliquam rhoncus nec non magna. Sed varius,
					mauris eget cursus eleifend, tellus enim volutpat arcu, in tempor arcu purus vitae dolor.
				</p>
				<div>
					<KChip color="primary">Lorem</KChip>
					<KChip color="secondary">ipsum</KChip>
					<KChip color="accent">dolor</KChip>
					<KChip color="accent">sit amet</KChip>
				</div>
			</section>
			<section>
				<div class="error">
					<KAlert type="error">Lorem ipsum dolor sit amet</KAlert>
				</div>
				<div class="actions">
					<KButton flat :disabled="ex1.loading">Cancel</KButton>
					<KButton color="success" :loading="ex1.loading" @click="ex1OnClick">Agree</KButton>
				</div>
			</section>
		</KCard>
		<hr>
		<KCard id="ex2" hoverable>
			<KCarousel :height="200" :images="ex2.images"/>
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus neque.
				Mauris aliquam et turpis vitae dictum. Phasellus at lorem lorem. Quisque vitae augue nulla.
				Mauris et vulputate nisi. Cras sagittis vulputate varius. Quisque ut diam luctus,
				tincidunt lacus nec, imperdiet neque. Proin elementum erat sed dictum porttitor.
				Pellentesque id neque vel neque aliquam rhoncus nec non magna. Sed varius,
				mauris eget cursus eleifend, tellus enim volutpat arcu, in tempor arcu purus vitae dolor.
			</p>
		</KCard>
	</ComponentDoc>
</template>
<script>
export default {
	data () {
		return {
			ex1: {
				loading: false,
			},
			ex2: {
				images: [
					require('@/assets/wp1.jpeg'),
					require('@/assets/wp2.jpeg'),
					require('@/assets/wp3.jpeg'),
				]
			}
		};
	},
	methods: {
		ex1OnClick () {
			this.ex1.loading = true;
			setTimeout(_ => {
				this.ex1.loading = false;
			}, 1000);
		}
	}
};
</script>
<style lang="scss" scoped>
#ex1 {
	section {
		padding: 10px 0;

		&:not(:last-child) {
			border-bottom: 1px solid #999;
		}
		&:last-child {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			align-items: center;

			.error {
				flex: 1;
				margin-right: 10px;
			}
		}
	}
}

#ex2 {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
</style>
