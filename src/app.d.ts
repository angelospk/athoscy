// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { setLocale } from './i18n/i18n-svelte'
setLocale()
import { initI18n } from './i18n/i18n-svelte'

initI18n('en')
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
