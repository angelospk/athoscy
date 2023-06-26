<script>
	import { get } from 'svelte/store';
import {csvDataStore, tabPage} from '../../csvdata';
const t=$csvDataStore
</script>
{get(tabPage)}
videos...


