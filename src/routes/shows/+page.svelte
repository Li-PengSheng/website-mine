<script lang="ts">
import * as Card from "$lib/components/ui/card";
import { Button } from "$lib/components/ui/button";

// Svelte 5 写法
let { data } = $props();
</script>

<div class="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.shows as show}
        <Card.Root>
            <Card.Header>
                <Card.Title>Episode {show.number}</Card.Title>
                <Card.Description>{show.title}</Card.Description>
            </Card.Header>
            <Card.Content>
                <p class="text-sm text-muted-foreground">{show.date}</p>
            </Card.Content>
            <Card.Footer>
                <Button variant="outline" href="/show/{show.number}">View Details</Button>
            </Card.Footer>
        </Card.Root>
    {/each}
</div>


<!-- <script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { ChevronLeft } from "lucide-svelte";
    
    let { data } = $props();
</script>

<div class="max-w-3xl mx-auto">
    <Button variant="ghost" href="/shows" class="mb-6">
        <ChevronLeft class="mr-2 h-4 w-4" /> 返回列表
    </Button>

    <header class="mb-8">
        <p class="text-primary font-mono font-bold">Episode {data.show.number}</p>
        <h1 class="text-4xl font-extrabold tracking-tight mt-2">{data.show.title}</h1>
        <p class="text-muted-foreground mt-2">{data.show.date}</p>
    </header>

    <article class="prose prose-slate dark:prose-invert max-w-none">
        {@html data.html}
    </article>
</div> -->