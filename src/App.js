import './App.css';
import LoginControl from './LoginControl';
import Count from './CountHooks';
import Clock from './Clock';
import { MyClock, ClockHooks } from './ClockHooks'
import FilterableProductTable from './FilterableProductTable';

function App() {

  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

  return (
    <div className="App">
      <header>
        <div>
          <Count />
        </div>
        <hr />
        <div>
          <ClockHooks />
        </div>
        <hr />
        <div>
          <MyClock />
        </div>
        <hr />
        <div>
          <Clock />
        </div>
        <hr />
        <div>
          <LoginControl />
        </div>
        <hr />
        <div>
          <FilterableProductTable products={PRODUCTS}/>
        </div>
      </header>
    </div>
  );
}

export default App;
