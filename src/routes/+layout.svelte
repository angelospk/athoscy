<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	let valueSingle: string = 'gr';
	import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

import gr from "../gr.json";
import ru from "../ru.json";
register('en', () => import('../en.json'));
register('gr', () => import('../gr.json'));
register('ru', () => import('../ru.json'));


init({
  fallbackLocale: 'gr',
  initialLocale: getLocaleFromNavigator(),
});

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/home">
					<img src="src/lib/athos.png" alt="athos" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-filled"
					href="/"
				>
					Αρχική
				</a><a
					class="btn btn-sm variant-filled"
					href="/ltd"
				>
					λτδ
				</a><a
					class="btn btn-sm variant-filled"
					href="/ekthesi"
					rel="noreferrer"
				>
					Έκθεση
				</a><a
					class="btn btn-sm variant-filled"
					href="/contact"
					rel="noreferrer"
				>
					Επικοινωνία
				</a>
				<a
					class="btn btn-sm variant-filled"
					href="/video"
				>
					Βίντεο
				</a>

	
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	

	<slot />
</AppShell>
