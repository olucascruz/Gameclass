
<script>
	import Header from '$lib/components/Header.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';
    import Turma from '$lib/components/Turma.svelte';
    const turmasLista = false

    let isShowModal = false;

    const toggleShowModal = ()=> isShowModal = !isShowModal;

</script>
<div class="turmas-estudante-container">
    <h2>Turmas</h2>
    {#if !turmasLista}
        <div class="sem-turmas">
            <p> Você ainda não faz parte de nenhuma turma :( </p>
        </div>
        <button class="bt" on:click={toggleShowModal} >Entrar em turma</button>
        {#if isShowModal}
            <div class="modal-entrar-turma">
                <div class="title-modal">
                    <h2>Digite o código da turma</h2>
                </div>
                <div class="content-modal">
                    <form method="POST">
                        <input name="codigo" type="text" placeholder="código da turma">
                        <div class="row-buttons">
                            <button class="bt" on:click={toggleShowModal}>
                                Cancelar
                            </button>
                            <button type="submit" name="entrar" class="bt">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}
    {:else}
        {#each turmasLista as turma}
            <Turma {turma} />
        {/each}
    {/if}
</div>








<style>
    .turmas-estudante-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 97.5vh;
        background-color: aqua;
        margin: 0;
    }

    .sem-turmas > p {
        font-size: 20px;
    }

    .bt{
        border-radius: 15px;
        height: 50px;
        width: 160px;
        box-shadow: 0px 5px 8px gray;
        border: none;
        font-size: 18px;
    }

    .bt:hover{
        background-color: aliceblue;
    }

    .modal-entrar-turma{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 35%;
        background-color: rgb(41, 0, 136);
        position: fixed;
        align-items: center;
        padding: 20px;
        border-radius: 15px;
    }
    .title-modal{
        top: 0;
        position: relative;
    }
    .title-modal > h2{
        color: aliceblue;
    }
    .content-modal{
        display: flex;
        flex-direction: column;
        margin-top: 5%;
        width: 100%;
        height: 50%;
        justify-content: center;
        align-items: center;
    }

    .content-modal > form > input{
        height: 40%;
        width: 55%;
        border-radius: 15px;
        border: none;
        padding-left: 20px;
    }
    .content-modal > form > .row-buttons{
        display: flex;
        width: 100%;
        height: 50%;
        justify-content: center;
        margin-top: 5%;
        gap: 10%;
    }

    .row-buttons button{
        height: 100%;
    
    }
</style>