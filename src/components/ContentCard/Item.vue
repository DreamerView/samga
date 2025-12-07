<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card-item d-flex flex-column gap-2 w-100">
            <div class="preview rounded-4"></div>

            <h5 class="m-0">Lorem ipsum</h5>
            <p class="m-0 text-muted small">dolar upset</p>
        </div>
    </div>
</template>

<style scoped>
    .card-item {
        transition: all 0.25s ease;
        cursor: pointer;
        border-radius: 1rem;
        /* Чтобы hover выглядел мягко */
    }

    /* Hover эффект (поднимается + лёгкая тень + мягкое уменьшение opacity) */
    .card-item:hover {
        transform: translateY(-0.5rem);
        opacity: 0.8;
    }

    /* Картинка плавно увеличивается */
    .preview {
        width: 100%;
        aspect-ratio: 16/9;
        background: var(--bs-secondary-bg);
        border-radius: 1rem;
        transition: transform 0.3s ease;
    }

    .card-item:hover .preview {
        transform: scale(1.03);
    }
</style>