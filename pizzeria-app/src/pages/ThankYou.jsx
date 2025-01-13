import React, { useContext, useEffect } from "react";
import { PizzaContext } from "../App";
import { thicknesses } from "../components/PizzaItem";
import { sizes } from "../components/PizzaItem";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
import { useNavigate } from "react-router-dom";  // Імпорт useNavigate


const ThankYou = () => {
  const { cartItems, order } = useContext(PizzaContext);
  const date = new Date();

  // navigating to the main page when order is empty
  const navigate = useNavigate();

  useEffect(() => {
    if (!order || Object.keys(order).length === 0) {
      navigate("/");
    }
  }, [order, navigate]);

  // receipt downloader
  function downloadReceipt(){
    const capture = document.querySelector('.content');
    html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF('p', 'mm', 'a4');

        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight() * 0.35;
        const topMargin = 25;

        doc.addImage(imgData, 'PNG', 0, topMargin, componentWidth, componentHeight);
        doc.save(`order#${order.orderId}.pdf`);
    });
}

  console.log("your order: ", order);

  return (
    
    <div className="container">
      {order.orderedItems && (
        <div className="card">
        <div className="card-header">
        <span className='thank__span1'>THANKS FOR YOUR ORDER!            <img style={{width: '40px'}} src='https://cdn-icons-png.flaticon.com/128/2420/2420620.png'></img></span><br />
        <span className='thank__span3'>Your order #{order.orderId} is being prepared. We sent an email on your mail box with receipt</span>
        <br></br>
          <span className='thank__span4'>Date: {date.toDateString()}</span>
          <br></br><span className='thank__span4'>Estimated time: {order.deliveryTime}</span>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-sm-6">
              <br></br>
            <div className='thank__span3'><strong>Customer:</strong></div>
              <div className='thank__span4'>{order.firstName} {order.secondName}</div>
              <div className='thank__span4'>{order.address}, {order.city}</div>
              <div className='thank__span4'>Email: {order.email}</div>
              <div className='thank__span4'>Phone: {order.phone}</div>
            </div>
          </div>

          <br></br>
          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th className="right">Unit Cost</th>
                  <th className="center">Qty</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.orderedItems.map((item, index) => (
                  <tr key={index}>
                    <td className="center">{index + 1}</td>
                    <td className="left strong">{item.title}</td>
                    <td className="left">
                      Size: {sizes[item.selectedSize]}, Thickness: {thicknesses[item.selectedThickness]}
                    </td>
                    <td className="right">${item.price}</td>
                    <td className="center">{item.quantity}</td>
                    <td className="right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-5"></div>
            <div className="col-lg-4 col-sm-5 ml-auto">
              <table className="table table-clear">
                <tbody>
                  <tr>
                    <td className="left">
                      <strong>Total</strong>
                    </td>
                    <td className="right">
                      <strong>${order.total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="download">
          <button onClick={downloadReceipt} className="download_btn">Download receipt</button>
        </div>
      </div>
      )}
 
    </div>
  );
};

export default ThankYou;
