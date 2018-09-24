import React, { Component } from 'react';
import yes from './../../img/4_why_nano-ceramic/checkmark.png';
import no from './../../img/4_why_nano-ceramic/no.png';
import './fourth.css';

class Fourth extends Component {
  render() {
    return (
      <div className="fourth_container">
        <div className="fo-zagolovok"> 
          <p className="fo-zag"> чому <span className="fo-blue">нанокераміка</span> краще за інші засоби?</p>
          <p className="foMini">порівняння популярних видів обробки зовнішніх деталей кузова </p>
        </div>

        <table className="fo-table">
          <thead>
            <tr>
              <th></th>
              <th>нанокераміка cenano i</th>
              <th>полірування</th>
              <th>воскування</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fo-h">Відновлення зовнішнього вигляду</td>
              <td><img className='tableImgYes' src={yes} alt="1"/></td>
              <td><img className='tableImgYes' src={yes} alt="2"/></td>
              <td><img className='tableImgYes' src={yes} alt="3"/></td>
            </tr>
            <tr>
              <td className="fo-h">Захист лаку та фарби</td>
              <td><img className='tableImgYes' src={yes} alt="4"/></td>
              <td><img className='tableImgNo' src={no} alt="5"/></td>
              <td><img className='tableImgYes' src={yes} alt="6"/></td>
            </tr>
            <tr>
              <td className="fo-h">Збереження похідної товщини лаку та фарби</td>
              <td><img className='tableImgYes' src={yes} alt="7"/></td>
              <td><img className='tableImgNo' src={no} alt="8"/></td>
              <td><img className='tableImgYes' src={yes} alt="9"/></td>
            </tr>
            <tr>
              <td className="fo-h">Усунення пор та тріщин</td>
              <td><img className='tableImgYes' src={yes} alt="10"/></td>
              <td><img className='tableImgNo' src={no} alt="11"/></td>
              <td><img className='tableImgNo' src={no} alt="12"/></td>
            </tr>
            <tr>
              <td className="fo-h">Ефект "самоочищення"</td>
              <td><img className='tableImgYes' src={yes} alt="13"/></td>
              <td><img className='tableImgNo' src={no} alt="14"/></td>
              <td><img className='tableImgNo' src={no} alt="15"/></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>термін дії</td>
              <td>12 місяців</td>
              <td>3 місяці</td>
              <td>3 місяці</td>
            </tr>
          </tfoot>
        </table>

        <div className="fo-footer">
          <a href='#forma' id='bestShototam' >хочу найкращий засіб</a>
        </div>
      </div>
    );
  }
}

export default Fourth;
