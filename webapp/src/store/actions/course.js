/**
 * Ação de atualização do estado para definir qual aulas/módulos estão ativos.
 * 
 * @param {Object} module : módulo recebido pelo dispatch da action. 
 * @param {Object} lesson : aula recebida pelo dispatch da action.
 */
export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson
  }
}
