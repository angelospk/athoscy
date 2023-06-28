<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// import '../theme.postcss'
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		TabGroup,
		AppRail,
		AppRailAnchor,
		AppRailTile
	} from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { Tab } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Papa from 'papaparse';
	import { writable } from 'svelte/store';
	let data = [];
	let currentTile: number = 0;
	import { csvDataStore, tabPage } from '../csvdata';
	import { fetchXLSXdata } from '../getdata';
	import { goto } from '$app/navigation';
	import TabAnchor from '../TabAnchor.svelte';
	let tabSet = tabPage;
	onMount(async () => {
		//   const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmh5F6SfUqZdK4wPc8gG36n12Tz1Bg69xSLcG9eZpyke16FoniwDk3ztGGJJNE38RSuaJQ-icX_1AP/pub?gid=113001344&single=true&output=csv';
		const url =
			'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmh5F6SfUqZdK4wPc8gG36n12Tz1Bg69xSLcG9eZpyke16FoniwDk3ztGGJJNE38RSuaJQ-icX_1AP/pub?output=xlsx';
		let data: any = await fetchXLSXdata(url);
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
		{ href: '/video', label: 'Βίντεο' }
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
						<img
							src="https://cdn.discordapp.com/attachments/814528759478747187/1122532599198404709/athos.png"
							alt="athos"
						/>
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<TabGroup class="w-0 sm:w-auto">
						{#each navItems as item}
							<TabAnchor href={item.href} selected={$page.url.pathname === item.href}
								>{item.label}</TabAnchor
							>
						{/each}
						<!-- <TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
				<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>About</TabAnchor> -->
					</TabGroup>
					<LightSwitch class="hidden sm:block"/>
				</svelte:fragment>
				<div class="sm:hidden ms-20">(icon)</div>
			</AppBar>
			<AppBar class="hidden sm:unhidden" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				(title)
				<svelte:fragment slot="trail">(actions)</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div
		class="container mx-auto my-4 pt-6 snap-center text-center overflow-auto scrollbar-hide"
	>
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<footer class="bg-[#4e0f10] text-white text-base font-sans antialiased">
			<div class="container px-6 py-10 mx-auto">
			  <div class="flex flex-wrap ">
		  
				<!-- Column 1 -->
				<div class="w-full lg:w-1/4 mb-6 lg:mb-0">
				  <h3 class="mb-4 text-lg">Έκθεση</h3>
				  <p class="font-bold">
					Κ . Ε . ΑΘΩ ΛΤΔ<br>
					Κοραή 14<br>
					Τ.Κ.1016<br>
					Πλησίον της Ιερας Αρχιεπισκοπής Κύπρου
				  </p>
				  <!-- Map -->
				  <div class="mt-4">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.370484414824!2d33.369026399999996!3d35.1723175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de19122da093a9%3A0x6854493d3dcdb313!2zzpouIM6VLiDOkc6YzqkgzpvOpM6U!5e0!3m2!1sen!2sus!4v1687908801860!5m2!1sen!2sus" frameborder="0" allowfullscreen="" class="w-auto h-48"></iframe>
				  </div>
				  <h3 class="mt-6 mb-4 text-lg">Ωράριο λειτουργίας έκθεσης</h3>
				  <p>
					<strong>Δευτέρα:</strong>09:00 - 14:00<br>
					<strong>Τρίτη:</strong>09:00 - 14:00<br>
					<strong>Τετάρτη:</strong>09:00 - 14:00<br>
					<strong>Πέμπτη:</strong>09:00 - 14:00<br>
					<strong>Παρασκευή:</strong>09:00 - 14:00<br>
					<br></p>
				</div>
		  
				<!-- Column 2 -->
				<div class="w-full lg:w-1/4 mb-6 lg:mb-0">
				  <h3 class="mb-4 text-lg">Βιοτεχνία</h3>
				  <p>
					<strong>Κ . Ε . ΑΘΩ ΛΤΔ</strong><br>
					Bιοτεχνία κατασκευής βυζαντινών χρυσοκεντημάτων &amp; εκκλησιαστικών ειδών.<br>
					Λυκαβητού 50<br>
					Τ.Κ. 2401<br>
					Μακεδονίτισσα – Λευκωσία
				  </p>
				  <!-- Map -->
				  <div class="mt-4">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5039481290805!2d33.3085714147659!3d35.144050580323054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1a53dfc20c8b%3A0xa0def0ac5d0c2be9!2zzpouIM6VLiDOkc6YzqkgzpvOpM6U!5e0!3m2!1sen!2sus!4v1489606989265" frameborder="0" allowfullscreen="" class="w-auto h-48"></iframe>
				  </div>
				  <h3 class="mt-6 mb-4 text-lg">Ωράριο λειτουργίας - Βιοτεχνίας</h3>
				  <p>Η επίσκεψη στην βιοτεχνία γίνεται μόνο με ραντεβού...<br>
				  <strong>Tηλ:</strong> 00357 - 22658186<br>
				  <strong>Κιν:</strong> 00357 - 99517627 <br>
				</p>
				</div>
		  
				<!-- Column 3 -->
				<div class="w-full lg:w-1/4 mb-6 lg:mb-0">
				  <h3 class="mb-4 text-lg">FACEBOOK</h3>
				  <div class="w-full h-60 overflow-hidden">
					<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fathocy%2F&amp;tabs=timeline&amp;..." frameborder="0"></iframe>
				  </div>
				</div>
		  
				<!-- Column 4 -->
				<div class="w-full lg:w-1/4">
				  <h3 class="mb-4 text-lg">Επικοινωνία</h3>
				  <p>
					<strong>Τηλ:</strong> 00357 - 22658186<br>
					<strong>Κιν:</strong> 00357 - 99517627 <br>
					<strong>Φαξ:</strong> 00357 - 22658187<br>
					<strong>email:</strong> athocy@gmail.com<br>
					<strong>website:</strong> <a href="http://www.athocy.com" class="text-blue-400">www.athocy.com</a>
				  </p>
			
				
				</div>
		  
			  </div>
			  
			  <!-- Footer Copy -->
			  <div class="flex items-center justify-between mt-10 border-t border-gray-300 pt-5">
				<div class="w-1/2">
				  <a href="/" class="font-medium text-sm text-[#861719]">ΑΘΩ λτδ</a> – Βυζαντινά Εκκλησιαστικά χρυσοκεντημάτα
				</div>
				<div class="w-1/2 text-right text-sm ">
				  ΒΙΟΤΕΧΝΙΑ ΚΑΤΑΣΚΕΥΗΣ ΒΥΖΑΝΤΙΝΩΝ ΧΡΥΣΟΚΕΝΤΗΜΑΤΩΝ &amp; ΕΚΚΛΗΣΙΑΣΤΙΚΩΝ ΕΙΔΩΝ <a href="/" class="font-medium text-[#861719]">ΑΘΩ λτδ</a>
				</div>
			  </div>
		  
			</div>
		  </footer>	
	
	<!-- <footer class="border-t border-opacity-15 py-4 px-6 bg-surface text-white uppercase text-md font-semibold tracking-wider">
			<div class="flex flex-col md:flex-row justify-between">
			  <div class="mb-2 md:mb-0">
				<a href="/" class="hover:text-gray-300">ΑΘΩ λτδ</a> – Βυζαντινά Εκκλησιαστικά χρυσοκεντημάτα
			  </div>
			  <div class="text-md-right">
				ΒΙΟΤΕΧΝΙΑ ΚΑΤΑΣΚΕΥΗΣ ΒΥΖΑΝΤΙΝΩΝ ΧΡΥΣΟΚΕΝΤΗΜΑΤΩΝ &amp; ΕΚΚΛΗΣΙΑΣΤΙΚΩΝ ΕΙΔΩΝ <a href="/" class="hover:text-gray-300">ΑΘΩ λτδ</a>
			  </div>
			</div>
		  </footer> -->
</svelte:fragment>
</AppShell>
