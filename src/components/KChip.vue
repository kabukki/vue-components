<script>
import Colorable from '../mixins/Colorable';

export default {
	mixins: [ Colorable ],
	computed: {
		classes () {
			return {
				'k-chip': true
			};
		}
	},
	render (h) {
		const data = this.setColor(this.color || 'purple', {
			class: this.classes,
			attrs: this.$attrs
		});
		
		return h('span', data, [ this.$slots.default ]);
	}
};
</script>
