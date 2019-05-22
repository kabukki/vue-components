<template>
	<ComponentDoc
		name="Select"
		description="A wrapper around the HTML select element."
		:reference="reference"
	>
		<h2>Legacy (VueSelect export)</h2>
		<h3>Text</h3>
		<VueSelect
			placeholder="Select an option"
			:options="text.options"
			v-model="text.selected"
		/>
		<h3>Text (multiple)</h3>
		<VueSelect
			placeholder="Select options"
			multiple
			:options="multiple.options"
			v-model="multiple.selected"
		/>
		<h3>Objects</h3>
		<VueSelect
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
		</VueSelect>
		<h3>AJAX</h3>
		<VueSelect
			placeholder="Select an option"
			:options="ajax.options"
			label="full_name"
			@search="onAjaxSearch"
			v-model="ajax.selected"
		>
			<div slot="option" slot-scope="option">
				<strong>{{ option.name }}</strong> {{ option.description }}
			</div>
		</VueSelect>
		<hr>
		<p>See <a href="https://vue-select.org/" target="vue-select">https://vue-select.org/</a> for full component documentation.</p>
		<hr>
		<h2>New</h2>
		<KAlert type="error">
			<strong>Disclaimer!</strong> The select component does not work with objects for now. In the future a new version may be created to address this.
		</KAlert>
		<h3>Text</h3>
		<KSelect v-model="text.selected">
			<KOption :value="option" v-for="option in text.options" :key="option">{{ option }}</KOption>
		</KSelect>
		<KSelect v-model="text.selected" disabled>
			<KOption :value="option" v-for="option in text.options" :key="option">{{ option }}</KOption>
		</KSelect>
		<h3>Icon</h3>
		<KSelect icon="star" v-model="text.selected">
			<KOption :value="option" v-for="option in text.options" :key="option">{{ option }}</KOption>
		</KSelect>
		<h3>Clearable</h3>
		<KSelect clearable v-model="text.selected">
			<KOption :value="option" v-for="option in text.options" :key="option">{{ option }}</KOption>
		</KSelect>
		<h3>With label</h3>
		<KSelect label="This is a label" v-model="text.selected">
			<KOption :value="option" v-for="option in text.options" :key="option">{{ option }}</KOption>
		</KSelect>
		<h3>With helper text</h3>
		<KSelect help="This is a helper text!" v-model="text.selected">
			<KOption :value="option" v-for="option in text.options" :key="option">{{ option }}</KOption>
		</KSelect>
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
			},
			reference: {
				props: [
					{
						name: 'disabled',
						type: Boolean,
						default: false,
						description: 'disable the component'
					}, {
						name: 'icon',
						type: String,
						default: undefined,
						description: 'Name of the Font Awesome icon to prepend to the input. You must install the icon separately.'
					}, {
						name: 'clearable',
						type: Boolean,
						default: false,
						description: 'Appends a clear button to the input'
					}, {
						name: 'label',
						type: String,
						default: undefined,
						description: 'The input label or title'
					}, {
						name: 'help',
						type: String,
						default: undefined,
						description: 'Adds a small helper text after the input'
					}
				]
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
