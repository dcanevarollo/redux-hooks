import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

/**
 * Componente stateless que representa a lista de lições e módulos.
 * 
 * @param props : props recebida. Conterá um objeto desestruturado ao qual, pelo Redux, terá os módulos (definidos no 
 * connect()) e a função dispatch da action que este componente stateless sofrerá. 
 */
export default function SideBar() {
  const modules = useSelector(state => state.course.modules);
  const dispatch = useDispatch();

  return (
    <aside>
      { modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>

          <ul>
            { module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button type="button" onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>
                  Selecionar
                </button>
              </li>
            )) }
          </ul>
        </div>
      )) }
    </aside>
  );
}
