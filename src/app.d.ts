// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

export declare global {
	declare namespace svelte.JSX {
		interface HTMLProps {
			fetchpriority?: 'auto' | 'high' | 'low';
		}
	}

	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}

	interface CartState {
		subtotal: number;
		items: { count: number };
	}

	interface SnipcartState {
		cart: CartState;
	}

	interface Window {
		Snipcart: {
			ready: Promise;
			store: { getState: () => SnipcartState; subscribe: (callback: () => void) => () => void };
		};
	}
}
