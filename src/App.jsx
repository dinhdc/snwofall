import './App.css';
import imgSvg from './assets/heart-small.svg';
function App() {
  return (
    <div className='snowflakes' aria-hidden='true'>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
      <div className='snowflake'>
        <img src={imgSvg} height={20} width={20} alt='' />
      </div>
    </div>
  );
}

export default App;
