import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }
      body{
        background: #F4F4F4;
        color:#000000;
        -webkit-font-smoothing: antialiased ;
        width: 100%;
      }
      body, input, button{
        font-family:  'Arial';
      }


      html{
          font-size: 62.5%;
        } 


      input{
          height: 50px;  
          font-size: 12px;
          cursor: pointer;
      }
      button{
          height: 50px;  
          width: 100px;
      }



      `;
