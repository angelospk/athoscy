<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// import '../theme.postcss'
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, TabGroup } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import {  onMount } from 'svelte';
	import {Tab} from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
  	import Papa from 'papaparse';
	import { writable } from 'svelte/store';
	let data = [];
	 
	import {csvDataStore, tabPage} from '../csvdata';
	import {fetchXLSXdata} from '../getdata'
	import { goto } from '$app/navigation';
	import TabAnchor from '../TabAnchor.svelte'
	let tabSet=tabPage;
onMount(async () => {
//   const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmh5F6SfUqZdK4wPc8gG36n12Tz1Bg69xSLcG9eZpyke16FoniwDk3ztGGJJNE38RSuaJQ-icX_1AP/pub?gid=113001344&single=true&output=csv';
  const url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmh5F6SfUqZdK4wPc8gG36n12Tz1Bg69xSLcG9eZpyke16FoniwDk3ztGGJJNE38RSuaJQ-icX_1AP/pub?output=xlsx"
  let data:any = await fetchXLSXdata(url);
  csvDataStore.set(data);
  console.log(data);
});


	let valueSingle: string = 'gr';
	// import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

	const navItems = [
        { href: '/', label: 'Αρχική' },
        { href: '/ltd', label: 'λτδ' },
        { href: '/ekthesi', label: 'Έκθεση' },
        { href: '/contact', label: 'Επικοινωνία' },
        { href: '/video', label: 'Βίντεο' },
    ];



</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<div class="bg-primary-100">
		<AppBar>
		
			<svelte:fragment slot="lead">
			<a href="/">
				<img src="https://cdn.discordapp.com/attachments/814528759478747187/1122532599198404709/athos.png" alt="athos" />
			</a>	
		</svelte:fragment>
		<svelte:fragment slot="trail">
		
		<TabGroup>
				{#each navItems as item}
				<TabAnchor href={item.href} selected={$page.url.pathname === item.href}>{item.label}</TabAnchor>
				{/each}
				<!-- <TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
				<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>About</TabAnchor> -->
			</TabGroup>
			<LightSwitch /> 	
		</svelte:fragment>
			<!-- <a href="/">
					<img src="https://cdn.discordapp.com/attachments/814528759478747187/1122532599198404709/athos.png" alt="athos" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-filled "
					href="/"
				>
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
				</a> -->

	
				
		
		</AppBar>
	</div>	
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="container mx-auto my-4 grid place-items-center pt-6 text-center content-center overflow-auto scrollbar-hide">

	<slot />
</div>
</AppShell>
