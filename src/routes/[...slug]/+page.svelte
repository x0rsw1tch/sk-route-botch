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

  <h1>Dynamic routed page</h1>
  
  Result: {JSON.stringify(out)}
  