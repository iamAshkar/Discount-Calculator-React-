import './App.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';


function App() {
  const [amount, setAmount] = useState('')
  const [discount, setDiscount] = useState('')
  const [saving, setSaving] = useState('')
  const [pay, setPay] = useState('')


  function calculate() {
    const discnt = amount * (discount / 100)
    const pay = amount - discnt

    setSaving(discnt)
    setPay(pay)
  }



  return (
    <div className="App">
      <div className='row mt-5 '>

        <div className='col-lg-3 container ms-5 mt-5 text-center '>
          <div className='form1 bg-info border rounded p-2 '>
            <h3>Enter the discount details</h3>

            <MDBInputGroup className='mb-3'>
              <input className='form-control' type='text' placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            </MDBInputGroup>

            <MDBInputGroup className='mb-3'>
              <input className='form-control' type='text' placeholder="Discount%" onChange={(e) => setDiscount(e.target.value)} />
            </MDBInputGroup>




            <MDBBtn onClick={(e) => calculate(e)} className='mt-3'>CALCULATE %</MDBBtn> <br /><br />
          </div>

          <div className='form2 mt-4 bg-info border rounded p-2'>
            <h3 className='mt-4'>After discount</h3>
            <MDBInput className='mt-5 p-2 bg-light' label='Yoursaving ' id='form1' type='text' value={saving} />
            <MDBInput className='mt-3 p-2 bg-light' label='Youpay' id='form1' type='text' value={pay} />

          </div>

        </div>
        <div className='col-lg-6 container ms-5 mt-5  '>

          <div className='bg-light border rounded p-2'>
            <h4 className='text-center'>Discount Calculator</h4>
            <p id='para'>The word ‘discount’ enlivens the innate shopping lover in almost all of us. When we see a ‘discount’ board, definitely we would at least make a quick search if the product that we always wanted to buy is available on discount or not. Discounts are so attractive, aren’t they? Here, let us understand what exactly discounts are and how to calculate them, besides knowing some useful knowledge about discounts. Discount The word ‘discount’ means a reduction in the price of an item available for consumer purchase. A discounted item is available to the customer at a price lower than the MRP (Maximum Retail Price).</p>
          </div>

          <div className='p-3'>

            <MDBInput className='mt-3 bg-light p-3' label='Amount' id='form1' type='text' value={amount} />
            <MDBInput className='mt-3 bg-light p-3' label='Discount percentage' id='form1' type='text' value={discount} />
            <MDBInput className='mt-3 bg-light p-3' label='You Save:' id='form1' type='text' value={saving} />
            <MDBInput className='mt-3 bg-light p-3' bg-light label='Discountent Amount:' id='form1' type='text' value={pay} />
          </div>
        </div>
        <div className='col-lg-1'></div>
      </div>
    </div>
  );
}

export default App;