import {useSelector} from 'react-redux'


function Account(){
    let data = useSelector((state) => {
            return state;
        });
    return(
        <>
        <div className="conatiner">
            <h2 className="text-primary">Account Deatils</h2>
        <table className="table table-striped table-border border-2 w-50">
            <tr>
                <th>Balance</th>
                <th>User Name</th>
                <th>Mobile</th>
            </tr>
            <tr>
                <td>{data.account.balance}</td>
                <td>{data.account.fullName}</td>
                <td>{data.account.mobile}</td>
            </tr>
        </table>

        <h2 className="text-primary">Transaction Deatils</h2>
        <table className="table table-striped table-border border-2 w-50">
            <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
            <tr>
              {
                data.transaction.map((tr,index) => {
                    <tr key={tr.id}>
                        <td>{tr.amount}</td>
                        <td>{tr.type}</td>
                        <td>{tr.date.toString(Date)}</td>
                    </tr>
                })
              }
            </tr>
        </table>
        </div>

        </>
    )
}

export default Account