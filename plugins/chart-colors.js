export default ({ $config: { COLOR_SEED }}, inject ) => {
    inject('chartColor', {
        get(array) {
            return array.map(function(str) {
                var hash = COLOR_SEED ?? 25000;
                if (str.length === 0) return hash;
                for (var i = 0; i < str.length; i++) {
                    hash = str.charCodeAt(i) + ((hash << 5) - hash);
                    hash = hash & hash;
                }
                var color = '#';
                for (var i = 0; i < 3; i++) {
                    var value = (hash >> (i * 8)) & 255;
                    color += ('00' + value.toString(16)).substr(-2);
                }
                return color;
            })
        },
    })
}