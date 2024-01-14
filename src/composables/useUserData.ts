import { type MaybeRefOrGetter, ref, toValue, watch } from "vue";
import type { UsersResponse } from "../types";

export function useUserData(name: MaybeRefOrGetter) {
  const data = ref<UsersResponse | null>(null);
  const error = ref(null);

  watch(() => toValue(name), (name) => {
    fetch(`https://dummyjson.com/users/search?q=${name}`)
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  }, { immediate: true });

  return { data, error };
}
