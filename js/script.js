const app = {
    data() {
        return {
            inventario: [
                { nombre: 'Kiwi', cantidad: 2, precioUnitario: 30, total: 60 },
                { nombre: 'Uvas Vardes', cantidad: 3, precioUnitario: 15, total: 45 },
                { nombre: 'Mango', cantidad: 1, precioUnitario: 20, total: 20 }
            ],
            nuevaFrutaNombre: '',
            nuevaFrutaCantidad: 0,
            nuevaFrutaPrecio: 0
        };
    },
    computed: {
        subtotal() {
            return this.inventario.reduce((sum, item) => sum + item.total, 0);
        },
        iva() {
            return this.subtotal * 0.15;
        },
        total() {
            return this.subtotal + this.iva;
        },
        totalCantidad() {
            return this.inventario.reduce((sum, item) => sum + item.cantidad, 0);
        }
    },
    methods: {
        calcularTotal(index) {
            const item = this.inventario[index];
            item.total = item.cantidad * item.precioUnitario;
        },
        incrementarCantidad(index) {
            this.inventario[index].cantidad++;
            this.calcularTotal(index);
        },
        decrementarCantidad(index) {
            if (this.inventario[index].cantidad > 0) {
                this.inventario[index].cantidad--;
                this.calcularTotal(index);
            }
        },
        agregarFruta() {
            if (this.nuevaFrutaNombre && this.nuevaFrutaCantidad > 0 && this.nuevaFrutaPrecio > 0) {
                this.inventario.push({
                    nombre: this.nuevaFrutaNombre,
                    cantidad: this.nuevaFrutaCantidad,
                    precioUnitario: this.nuevaFrutaPrecio,
                    total: this.nuevaFrutaCantidad * this.nuevaFrutaPrecio
                });
                this.nuevaFrutaNombre = '';
                this.nuevaFrutaCantidad = 0;
                this.nuevaFrutaPrecio = 0;
            }
        }
    }
};

Vue.createApp(app).mount('#app');
