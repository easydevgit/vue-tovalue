<script setup lang="ts">
import { useUserData } from "./composables/useUserData";

const { name } = defineProps<{
  name: string;
}>();

const { data } = useUserData(() => name);

</script>

<template>
  <div>
    <div>
      name: {{ data?.users[0].firstName }}
    </div>
    <div>
      email: {{ data?.users[0].email }}
    </div>
  </div>
</template>