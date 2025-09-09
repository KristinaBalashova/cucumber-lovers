import { ref, computed, watch, onMounted } from 'vue';

export interface User {
  id: number;
  name: string;
  cucumbersCount: number;
}

export function useUsers() {
  const users = ref<User[]>([
    { id: 1, name: 'Иван Огурцов', cucumbersCount: 12 },
    { id: 2, name: 'Елена Зеленцова', cucumbersCount: 3 },
    { id: 3, name: 'Петр Рассолов', cucumbersCount: 9 },
    { id: 4, name: 'Мария Маринова', cucumbersCount: 4 },
  ]);

  const sortedUsers = computed(() =>
    [...users.value].sort((a, b) => {
      if (a.cucumbersCount === b.cucumbersCount) {
        return b.name.length - a.name.length;
      }
      return b.cucumbersCount - a.cucumbersCount;
    }),
  );

  const champion = computed(() => (sortedUsers.value.length > 0 ? sortedUsers.value[0] : null));

  const addCucumber = (userId: number) => {
    const user = users.value.find((u) => u.id === userId);
    if (user) {
      user.cucumbersCount += 1;
    }
  };
  return {
    users,
    sortedUsers,
    champion,
    addCucumber,
  };
}
