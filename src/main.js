import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'World',
		text: 'Let go eat!',
		para: 'parameter'
	}
});

export default app;