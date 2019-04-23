<template>
	<ComponentDoc
		name="Select"
		description="This is a copy of Vue-Select. The API is the same."
	>
		<h3>Texte</h3>
		<KSelect
			placeholder="Select an option"
			:options="text.options"
			v-model="text.selected"
		/>
		<h3>Texte (multiple)</h3>
		<KSelect
			placeholder="Select options"
			multiple
			:options="multiple.options"
			v-model="multiple.selected"
		/>
		<h3>Objects</h3>
		<KSelect
			class="objects"
			placeholder="Select an option"
			:options="objects.options"
			:getOptionLabel="option => option.id.value"
			v-model="objects.selected"
		>
			<div slot="selected-option" slot-scope="option">
				{{ option.name.first }} {{ option.name.last }}
			</div>
			<div class="option" slot="option" slot-scope="option">
				<img :src="option.picture.thumbnail"/>
				{{ option.name.title }}. {{ option.name.first }} {{ option.name.last }}
			</div>
		</KSelect>
		<h3>AJAX</h3>
		<KSelect
			placeholder="Select an option"
			:options="ajax.options"
			label="full_name"
			@search="onAjaxSearch"
			v-model="ajax.selected"
		>
			<div slot="option" slot-scope="option">
				<strong>{{ option.name }}</strong> {{ option.description }}
			</div>
		</KSelect>
		<hr>
		<p>See <a href="https://vue-select.org/" target="vue-select">https://vue-select.org/</a> for full component documentation.</p>
	</ComponentDoc>
</template>
<script>
export default {
	data ()	 {
		return {
			text: {
				selected: '',
				options: ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
			},
			multiple: {
				selected: [],
				options: ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
			},
			objects: {
				selected: null,
				options: []
			},
			ajax: {
				selected: null,
				options: []
			}
		};
	},
	methods: {
		async onAjaxSearch (search, loading) {
			if (search.length === 0) return;
			try {
				loading(true);
				const data = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(search)}`);
				const { items } = await data.json();

				this.ajax.options = items;
			} catch (err) {
				console.log(err);
			} finally {
				loading(false);
			}
		}
	},
	async created () {
		try {
			const data = await fetch('https://randomuser.me/api?results=10');
			const { results } = await data.json();

			this.objects.options = results;
		} catch (err) {
			console.log(err);
		}
	}
};
</script>
<style lang="scss" scoped>
.objects {
	.option {
		display: flex;
		align-items: center;

		img {
			border-radius: 50%;
			margin-right: 20px;
		}
	}
}
</style>
