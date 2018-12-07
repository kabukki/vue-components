export default {
	props: {
		color: String
	},
	methods: {
		setColor (color, data) {
			if (color) {
				data.class = {
					...data.class,
					[color]: true
				};
			}
			return data;
		}
	}
};
