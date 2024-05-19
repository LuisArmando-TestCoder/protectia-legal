<script lang="ts">
  import { onMount } from "svelte";
  let currentPage = "";

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    currentPage = urlParams.get("p") || "";
  });
</script>

<a href="">Home</a>
<a href="">Go to site</a>
<a href="">See more sites from this profile</a>
<img src="" alt="">

<h3>Components</h3>
<ul>
    <li>
        <a href="">
            <img src="" alt="">
        </a>
    </li>
</ul>

<h3>Functions</h3>
<ul>
    <li>
        <a href="">
            <img src="" alt="">
        </a>
    </li>
</ul>
{currentPage}