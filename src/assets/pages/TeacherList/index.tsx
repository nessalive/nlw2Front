import React from 'react';
import './styles.css';
import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/TeacherItem';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis:">
                <form  id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materias</label>
                        <input type="text" id="subject"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"></input>
                    </div>
                </form>
            </PageHeader>

            <main>
              <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;