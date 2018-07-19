import global from '../../static/global';

class Orders extends React.Component{
  constructor (props) {
    super(props);

    this.count = 1;

    this.state = {
      orders: [
        {
          id: 1,
          date: "2018/01/01",
          price: "199000",
          state: "تحویل شده",
        },
        {
          id: 1,
          date: "2018/01/01",
          price: "199000",
          state: "تحویل شده",
        },
        {
          id: 1,
          date: "2018/01/01",
          price: "199000",
          state: "تحویل شده",
        },
        {
          id: 1,
          date: "2018/01/01",
          price: "199000",
          state: "تحویل شده",
        },
        {
          id: 1,
          date: "2018/01/01",
          price: "199000",
          state: "تحویل شده",
        }
      ],

      orderOpen: false,
    }
    this.toggleOrders = this.toggleOrders.bind(this);
  }

  toggleOrders(){
    $("#orderContainer").slideToggle();
    this.setState(prevState => {
      return {orderOpen: !prevState.orderOpen}
    });
  }
  render () {
    return (
      <div className="orders">
        <style jsx>{`
          .ordersTitle{
            color: ${global.gray};
            font-size: 18px;
            margin-right: 15px;
            margin-bottom: 10px;
          }
          .ordersTitle:hover{
            cursor: pointer;
          }
          .tableHeadRow{
            background: ${global.lightGray};
          }
          .orderRow{
            background: ${global.lighterGray};
          }
          .status{
            color: ${global.progressFill};
          }
          .pay{
            border: 1px solid ${global.gray};
            text-align: center;
            width: 70px;
            color: rgb(255, 255, 255);
            background: ${global.blue};
            font-size: 10px;
            border-radius: 50px;
            padding: 3px;
          }
          .pay:hover{
            cursor: pointer;
          }
        `}</style>
        <p className="ordersTitle" onClick={this.toggleOrders}>
          سفارشات <span className={this.state.orderOpen ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>
        </p>
        <div id="orderContainer">
          <table className="table">
            <thead>
              <tr className="tableHeadRow">
                <td className="">ردیف</td>
                <td className="">کد</td>
                <td className="">تاریخ و ساعت</td>
                <td className="">مبلغ کل</td>
                <td className="">وضعیت</td>
                <td className="">عملیات</td>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((order) => 
                <tr className="orderRow">
                  <td className="">{this.count++}</td>
                  <td className="">{order.id}</td>
                  <td className="">{order.date}</td>
                  <td className="">{order.price}</td>
                  <td className="status">{order.state}</td>
                  <td className="">
                    <div className="pay">
                      پرداخت
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Orders
