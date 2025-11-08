new Vue({
    el: '#app',
    data: {
        proxies: [],
        error: null
    },
    mounted() {
        this.getProxies();
    },
    methods: {
        getProxies() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://raw.githubusercontent.com/hookzof/socks5_list/master/tg/mtproto.json");
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    this.proxies = data;
                } else {
                    this.error = "Failed to load proxies. Please try again later.";
                }
            };
            xhr.onerror = () => {
                this.error = "Failed to load proxies. Please check your internet connection.";
            };
            xhr.send();
        },
        copyProxyLink(proxy) {
            const text = `tg://proxy?server=${proxy.host}&port=${proxy.port}&secret=${proxy.secret}`;
            navigator.clipboard.writeText(text).then(() => {
                alert('Proxy link copied to clipboard!');
            }).catch(() => {
                alert('Failed to copy proxy link. Please try again.');
            });
        }
    }
});