app.component('product-display', {
    setup() {
        const stock = 10
        const inStockComputed = computed(() => {
            if (stock > 10) {
                return 'In Stock';
            }
            else if (stock <= 10 && stock >= 1) {
                return 'last 10 products';
            }
            else {
                return 'Out Stock';
            }
        })

        const image = ref("./assets/images/t-shirt-blue.png") //inicializado com azul
        const changeImage = (variant) => {
            image.value = variant;
        }


        return {
            title: ref("T-shirt"),
            image,
            details: ['Poliester', 'Beateful', 'more informations'],
            variants: [{ id: 1, color: 'blue', image: "./assets/images/t-shirt-blue.png" }, { id: 2, color: 'green', image: "./assets/images/t-shirt-green.png" }],
            changeImage,
            inStockComputed,
            stock
        }
    },
    template:
        `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p> {{ inStockComputed }} </p>
                <ul>
                    <li v-for="detail in details">
                        {{detail}}
                    </li>
                </ul>
                <div 
                class="color-circle"
                :style="{backgroundColor: variant.color}"
                v-for="variant in variants" 
                :key="variant.id"
                @mouseover="changeImage(variant.image)"
                >
                </div>
                <button 
                class="button" 
                :class="{disabledButton : stock < 1 }"
                @click="$emit('add-to-cart')" 
                :disabled="stock < 1"
                >Add to Cart</button>
            </div>
        </div>
    </div>
    `
})