export const useApiBridge = () => {
    const runtimeConfig = useRuntimeConfig()
    console.log(runtimeConfig.apiBase)
}
