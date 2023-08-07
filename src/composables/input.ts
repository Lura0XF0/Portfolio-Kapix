export function getComputedVmodelValue<Type> () {
  const props = defineProps<{ modelValue: Type }>()
  const emits = defineEmits<{
    (e: 'update:modelValue', value: Type): void
  }>()
  const value = computed({
    get () {
      return props.modelValue
    },
    set (value: Type) {
      emits('update:modelValue', value)
    }
  })
  return value
}
