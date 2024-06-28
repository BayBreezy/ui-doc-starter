<template>
  <UiContainer class="flex flex-col items-center justify-center py-16">
    <p class="text-center text-sm font-semibold text-primary">{{ feature.headline }}</p>
    <h1 class="mt-6 text-pretty text-center text-3xl font-semibold tracking-tight lg:text-4xl">
      {{ feature?.title }}
    </h1>
    <p class="mx-auto mt-5 max-w-[700px] text-pretty text-center text-lg text-muted-foreground">
      {{ feature?.description }}
    </p>

    <GlowCapture class="pb-10 pt-12" :size="600">
      <div
        v-if="feature.items && feature.items.length"
        class="mx-auto grid max-w-[900px] grid-cols-1 gap-10 md:grid-cols-2"
      >
        <template v-for="(item, i) in feature.items" :key="i">
          <GlowElement color="hsl(var(--primary))">
            <UiCard class="group rounded-xl glow:border-primary dark:glow:bg-primary/10">
              <UiCardContent>
                <UiFancyIcon class="pointer-events-none bg-transparent" :icon="item.icon" />
                <UiCardTitle class="mb-3 mt-6 text-xl font-semibold">{{ item.title }}</UiCardTitle>
                <UiCardDescription class="text-base">{{ item.description }}</UiCardDescription>
              </UiCardContent>
            </UiCard>
          </GlowElement>
        </template>
      </div>
    </GlowCapture>
  </UiContainer>
</template>

<script lang="ts">
  export type HomeHero = {
    headline?: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
</script>

<script lang="ts" setup>
  const { page } = useContent();
  const feature = computed<HomeHero>(() => page?.value?.feature);
</script>
