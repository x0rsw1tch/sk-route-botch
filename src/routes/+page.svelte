<script>
import { onMount } from "svelte";

let out = {};
async function doFetch() {
  return await fetch("/api/route1").then((response) => response.json());
}

onMount(async () => {
  await doFetch().then((data) => {
    out = data;
  });
});
</script>

Result: {JSON.stringify(out)}
