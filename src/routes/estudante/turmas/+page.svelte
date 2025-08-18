
<script>
    import Turma from '$lib/components/Turma.svelte';
    const turmasLista = false
</script>
<div class="turmas-estudante-container">
    {#if !turmasLista}
        <div class="sem-turmas">
            <p>Não há turmas cadastradas</p>
        </div>
    {:else}
        {#each turmasLista as turma}
            <Turma {turma} />
        {/each}
    {/if}
</div>