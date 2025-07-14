<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        default: 'i-ph-cursor-click',
    },
})
</script>

<template>
    <div class="flex items-start gap-3 border p-2 rounded bg-gray-50">
        <div class="flex items-center justify-center border rounded-lg p-1.5">
            <UIcon :name="icon" />
        </div>
        <div class="flex flex-col">
            <h3 class="font-semibold">
                <ContentSlot name="title" />
            </h3>
            <span>
                <ContentSlot name="description" />
            </span>
        </div>
        <!-- DEBUGGING SLOT DATA -->
        <pre>{{ Object.keys($slots) }}</pre>
    </div>
</template>
