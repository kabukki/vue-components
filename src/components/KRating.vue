<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

import Colorable from '../mixins/Colorable';

export default {
	mixins: [ Colorable ],
	props: {
		readonly: Boolean,
		max: {
			type: Number,
			default: 5
		},
		value: {
			type: Number,
			required: true
		}
	},
	data () {
		return {
			currentHover: 0
		};
	},
	computed: {
		classes () {
			return {
				'k-rating': true,
				readonly: this.readonly
			}
		}
	},
	methods: {
		onClick (n) {
			this.$emit('input', n);
		},
		onMouseOver (n) {
			this.currentHover = n;
		},
		onMouseLeave () {
			this.currentHover = 0;
		},
		genStars () {
			const stars = [];

			for (let n = 1; n <= this.max; ++n) {
				const star = this.$createElement(
					FontAwesomeIcon,
					{
						props: {
							icon: (n <= (this.currentHover || this.value)) ? faStar : faStarOutline
						},
						class: {
							star: true,
							filled: n <= (this.currentHover || this.value),
							hovering: !this.readonly && this.currentHover > 0 && n <= this.currentHover
						}
					}
				);

				if (!this.readonly) {
					star.data.on = {
						mouseover: this.onMouseOver.bind(this, n),
						mouseleave: this.onMouseLeave.bind(this, n),
						click: this.onClick.bind(this, n)
					};
				}

				stars.push(star);
			}

			return stars;
		}
	},
	render (h) {
		const data = this.setColor(this.color, {
			class: this.classes,
			attrs: this.$attrs
		});
		
		return h('div', data, this.genStars());
	}
};
</script>
