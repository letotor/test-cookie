// composables/myComposable.js
export default function useMyComposable() {
  const generateMessage = (name) => {
    return `Bonjour, ${name} !`;
  };

  return {
    generateMessage,
  };
}
