import { ref, computed, watch, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  const nextTheme = computed(() => (theme.value === 'light' ? 'темная' : 'светлая'))

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  })

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      theme.value = savedTheme
    }
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return {
    nextTheme,
    toggleTheme,
  }
}