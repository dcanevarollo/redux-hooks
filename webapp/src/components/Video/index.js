import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Componente stateless do vídeo exibido na tela (conterá as informações do módulo e aula ativa).
 * 
 * @param props: props recebida. Desestrutaremos esta para adiquirirmos os dois estados mapeados pelo Redux: 
 * activeModule e activeLesson. 
 */
export default function Video() {
  const activeModule = useSelector(state => state.course.activeModule);
  const activeLesson = useSelector(state => state.course.activeLesson);

  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>

      <span>Aula {activeLesson.title}</span>
    </div>
  );
}
