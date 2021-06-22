const app = new Vue (
    {
        el:"#app",
        data: {
            c: 0,
            pics: [
                "https://picsum.photos/800/500?random=1",
                "https://picsum.photos/800/500?random=2",
                "https://picsum.photos/800/500?random=3",
                "https://picsum.photos/800/500?random=4",
                "https://picsum.photos/800/500?random=5",
                "https://picsum.photos/800/500?random=6"
          ]
        },
        methods: {
            next() {
                if (this.c == this.pics.length - 1) {
                    this.c = 0
                } else {
                    this.c++
                }
            },
            prev() {
                if (this.c == 0) {
                    this.c = this.pics.length - 1
                } else {
                    this.c--;
                }
            },
            picSwitch(index) {
                this.c == index;
            }
        }
    }
);