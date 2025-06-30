// routes.js should export your route definitions like this:
// export default [{ path: '/', component: Home }, ...]
import routes from './routes.js';

// Global reactive store
const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark') || 'false'),
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

// Create Vue app
const app = Vue.createApp({
    setup() {
        return { store };
    }
});

// Create router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// Install router into app
app.use(router);

// Mount app to DOM
app.mount('#app');
